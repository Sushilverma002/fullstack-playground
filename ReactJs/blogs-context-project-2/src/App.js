import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pagination";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Tag } from "./Pages/Tag";
import { Blog } from "./Pages/Blog";
import { Category } from "./Pages/Category";

export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  // syntax of useSearchParams HOOK
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  // https://codehelp-apis.vercel.app/api/get-blogs?page=1&tag=${tag}

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if (location.pathname.includes("tags")) {
      const tag = location.pathname.split("/").at(-1).replaceAll(" ", "-");
      fetchBlogPosts(Number(page), tag);
    } else if (location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll(" ", "-");
      fetchBlogPosts(Number(page), null, category);
    } else {
      fetchBlogPosts(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories/:categoryName" element={<Category />} />
        <Route path="/tag/:tagName" element={<Tag />} />
        <Route path="/blogs/:blogId" element={<Blog />} />
      </Routes>
    </>
  );
}
