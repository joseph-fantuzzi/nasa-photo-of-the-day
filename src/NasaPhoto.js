import React, { useState, useEffect } from "react";
import "./App.css";

function NasaPhoto(props) {
  const { url, date, explanation, mediaType, title } = props;

  return (
    <div className="apod-wrapper">
      <div className="header">
        <h1 className="apod-title">NASA APOD</h1>
        <h2>Astronomy Picture of the Day</h2>
      </div>
      <img id="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/NASA_logo.svg/200px-NASA_logo.svg.png" alt="NASA Logo" />
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{explanation}</p>
      <div className="nasa-wrapper">
        {mediaType === "video" ? (
          <iframe width="853" height="480" src={url} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen title={title} />
        ) : (
          <img src={url} alt="APOD Image" />
        )}
      </div>
    </div>
  );
}

export default NasaPhoto;
