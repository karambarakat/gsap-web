import propTypes from "prop-types";
import { useEffect, useReducer, useRef, useState } from "react";
import waitFor from "@lib/waitFor";
import { useScrollEffect, useYScrollEffect } from "@lib/useScrollEffect";
import { snap } from "@lib/timeFunction";
import s from "./H1.module.scss";

function H1_({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    animate(ref.current);
  }, []);

  return (
    <div className={s.center}>
      <div ref={ref} className={s.container}>
        {children.map((e, i) => {
          return <h1 key={i}>{e}</h1>;
        })}
      </div>
    </div>
  );
}

async function animate(element) {
  try {
    const offsetHeight = element.offsetHeight / 3;
    element.style.height = `${offsetHeight}px`;

    element.children[0].classList.add(s.triggered);
    await waitFor(600);
    element.style.height = `${offsetHeight * 2}px`;
    await waitFor(100);

    element.children[1].classList.add(s.triggered);
    await waitFor(600);
    element.style.height = `${offsetHeight * 3}px`;
    await waitFor(100);

    element.children[2].classList.add(s.triggered);
    await waitFor(600);
  } catch (e) {}
}

H1_.propTypes = {
  children: propTypes.array,
};

export default H1_;
