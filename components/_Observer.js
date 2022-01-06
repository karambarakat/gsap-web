import { useEffect, useRef } from "react";
function animate(parent) {
  for (const e of parent.children) {
    if (!e.dataset.animFrom) return;

    const from = e.dataset.animFrom?.split(",");
    const to = e.dataset.toFrom?.split(",");

    let thisE = animateTransform;
    from.forEach((e) => {
      thisE = thisE.replace(/\${\d}/, e);
    });

    e.style.transform = thisE;
  }
}

function interpolate(arg1, from, to) {
  const returnVal = [];
  from.forEach((e, i) => {
    e = Number(e);
    to[i] = Number(to[i]);
    returnVal[i] = arg1 * (to[i] - e) + e;
  });
  console.log(arg1, returnVal[1], from[1], to[1]);
  return returnVal;
}

function Observer({ children, animateTransform, ...props }) {
  const ref = useRef(null);
  const imp = useRef({ s: {}, children: new Set() });
  useEffect(() => {
    if (typeof window === "undefined") return;

    for (const elem of ref.current.children) {
      elem.dataset.animStartPos =
        elem.getBoundingClientRect().top -
        document.body.getBoundingClientRect().top -
        window.innerHeight;
      elem.dataset.animEndPos =
        elem.getBoundingClientRect().bottom + window.innerHeight;
    }

    function scroll() {
      const y = window.scrollY;

      if (imp.current.s.prevScreen < y) imp.current.s.dir = "down";
      else imp.current.s.dir = "up";

      imp.current.s.prevScreen = window.scrollY;

      // console.log(
      //   Array.from(imp.current.children).map((e) => e.id),
      //   imp.current.s.dir
      // );

      for (const elem of imp.current.children) {
        if (!elem.dataset.animFrom || !elem.dataset.animTo) {
          return;
        }

        const ratio =
          (y - elem.dataset.animStartPos) /
          (elem.dataset.animEndPos - elem.dataset.animStartPos);

        interpolate(
          ratio,
          elem.dataset.animFrom?.split(","),
          elem.dataset.animTo?.split(",")
        );
      }
    }

    window.addEventListener("scroll", scroll);

    const entering = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = `<id:${entry.target.id}>`;

          // rootMargin: "40px 0px 40px",
          // threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          const hittingBottomMargin =
            entry.intersectionRect.bottom > entry.rootBounds.height * 0.5;
          const hittingTopMargin =
            entry.intersectionRect.top < entry.rootBounds.height * 0.5;

          // console.log(hittingTopMargin);

          if (hittingBottomMargin && hittingTopMargin) {
            // this is when the intersectionRect is in the center
            hittingBottomMargin =
              entry.intersectionRect.top + entry.intersectionRect.height / 2 >
              entry.rootBounds.height * 0.5;
            hittingTopMargin = !hittingBottomMargin;
          }

          if (imp.current.s.dir === "down") {
            if (hittingBottomMargin) {
              imp.current.children.add(entry.target);
            } else {
              imp.current.children.delete(entry.target);
              //todo: this delete will happens as soon as we one of the margin
              // solved it by making the margin bigger, but need better solution
            }
          } else {
            if (hittingTopMargin) {
              imp.current.children.add(entry.target);
            } else {
              imp.current.children.delete(entry.target);
            }
          }

          // rootMargin: "-100% 0px 1px"
          // threshold: [0],
          // this will work but not if I'm moving too fast
          // const isUp =
          //   entry.rootBounds.bottom - entry.boundingClientRect.top > 20;
          // const isDown =
          //   entry.boundingClientRect.bottom - entry.rootBounds.bottom > 20;
          // console.log(
          //   id,
          //   isUp && isDown
          //     ? "ambiguous"
          //     : isUp
          //     ? "Up"
          //     : isDown
          //     ? "down"
          //     : "else???"
          // );
        }),
      {
        root: null,
        rootMargin: "300px 0px",
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
      }
    );

    for (const element of ref.current.children) {
      entering.observe(element);
    }

    return () => {
      for (const element of ref.current.children) {
        entering.unobserve(element);
      }
      window.removeEventListener("scroll", scroll);
      imp.current.children.clear();
    };
  }, []);
  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  );
}

export default Observer;
