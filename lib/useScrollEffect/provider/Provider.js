import propTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { Provider } from "../context";
import { onScroll_callbacks } from "./onScroll_callbacks";
import onScroll_next from "./onScroll_next";

/**
 * @param {Number[]} thresholds list of numbers between 1 and 0, these are percentages of the viewport. 1 means the bottom of the viewport 0 means the top of the viewport. default is [1]
 * @returns
 */
export function ScrollProvider({ children, percents = [1] }) {
  // const ref = useRef(null);
  const _triggerAt = useRef(percents.map((e) => ({ percent: e, startAt: 0 })));

  const [scrolls, setScrolls] = useState([]);
  const [callbacks, setCallbacks] = useState([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    function onScroll(e) {
      onScroll_callbacks(callbacks);
      onScroll_next(scrolls, _triggerAt, setCallbacks);
    }

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [scrolls, callbacks]);
  return (
    <Provider value={{ scrolls, setScrolls /*,callbacks, setCallbacks*/ }}>
      {/* <div ref={ref}>{children}</div>; */}
      {children}
    </Provider>
  );
}
ScrollProvider.prototype = {
  thresholds: propTypes.array,
};
