import React, { useState, useEffect } from "react";
import "./App.css";
import styled, { keyframes } from "styled-components";

//Regular

function modal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("modal-active");
}

document.addEventListener("click", () => {
  const remove = document.querySelector(".modal");
  remove.classList.remove("modal-active");
});

//Styled Components

const ApodWrapperDiv = styled.div`
  text-align: center;
`;

const HeaderDiv = styled.div`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 0 20px;
  padding-bottom: 35px;

  background-color: ${(prop) => (prop.media === "image" ? "#fc3d21" : "#0b3d91")};

  color: ${(prop) => (prop.media === "image" ? "#0b3d91" : "white")};
`;

const ApodTitleH1 = styled.h1`
  padding-top: 20px;
  font-weight: 700;
  font-size: 3rem;
`;

const MainContentDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  max-width: 1500px;
`;

const TextWrapperDiv = styled.div`
  border: 3px solid ${(prop) => prop.theme.secondaryColor};
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 50px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const Button = styled.button`
  font-family: "Poppins", sans-serif;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 30px;
  padding: 10px;
  margin-bottom: 50px;
  transition: all 0.6s ease;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  border: 3px solid ${(prop) => prop.theme.secondaryColor};
  background-color: ${(prop) => prop.theme.primaryColor};
  color: ${(prop) => prop.theme.black};

  &:hover {
    background-color: #fc3d21;
    color: ${(prop) => prop.theme.white};
  }
`;

//JSX

function NasaPhoto(props) {
  const { url, date, explanation, mediaType, title } = props;

  return (
    <>
      <ApodWrapperDiv>
        <HeaderDiv media={mediaType}>
          <ApodTitleH1>NASA APOD</ApodTitleH1>
          <h2>Astronomy Picture of the Day</h2>
        </HeaderDiv>
        <MainContentDiv>
          <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png" alt="NASA Logo" />
          <TextWrapperDiv>
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{explanation}</p>
          </TextWrapperDiv>
          <Button onClick={modal}>Click for a Full Screen View</Button>
          <div className="nasa-pic-wrapper">
            {mediaType === "video" ? (
              <iframe src={url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={title} />
            ) : (
              <img src={url} alt="APOD Image" />
            )}
          </div>
        </MainContentDiv>
      </ApodWrapperDiv>
      <div className="modal">
        <div className="nasa-pic-wrapper">
          {mediaType === "video" ? (
            <iframe src={url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={title} />
          ) : (
            <img src={url} alt="APOD" />
          )}
        </div>
      </div>
    </>
  );
}

export default NasaPhoto;
