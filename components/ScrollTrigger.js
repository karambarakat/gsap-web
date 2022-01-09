import { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap.js";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function OnScroll({ children, from = {}, to = {}, ...props }) {
  const ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const tn = { obj: undefined };

    let st = { obj: undefined };

    ScrollTrigger.matchMedia({
      "(min-width: 1000px)": function () {
        console.log("on min width 1000");

        tn.obj = gsap.fromTo(ref.current, { ...from }, { ...to });

        st.obj = ScrollTrigger.create({
          animation: tn.obj,
          trigger: ref.current,
          start: "0% 100%",
          // markers: true,
          scrub: 0.29,
        });
      },
      "(max-width: 1000px)": function () {
        st.obj && st.obj.kill();
        ref.current.style = "";
      },
    });

    return () => {
      st.obj && st.obj.kill();
      tn.obj && tn.obj.kill();
      ScrollTrigger.clearMatchMedia();
    };
  }, [to]);

  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  );
}

export default OnScroll;
