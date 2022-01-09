import { snap } from "@lib/timeFunction";
import propTypes from "prop-types";
import { useReducer, useState } from "react";
import s from "./Btn1.module.scss";

function changeTheme() {
  if (typeof window === "undefined") return;

  document.body.classList.add("theme2");
}
function Btn1(props) {
  const [theme, setTheme] = useState(0);

  return (
    <button
      onClick={() => {
        const old = theme % 3;
        const new_ = (old + 1) % 3;
        document.body.classList.add("theme" + new_);
        document.body.classList.remove("theme" + old);
        setTheme(new_);
      }}
      className={s.parent}
    >
      {(props.children || []).map((child, i) => (
        <span className={s.child} key={i}>
          {child}
        </span>
      ))}
    </button>
  );
}

Btn1.propType = {
  children: propTypes.array,
};

export default Btn1;
