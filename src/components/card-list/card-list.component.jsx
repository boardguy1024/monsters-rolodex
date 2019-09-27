import React from "react";
import "./card-list.style.css";
import "../card.component";
import { Card } from "../card.component";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
};
