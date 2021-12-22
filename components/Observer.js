import { createContext, useRef } from "react";

// const context = createContext();
// const useObserver = () => useContext(context);

const observerOption = { rootMargin: "0% 0%", threshold: [0, 1], root: null };

const observerCallback = () => {};

const observer = new IntersectionObserver(observerCallback, observerOption);

function Observer({ children }) {
  const ref = useRef(null);

  return <div ref={ref}>{children}</div>;
}

export function OnIntersect({ children }) {
  const ref = useRef(null);

  return <div ref={ref}>{children}</div>;
}

export function OnScroll({ children }) {
  const ref = useRef(null);

  return <div ref={ref}>{children}</div>;
}

export default Observer;
