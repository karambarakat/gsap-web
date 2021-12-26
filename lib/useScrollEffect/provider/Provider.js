import propTypes from "prop-types";
import { useEffect, useReducer, useState } from "react";
import { Provider } from "../context";
import down_fn from "../onScroll/down_fn";
import up_fn from "../onScroll/up_fn";
import y_fn from "../onScroll/y_fn";
import call from "./call";
import useStates from "./useStates";

export function ScrollProvider({ children, percent = 0 }) {
  //todo: make sure { down, up, y, callbacks } don't update unnecessarily
  const [{ down, up, y, cbs }, dispatch] = useStates();
  // console.log("Provider", "\ndown", down, "\nup", up, "\ny", y, "\ncbs", cbs);

  /**
   * detect if crossed any thresholds defined by the user and fire the callback they define
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    /**
     * this is just plain object that helps with optimize the performance when calling the onScroll
     * make new one every time scroll change
     * this has to be made off nested object to be passed by reference
     */
    const sHelper = {
      up: { startAt: 0 },
      down: { startAt: 0 },
      y: { startAt: 0 },
    };

    /**
     * function to be registered with scroll event
     * @param {Event} triggerOnScroll when called by me will be undefined as oppose of scroll event listener
     */
    function onScroll(triggerOnScroll) {
      // console.log("enter on scroll", down.length, up.length, y.length);
      // if percent is 1 this number will be the window height
      const stake = window.scrollY + window.innerHeight * percent;

      //down
      if (down.length !== 0) {
        const helper = sHelper.down;
        down_fn(
          down,
          helper,
          stake,
          call(dispatch, percent, Boolean(triggerOnScroll))
        );
      }

      //up
      if (up.length !== 0) {
        const helper = sHelper.up;
        up_fn(
          up,
          helper,
          stake,
          call(dispatch, percent, Boolean(triggerOnScroll))
        );
      }

      //y
      if (y.length !== 0) {
        const helper = sHelper.y;
        y_fn(
          y,
          helper,
          stake,
          call(dispatch, percent, Boolean(triggerOnScroll))
        );
      }
    }

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [down, up, y]);

  /**
   * if the user has register any callback add event lister to call them
   */
  useEffect(() => {
    if (typeof window === "undefined") return;

    function onScroll(e) {
      const scrollY = window.scrollY;
      const clientH = window.innerHeight;
      cbs.forEach((e) => e.callback({ scrollY, clientH }));
    }

    if (cbs.length !== 0) {
      document.addEventListener("scroll", onScroll);
      return () => document.removeEventListener("scroll", onScroll);
    }
  }, [cbs]);

  /**
   * return JSX Provider
   */
  return (
    <Provider value={dispatch}>
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
