import propTypes from "prop-types";
import { useEffect, useReducer, useRef, useState } from "react";
import { Provider } from "../context";
import { onScroll_callbacks } from "./onScroll_callbacks";
import onScroll_next from "./onScroll_next";

function reducer(state, action) {
  console.log("fiz state", state);
  switch (action.type) {
    case "addItems":
      const dir = action.dir || "down";
      const newArr = [...(state[dir]?.arr || []), ...action.payload].sort(
        (a, b) => a.threshold - b.threshold
      );

      return {
        ...state,
        [dir]: { arr: newArr, fn: action.fn },
      };

    case "deleteWithUUID":
      return {
        down: state.down.filter((scroll) => scroll.uuid === action.payload),
      };

    default:
      console.log("hit default, bug?");
      return state;
  }
}

/**
 * @param {Number[]} thresholds list of numbers between 1 and 0, these are percentages of the viewport. 1 means the bottom of the viewport 0 means the top of the viewport. default is [1]
 * @returns
 */
export function ScrollProvider({ children, percent = 1 }) {
  const [scrolls, dispatch] = useReducer(reducer, {});

  const [callbacks, setCallbacks] = useState([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    //todo: prepare the helper object
    const sHelper = Object.keys(scrolls).reduce((acc, e) => {
      acc[e] = { startAt: 0 };
      return acc;
    }, {});

    function onScroll(e) {
      onScroll_callbacks(callbacks);
      onScroll_next(scrolls, sHelper, setCallbacks, percent);
    }

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [scrolls, callbacks]);
  return (
    <Provider value={{ scrolls, dispatch /*,callbacks, setCallbacks*/ }}>
      {/* <div ref={ref}>{children}</div>; */}
      {children}
    </Provider>
  );
}
ScrollProvider.prototype = {
  thresholds: propTypes.array,
};
