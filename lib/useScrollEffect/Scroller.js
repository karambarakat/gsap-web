// todo: delete this file
// !:    delete this file
import propTypes from "prop-types";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import uuid from "./uuid";
import { Provider, useScroll } from "./context";
import detectNextThreshold from "./provider/detectNextThreshold";

const scrollContext = createContext([]);

//todo: make work both way up and down
/**
 * ! /** VISUAL DECIDER
 * make a provider and register event callback
 */
// todo: execute all callback
// var callbacks = [];
// // todo: comparison should be done by function reference (not uuid), but due to some bug it didn't work
// const registerCallback = (uuid) => (callback) => {
//   callbacks.push({ callback, useEffectUuid: uuid });
// };

// const removeCallback = (uuid) => (cbToRemove) => {
//   callbacks = callbacks.filter((cb) => {
//     return cb.useEffectUuid !== uuid;
//   });
// };
export { ScrollProvider } from "./provider/ScrollProvider";
// ! *\

/**
 * ! /** VISUAL DECIDER
 * HOOK FUNCTION
 */
// todo this useContext will file every time you call set Scroll, optimize it
// todo: test whether useEffect cleanup is working properly
export function useScrollEffect(callback, thresholds) {
  const { scrolls, setScrolls } = useScroll();
  useEffect(() => {
    const useEffectUuid = uuid();
    const newItems = thresholds.map((threshold, i) => {
      return {
        threshold,
        callback,
        useEffectUuid,
      };
    });

    setScrolls((oldScrolls) =>
      [...newItems, ...oldScrolls].sort((a, b) => a.threshold - b.threshold)
    );

    return () => {
      setScrolls((oldScrolls) =>
        oldScrolls.filter((scroll) => scroll.uuid === useEffectUuid)
      );
    };
  }, []);
}
// ! *\

export default {};
