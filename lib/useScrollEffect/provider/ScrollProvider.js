import propTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { Provider } from "../context";
import detectNextThreshold from "./detectNextThreshold";

/**
 * @param {Number[]} thresholds list of numbers between 1 and 0, these are percentages of the viewport. 1 means the bottom of the viewport 0 means the top of the viewport. default is [1]
 * @returns
 */
export function ScrollProvider({ children, percents = [1] }) {
  // const ref = useRef(null);
  const _triggerAt = useRef(percents.map((e) => ({ percent: e, startAt: 0 })));

  const [scrolls, setScrolls] = useState([]);
  // const [callbacks, setCallbacks] = useState([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    function onScroll(e) {
      detectNextThreshold(scrolls, _triggerAt);
    }

    document.addEventListener("scroll", onScroll);

    return () => document.removeEventListener("scroll", onScroll);
  }, [scrolls]);
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
