import React from "react";
import "./cardlist.css";

const CardList = ({ monst }) => {
  return (
    <div className="card-list">
      {monst.map((monster) => (
        <div className="card-container" key={monster.id}>
          <h1>{monster.name}</h1>
          <img
            alt="monster"
            height="180"
            width="180"
            src={`https://robohash.org/${monster.id}?set=set2`}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;
