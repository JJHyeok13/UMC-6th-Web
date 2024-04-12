import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/layout";
import MoviePage from "./pages/MoviePage";
import MainPage from "./pages/MainPage";
import UpcomingPage from "./pages/UpcomingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="movie" element={<MoviePage />} />
          <Route path="/upcoming" element={<UpcomingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
