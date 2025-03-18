import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import { BlogDetails } from "../components/BlogDetails";

export const Blog = () => {
  const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
  const location = useLocation();
  const blogId = location.pathname.split("/").at(-1);
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigate();

  async function fetchRelatedBlog() {
    setLoading(true);
    let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
    console.log(url);
    try {
      let response = await fetch(url);
      let result = await response.json();

      console.log(result.blog);
      console.log(result.relatedBlogs);
      setBlog(result.blog);
      setRelatedBlogs(result.relatedBlogs);
    } catch (error) {
      console.log("error in getting realted blog", error);
      setBlog(null);
      setRelatedBlogs([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlog();
    }
  }, [location.pathname]);
  return (
    <div>
      <Header />
      <div className="mt-[100px]">
        <button onClick={() => navigation(-1)}>Back</button>
      </div>
      {loading ? (
        <p>Loading....</p>
      ) : blog ? (
        <div>
          <BlogDetails post={blog} />

          <h2>Related Blogs</h2>

          {relatedBlogs.map((blog) => (
            <div key={blog.id}>
              <BlogDetails post={blog} />
            </div>
          ))}
        </div>
      ) : (
        <div>NO BLOG FOUND</div>
      )}
    </div>
  );
};
