import React, { useEffect, useRef, useState } from "react";
import "./cards.css";
import cards_data from "../../assets/cards/Cards_data";
import { Link } from "react-router-dom";

const Cards = ({ title, category }) => {
  const [apiData, setApiData] = useState([]); //The empty array is used because we are getting data from API in form of array
  const cardsRef = useRef();

  // **USING API** //

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MjMxMDNjZTE2Nzk3MzRjYzExMmE3YWExZWM0M2E1MyIsIm5iZiI6MTcyMDE5OTU1NS4zMTQyODEsInN1YiI6IjY2ODgyNmNlOGIzOTliYTk0ZTFiODYzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.VUJ647Za1rCPD5WitDG4Eu8f-bOS6Ha1nTdTCUNe9EQ",
    },
  };

  // **USING API** //

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    // **FETCH API**//

    fetch(
      `https://api.themoviedb.org/3/movie/${
        category ? category : "now_playing"
      }?language=en-US&page=1`,
      options
    )
      .then((response) => response.json())
      .then((response) => setApiData(response.results))
      .catch((err) => console.error(err));

    //**FETCH API**//

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="cards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="cardList" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                alt=""
              />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
