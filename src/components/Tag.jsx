import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner";
const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;
import { useGif } from "../Hooks/useGif";
function Tag() {
  const [tag, setTag] = useState("");
  //   const [gif, setGif] = useState('');
  //   const [loading, setLoading] = useState(false); // Loading state

  //   async function fetchGif() {
  //     setLoading(true); // Start loading
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //     try {
  //       const output = await axios.get(url);
  //       const gifUrl = output.data.data.images.downsized_large.url;
  //       setGif(gifUrl);
  //     } catch (error) {
  //       console.error('Error fetching the GIF:', error);
  //     } finally {
  //       setLoading(false); // Stop loading
  //     }
  //   }

  //   useEffect(() => {
  //     fetchGif(); // Fetch GIF when the component mounts
  //   }, []);
  const { gif, fetchGif, loading } = useGif(tag);
  function clickHandler() {
    fetchGif(); // Fetch a new GIF on button click
  }
  function changeHandler(e) {
    setTag(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div className="w-1/2  bg-blue-500 mx-auto rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="text-3xl uppercase underline font-bold">
        Random {tag} GIF
      </h1>
      {loading ? (
        <Spinner /> // Show spinner while loading
      ) : (
        gif && (
          <img src={gif} alt="Random GIF" className="rounded-lg shadow-lg" />
        )
      )}
      <input
        type="text"
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center bg-white"
        onChange={changeHandler}
        value={tag}
        placeholder="enter tag"
      />

      <button
        onClick={clickHandler}
        className="w-10/12 bg-yellow-500 text-lg py-2 rounded-lg  mb-[20px]"
      >
        Generate
      </button>
    </div>
  );
}
export default Tag;
