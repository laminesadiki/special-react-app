import React from "react";
import "./Card.css";

function Card(props) {
  const { title, price, img } = props;
  return (
    <div class="card">
      <img src={img} alt="" class="card-img-top" />
      <div class="card-body">
        <a href="##" class="card-title">
          <h5>{title}</h5>
        </a>
        <p class="text-muted">{price}</p>
      </div>
      <button class="btn">Acheter</button>
    </div>
  );
}

export default Card;



