import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieComponent from "../components/movieComponent";

const UpcomingPage = () => {
  const [movieData, setMovieData] = useState([]);

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const res = await axios.get(
          `https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1`,
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNGExZTI3MmNjZTg5YmZjMzczNTgyM2IzMDZlOGQ5YyIsInN1YiI6IjY1NWYxYThlNzA2ZTU2MDBlMTUxYTQyOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.J5P95D1iwiYxcuJFdyot-4hZ0peqxUiPLawZuTUO4J0",
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

export default UpcomingPage;
