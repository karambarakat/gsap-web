import propTypes from "prop-types";
import { useEffect, useReducer, useState } from "react";
import { Provider } from "../context";
import { onScroll_callbacks } from "./onScroll_callbacks";
import onScroll_next from "./onScroll_next";
import reducer from "./reducer";

/**
 * @param {Number[]} thresholds list of numbers between 1 and 0, these are percentages of the viewport. 1 means the bottom of the viewport 0 means the top of the viewport. default is [1]
 * @returns
 */
export function ScrollProvider({ children, percent = 1 }) {
  const [scrolls, dispatch] = useReducer(reducer, {});

  const [callbacks, setCallbacks] = useState([]);

  /**
   * detect if crossed any thresholds defined by the user and fire the callback they define
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    const sHelper = Object.keys(scrolls).reduce((acc, e) => {
      acc[e] = { startAt: 0 };
      return acc;
    }, {});

    function onScroll(e) {
      onScroll_next(scrolls, sHelper, setCallbacks, percent);
    }

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [scrolls]);

  /**
   * if the user has register any callback add event lister to call them
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    function onScroll(e) {
      onScroll_callbacks(callbacks);
    }

    if (callbacks.length !== 0) {
      document.addEventListener("scroll", onScroll);
      return () => document.removeEventListener("scroll", onScroll);
    }
  }, [callbacks]);

  /**
   * return JSX Provider
   */
  return (
    <Provider value={{ dispatch }}>
      {/* <div ref={ref}>{children}</div>; */}
      {children}
    </Provider>
  );
}

/**
 * acceptable prop typs
 */
ScrollProvider.prototype = {
  percent: propTypes.number,
};
