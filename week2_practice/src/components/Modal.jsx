import React from "react";
import "./modal.css";

const Modal = (props) => {
  return (
    <div id="background">
      <div id="modal-container">
        <h1>안녕하세요</h1>
        <p>모달 내용은 어쩌고 저쩌고...</p>
        <button onClick={props.handleModal}>모달 닫기</button>
      </div>
    </div>
  );
};

export default Modal;
