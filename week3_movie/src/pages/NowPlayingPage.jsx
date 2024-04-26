import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieComponent from "../components/movieComponent";

const NowPlayingPage = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/now_playing`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
            },
            params: {
              language: "en-US",
              page: 1,
            },
          }
        );
        setMovieData(res.data.results);
      } catch (error) {
        console.log(error);
      }
    };
    getMovieData();
  });

  return <MovieComponent movieData={movieData} />;
};

export default NowPlayingPage;
