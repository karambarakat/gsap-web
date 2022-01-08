import { useEffect, useRef } from "react";

/**
 * return a reference object with `current` property set to either 'up' or 'down'
 * @returns {object} plain object with `current` property set to either 'up' or 'down'
 */
export default function useScrollDir() {
  const scroll = useRef("down");
  const _prev = useRef(0);
  useEffect(() => {
    if (typeof window === "undefined") return;

    function onScroll() {
      const y = window.scrollY;

      if (_prev.current < y) scroll.current = "down";
      else scroll.current = "up";

      _prev.current = y;

      // console.log(scroll.current);
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return scroll;
}
