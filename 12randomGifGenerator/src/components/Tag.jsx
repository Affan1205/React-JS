import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "./Spinner";
import useGif from "../hook/useGif";

const API_KEY = import.meta.env.VITE_GIPHY_API_KEY;

const Tag = () => {
  const [tag, setTag] = useState("car");
  //   const [gif, setGif] = useState("");
  //   const [loading, setLoading] = useState(false);

  //   async function fetchData() {
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //     const output = await axios.get(url);
  //     const imageSource = output.data.data.images.downsized_large.url;
  //     setGif(imageSource);
  //     setLoading(false);
  //   }

  //   useEffect(() => {
  //     fetchData();
  //   }, []);

  const { gif, loading, fetchData } = useGif(tag);

  function clickHandler() {
    fetchData(tag);
  }
  function changeHandler(event) {
    setTag(event.target.value);
  }
  return (
    <div className="w-1/2 h-[450px] bg-blue-400 rounded-lg flex flex-col items-center gap-y-5 mt-[15px] border border-black">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">Random {tag} Gif</h1>

      {loading ? <Spinner></Spinner> : <img src={gif} width="450" />}

      <input
        type="text"
        onChange={changeHandler}
        value={tag}
        className="w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center"
      />
      <button onClick={clickHandler} className="bg-white w-10/12 text-lg py-2 rounded-lg">
        Generate
      </button>
    </div>
  );
};

export default Tag;
