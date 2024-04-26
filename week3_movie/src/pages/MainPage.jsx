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
  background-color: #0c0c41;
  color: white;
  font-weight: bold;
  font-size: 30px;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
`;

const SearchBarContainer = styled.div`
  width: 20%;
  display: flex;
  align-items: center;
  margin: 20px auto;
`;

const SearchInput = styled.input`
  width: 90%;
  padding: 10px;
  border-radius: 10px;
`;

const SearchButton = styled.div`
  display: flex;
  margin-left: 15px;
  cursor: pointer;
`;

const MainPage = () => {
  return (
    <Container>
      <Banner>환영합니다.</Banner>
      <Search>
        🎬 Find Your Movies!
        <SearchBarContainer>
          <SearchInput type="text" placeholder="영화 제목을 입력해주세요" />
          <SearchButton>🔎</SearchButton>
        </SearchBarContainer>
      </Search>
    </Container>
  );
};

export default MainPage;
