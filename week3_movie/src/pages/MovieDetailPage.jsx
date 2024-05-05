import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-color: navy;
`;

const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  color: white;
  padding: 10px;
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const MovieDetailPage = () => {
  const location = useLocation();
  const { title } = useParams();
  const data = location.state;

  const calScore = (vote_average) => {
    const stars = "⭐️".repeat(Math.floor(vote_average));
    return stars;
  };

  return (
    <Background>
      <Container>
        <img
          src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`}
          alt={data.title}
          className="movie-poster"
        />
        <Information>
          <div>{title}</div>
          <div>{calScore(data.vote_average)}</div>
          <div>{data.overview}</div>
        </Information>
      </Container>
    </Background>
  );
};

export default MovieDetailPage;
