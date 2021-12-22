import propTypes from "prop-types";
import { useEffect, useRef } from "react";

function H({ text }) {
  return (
    <div
      sx={{
        textAlign: "center",
        minHeight: "100vh",
        display: "grid",
        placeContent: "center",
      }}
    >
      <div
        sx={{
          maxHeight: 0,
          transition: "max-height 0.75s ease-in-out",
          " > *": {
            transform: "rotateX(90deg)",
            transition: "transform 0.75s ease-in-out",
            display: "none",
          },
          " > .triggered": {
            transform: "rotateX(0deg)",
            display: "block",
          },
        }}
      >
        <h1>{text[0]}</h1>
        <h1>{text[1]}</h1>
        <h1>{text[2]}</h1>
      </div>
    </div>
  );
}

H.propTypes = {
  text: propTypes.array,
};

export default H;
