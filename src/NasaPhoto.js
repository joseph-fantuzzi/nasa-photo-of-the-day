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

//Keyframes

const TextKeyFrame = keyframes`
   50% {
      transform: scale(0.5);
   }
   100% {
      opacity: 1;
      transform: scale(1);
   }
`;

const LogoKeyFrame = keyframes`
   100% {
      opacity: 1;
      transform: scale(1) rotateZ(0);
   }
`;

const ButtonKeyFrame = keyframes`
   50% {
      transform: scale(0.5);
   }
   100% {
      opacity: 1;
      transform: scale(1);
   }
`;

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

const LogoImg = styled.img`
  padding: 30px;
  height: 250px;

  opacity: 0;
  transform: scale(2) rotateZ(180deg);
  animation: ${LogoKeyFrame} 0.5s ease-in-out forwards;

  @media ${(prop) => prop.theme.breakpointMobile} {
    height: 200px;
  }
`;

const MainContentDiv = styled.div`
  width: 70%;
  margin: 0 auto;
  max-width: 1500px;
`;

const TextWrapperDiv = styled.div`
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 50px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: none;

  background-color: ${(prop) => (prop.media === "image" ? "#0b3d91" : "#d3d3df")};
  color: ${(prop) => (prop.media === "image" ? "white" : "black")};

  transform: scale(3);
  opacity: 0;
  animation: ${TextKeyFrame} 0.5s ease-in-out forwards;
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

  transform: scale(3);
  opacity: 0;
  animation: ${TextKeyFrame} 0.5s ease-in-out forwards;
`;

const NasaImage = styled.img`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 100px;
  width: 60%;
  height: 500px;

  @media ${(prop) => prop.theme.breakpointMobile} {
    width: 100%;
  }
`;

const NasaIframe = styled.iframe`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  margin-bottom: 100px;
  width: 60%;
  height: 500px;

  @media ${(prop) => prop.theme.breakpointMobile} {
    width: 100%;
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
          <LogoImg id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png" alt="NASA Logo" />
          <TextWrapperDiv media={mediaType}>
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{explanation}</p>
          </TextWrapperDiv>
          <Button onClick={modal}>Click for a Full Screen View</Button>
          <div className="nasa-pic-wrapper">
            {mediaType === "video" ? (
              <NasaIframe src={url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={title} />
            ) : (
              <NasaImage src={url} alt="APOD Image" />
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
