import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100%;
`;

const Banner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  background-color: black;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: 30px;
`;

const Search = styled.div`
  width: 100%;
  height: 50%;
  text-align: center;
  background-color: navy;
  color: white;
  font-weight: bold;
  font-size: 30px;
`;

const MainPage = () => {
  return (
    <Container>
      <Banner>환영합니다.</Banner>
      <Search>Find Your Movies!</Search>
    </Container>
  );
};

export default MainPage;
