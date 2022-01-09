import { useEffect, useRef } from "react";
import useObserver from "./useObserver";
import useScrollDir from "./useScrollDir";

function animateChildren(ref, set, fns) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    for (const elem of ref.current.children) {
      elem.dataset.animStartPos =
        elem.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        window.innerHeight;
    }

    function scroll() {
      const y = window.scrollY;

      let i = 0;
      for (const element of set.current) {
        element.style.transform = fns[i](y - element.dataset.animStartPos);
        i += 1;
      }
    }
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
}

function Observer({ children, animate, rtn, ...props }) {
  const ref = useRef(null);
  const scrollRef = useScrollDir();
  const set = useObserver(ref, scrollRef);

  useEffect(() => {
    if (typeof window === "undefined") return;

    for (const elem of ref.current.children) {
      elem.dataset.animStartPos =
        elem.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        window.innerHeight;
    }

    function scroll() {
      const y = window.scrollY;

      if (rtn()) return;

      let i = 0;
      for (const element of set.current) {
        element.style.transform = animate[i](y - element.dataset.animStartPos);
        i += 1;
      }
    }
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);

  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  );
}

function useClg(obj) {
  useEffect(() => {
    if (typeof window === "undefined") return;
    //effect
    function scroll() {
      const ids = Array.from(obj.current).map((element) => element.id);
      console.log(ids.toString());
    }
    window.addEventListener("scroll", scroll);

    return () => {
      window.removeEventListener("scroll", scroll);
    };
  }, []);
}

export default Observer;
