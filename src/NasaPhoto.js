import React, { useState, useEffect } from "react";
import "./App.css";

function modal() {
  const modal = document.querySelector(".modal");
  modal.classList.add("modal-active");
}

document.addEventListener("click", () => {
  const remove = document.querySelector(".modal");
  remove.classList.remove("modal-active");
});

function NasaPhoto(props) {
  const { url, date, explanation, mediaType, title } = props;

  return (
    <>
      <div className="apod-wrapper">
        <div className="header">
          <h1 className="apod-title">NASA APOD</h1>
          <h2>Astronomy Picture of the Day</h2>
        </div>
        <div className="main-content">
          <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png" alt="NASA Logo" />
          <div className="text-wrapper">
            <h2>{title}</h2>
            <p>{date}</p>
            <p>{explanation}</p>
          </div>
          <button onClick={modal} className="button">
            Click for a Full Screen View
          </button>
          <div className="nasa-pic-wrapper">
            {mediaType === "video" ? (
              <iframe src={url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={title} />
            ) : (
              <img src={url} alt="APOD Image" />
            )}
          </div>
        </div>
      </div>
      <div className="modal">
        <div className="nasa-pic-wrapper">
          {mediaType === "video" ? (
            <iframe src={url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={title} />
          ) : (
            <img src={url} alt="APOD Image" />
          )}
        </div>
      </div>
    </>
  );
}

export default NasaPhoto;
