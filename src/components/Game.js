import React, { useState, useEffect } from "react";
import Header from "./Header";
import Tile from './Tile';
import porygon2_image from "../images/porygon2.jpeg";
import forretress_image from "../images/forretress.jpeg";
import conkeldurr_image from "../images/conkeldurr.jpeg";
import kingler_image from "../images/kingler.jpeg";
import magcargo_image from "../images/magcargo.jpeg";
import murkrow_image from "../images/murkrow.jpeg";
import ariados_image from "../images/ariados.jpeg";
import drilbur_image from "../images/drilbur.jpeg";
import '../styles/Game.css';

const Game = () => {

  const shuffle_array = a => {
    let j, x, i;

    for (i = a.length -1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
  
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [comparisonArray, setComparisonArray] = useState([]);

  const pokemons = [{name: "Porygon 2", image: porygon2_image}, {name: "Forretress", image: forretress_image}, 
  {name: "Conkeldurr", image: conkeldurr_image}, {name: "Kingler", image: kingler_image}, {name: "Magcargo", image: magcargo_image},
  {name: "Murkrow", image: murkrow_image}, {name: "Ariados", image: ariados_image}, {name: "Drilbur", image: drilbur_image}]

  const incrementGame = (clickedName) => {
    if (comparisonArray.includes(clickedName)) {
      setComparisonArray([]);
      setScore(0);
    } else {
      setComparisonArray([...comparisonArray, clickedName]);
      setScore(score + 1);
    }
  }

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }

    if (score === 8) {
      alert("You've won!");
    }
  }, [score, highScore])

  return (
    <div className="full-app">
      <Header score={score} high_score={highScore} />
      <div className="tile-container">
        {shuffle_array(pokemons).map((pokemon) => {
          return <Tile source={pokemon.image} name={pokemon.name} incrementGame={(clickedName) => {incrementGame(clickedName)}} />
        })}
      </div>
    </div>
  )
}

export default Game;