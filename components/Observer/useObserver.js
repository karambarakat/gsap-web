import { useEffect, useRef } from "react";

export default function useObserver(ref, scrollRef) {
  const set = useRef(new Set());
  useEffect(() => {
    if (typeof window === "undefined") return;

    const enBottom = new IntersectionObserver(
      function (entries) {
        if (scrollRef.current === "up") return;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.intersectionRect.top < -3000) return;
          // console.log("enter bottom", entry.target.id);
          set.current.add(entry.target);
        });
      },
      {
        root: null,
        rootMargin: "6000px 0px 0px",
        threshold: [0],
      }
    );

    const enTop = new IntersectionObserver(
      function (entries) {
        if (scrollRef.current === "down") return;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          // entry.intersectionRect.top should be 0 but can get bigger on fast scroll
          // when is close to 6000 this intersection is happening from the other dir
          if (entry.intersectionRect.top > 3000) return;

          // console.log("enter top", entry.target.id);
          set.current.add(entry.target);
        });
      },
      {
        root: null,
        rootMargin: "0px 0px 6000px",
        threshold: [0],
      }
    );

    const exTop = new IntersectionObserver(
      function (entries) {
        if (scrollRef.current === "up") return;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          // console.log(entry.intersectionRect.bottom);
          //entry.intersectionRect.bottom, //0 but negative on fast scroll
          if (entry.intersectionRect.bottom < -3000) return;

          // console.log("exit Top", entry.target.id);
          set.current.delete(entry.target);
        });
      },
      {
        root: null,
        rootMargin: "60000px 0px -100%",
        threshold: [1],
      }
    );

    const exBottom = new IntersectionObserver(
      function (entries) {
        if (scrollRef.current === "down") return;
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          if (entry.intersectionRect.top + entry.rootBounds.top > 3000) return;

          // console.log("exit bottom", entry.target.id);
          set.current.delete(entry.target);
        });
      },
      {
        root: null,
        rootMargin: "-100% 0px 60000px",
        threshold: [1],
      }
    );

    for (const element of ref.current.children) {
      enBottom.observe(element);
      enTop.observe(element);
      exTop.observe(element);
      exBottom.observe(element);
    }

    return () => {
      set.current.clear();

      if (!ref.current) return;
      for (const element of ref.current.children) {
        enBottom.unobserve(element);
        enTop.unobserve(element);
        exTop.unobserve(element);
        exBottom.unobserve(element);
      }
    };
  }, []);

  return set;
}
