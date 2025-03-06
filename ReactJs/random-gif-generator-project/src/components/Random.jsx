import { useState, useEffect } from "react";
import axios from "axios";

const GIPHY_API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

// https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}
export default function Random() {
  const url = `https://api.giphy.com/v1/gifs/random?api_key=${GIPHY_API_KEY}&`;
  console.log(url);
  const [gif, setGif] = useState("");

  const generateGif = async () => {
    const response = await axios.get(url);
    const gifUrl = response.data.data.user.avatar_url;
    // console.log(response);
    setGif(gifUrl);
  };

  useEffect(() => {
    generateGif();
  }, []);

  console.log(gif);
  function handleGenerateGifs() {
    generateGif();
  }
  return (
    <div>
      <div>
        <h2>A RANDOM GIF</h2>
        {/* <img
          src={gif}
          alt="Random GIF"
          className="max-w-[30rem] px-4 object-contain"
        /> */}
        <img src={gif} />
        <button onClick={handleGenerateGifs}>Generate</button>
      </div>
      <div>
        <h2>A RANDOM GIF</h2>
        {/* <img
          src={gif}
          alt="Random GIF"
          className="max-w-[30rem] px-4 object-contain"
        /> */}
        <img src={gif} />
        <input></input>
        <button onClick={handleGenerateGifs}>Generate</button>
      </div>
    </div>
  );
}
