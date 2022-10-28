import React, { useState } from "react";
import { useSpring, animated } from "react-spring";

import Styles from "../Styles/Card.module.css";

function Card({ imagen, title, position,description }) {
  const [show, setShown] = useState(false);

  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)",
  });
  return (
    <animated.div
      className={Styles.card}
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <img src={imagen} alt="" />
      <h2>{title}</h2>
      <p>{description}
      {/* Lose up to 15kg of fat , gain muscle , maintain , or prep for a show. This package covers all of your needs. */}
      </p>
      <h1 className={Styles.position}>{position}</h1>
    </animated.div>
  );
}

export default Card;
