import React from "react";

const Tile = props => {
  return (
    <div className="tile" onClick={() => props.incrementGame(props.name)} >
      <img className="tile-image" src={props.source} alt={props.name} />
      <div className="tile-name"><h2>{props.name}</h2></div>
    </div>
  )
}

export default Tile;