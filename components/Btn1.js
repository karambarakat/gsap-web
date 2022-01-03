import { snap } from "@lib/timeFunction";
import propTypes from "prop-types";
import s from "./Btn1.module.scss";

function Btn1(props) {
  return (
    <button className={s.parent}>
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
