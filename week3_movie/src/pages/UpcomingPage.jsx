import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Background = styled.div`
  width: 100%;
  background-color: navy;
`;

const HeaderTitle = styled.h1`
  text-align: center;
  color: white;
  padding: 20px;
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;

  padding: 10px 40px;
`;

const ContentContainer = styled.div`
  background-color: black;
  padding: 10px;
  position: relative;

  &:hover .movie-poster-container {
    opacity: 0.3;
  }
`;

const MovieOverview = styled.div`
  position: absolute;

  display: none;
  color: white;

  padding: 20px;

  z-index: 999;

  word-wrap: break-word;

  ${ContentContainer}:hover & {
    display: block;
  }
`;

const MoviePoster = styled.img`
  width: 100%;
  padding: 5px;
  box-sizing: border-box;
  z-index: 1;
`;

const MovieData = styled.div`
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 50px;
`;

const UpcomingPage = () => {
  const [movieData, setMovieData] = useState([]);

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
          params: {},
        }
      );

      setMovieData(res.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovieData();
  });

  return (
    <Background>
      <HeaderTitle>Movies</HeaderTitle>
      <hr />
      <MovieContainer>
        {movieData.results.map((movie, index) => (
          <ContentContainer key={index}>
            <div>
              <MovieOverview className="movie-overview">
                <h2>{movie.title}</h2>
                <p>{movie.overview}</p>
              </MovieOverview>

              <div className="movie-poster-container">
                <MoviePoster
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-poster"
                />
              </div>

              <MovieData>
                <div>{movie.title}</div>
                <div>{movie.vote_average}</div>
              </MovieData>
            </div>
          </ContentContainer>
        ))}
      </MovieContainer>
    </Background>
  );
};

export default UpcomingPage;
