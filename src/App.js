import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import NasaPhoto from "./NasaPhoto";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return <div className="container">{data && <NasaPhoto url={data.url} date={data.date} explanation={data.explanation} mediaType={data.media_type} title={data.title} />}</div>;
}

export default App;
