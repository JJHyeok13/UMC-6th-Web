import React, { useState } from "react";
import Counter from "./components/Counter";
import Modal from "./components/Modal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <h1>Practice 1. 카운터 만들기</h1>
      <Counter />
      <hr />
      <h1>Practice 2. 모달 만들기</h1>
      <h1>안녕하세요</h1>
      <p>내용내용내용</p>
      <button onClick={handleModal}>모달 열기</button>
      {isModalOpen && <Modal handleModal={handleModal} />}
    </>
  );
}

export default App;
