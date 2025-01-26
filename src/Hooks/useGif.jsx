const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

import { useState, useEffect } from "react";
import axios from "axios";

export  function useGif(tag) {
  const tagMemeUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
  const [gif, setGif] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  async function fetchGif() {
    setLoading(true); // Start loading
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    try {
      const output = await axios.get(tag ? tagMemeUrl : randomUrl);
      const gifUrl = output.data.data.images.downsized_large.url;
      setGif(gifUrl);
    } catch (error) {
      console.error("Error fetching the GIF:", error);
    } finally {
      setLoading(false); // Stop loading
    }
  }

  useEffect(() => {
    fetchGif(); // Fetch GIF when the component mounts
  }, []);
  return { gif, fetchGif, loading };
}
// export default useGif;
