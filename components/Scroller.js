import propTypes from "prop-types";
import { createContext, useContext, useEffect, useRef, useState } from "react";

const scrollContext = createContext([]);

function uuid() {
  let d = new Date().getTime();
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    let r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

//todo: make work both way up and down
/**
 * ! /** VISUAL DECIDER
 * make a provider and register event callback
 */
var allScrolls = [];
var callbacks = [];
// todo: comparison should be done by function reference (not uuid), but due to some bug it didn't work
const registerCallback = (uuid) => (callback) => {
  callbacks.push({ callback, useEffectUuid: uuid });
};

const removeCallback = (uuid) => (cbToRemove) => {
  callbacks = callbacks.filter((cb) => {
    return cb.useEffectUuid !== uuid;
  });
};
/**
 * @param {Number[]} thresholds list of numbers between 1 and 0, these are percentages of the viewport. 1 means the bottom of the viewport 0 means the top of the viewport. default is [1]
 * @returns
 */
export function ScrollProvider({ children, percents = [1] }) {
  const ref = useRef(null);
  const _triggerAt = useRef(percents.map((e) => ({ percent: e, startAt: 0 })));

  useEffect(() => {
    if (typeof window === "undefined") return;

    function onScroll(e) {
      callbacks.forEach((cb) => cb.callback());
      const top = window.scrollY;
      for (const triggerAtInstance of _triggerAt.current) {
        const { percent, startAt } = triggerAtInstance;
        let trigger = top + window.innerHeight * percent;
        // register
        for (let i = startAt; i < allScrolls.length; i++) {
          let scroll = allScrolls[i];
          if (trigger > scroll.threshold) {
            scroll.callback({
              percent: percent,
              threshold: scroll.threshold,
              registerCallback: registerCallback(scroll.useEffectUuid),
              removeCallback: removeCallback(scroll.useEffectUuid),
            });
            triggerAtInstance.startAt += 1;
            continue;
          } else {
            break;
          }
        }
      }
    }
    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, []);
  return <div ref={ref}>{children}</div>;
}
ScrollProvider.prototype = {
  thresholds: propTypes.array,
};
// ! *\

/**
 * ! /** VISUAL DECIDER
 * HOOK FUNCTION
 */
export function useScrollEffect(callback, thresholds) {
  useEffect(() => {
    const useEffectUuid = uuid();
    const newItems = thresholds.map((threshold, i) => {
      return {
        threshold,
        callback,
        useEffectUuid,
      };
    });

    allScrolls = [...newItems, ...allScrolls].sort(
      (a, b) => a.threshold - b.threshold
    );

    return () => {
      allScrolls = allScrolls.filter((scroll) => scroll.uuid === useEffectUuid);
    };
  }, []);
}
// ! *\

// export default Scroller;
export default {};
