import propTypes from "prop-types";
import { useEffect, useReducer, useRef, useState } from "react";
import waitFor from "@lib/waitFor";
import { useScrollEffect, useYScrollEffect } from "@lib/useScrollEffect";
import { snap } from "@lib/timeFunction";

function H1_({ children }) {
  const ref = useRef(null);

  const [fixed, setFixed] = useState(true);

  useYScrollEffect(
    (obj) => {
      setFixed(obj.dir === "up");
    },
    [1600]
  );

  useEffect(() => {
    if (!ref.current) return;

    const cleanUp = [];
    const waitFor_ = async (ms) => cleanUp.push(await waitFor(ms));

    async function animate() {
      const offsetHeight = ref.current.offsetHeight / 3;
      ref.current.style.height = `${offsetHeight}px`;

      ref.current.children[0].classList.add("triggered");
      await waitFor_(600);
      ref.current.style.height = `${offsetHeight * 2}px`;
      await waitFor_(100);

      ref.current.children[1].classList.add("triggered");
      await waitFor_(600);
      ref.current.style.height = `${offsetHeight * 3}px`;
      await waitFor_(100);

      ref.current.children[2].classList.add("triggered");
      await waitFor_(600);
    }

    animate();

    return () => {
      cleanUp.forEach((e) => clearTimeout(e));
    };
  }, []);

  return (
    <div
      sx={{
        textAlign: "center",
        // minHeight: "100vh",
        display: "grid",
        // position: fixed ? "fixed" : "absolute",
        // transform: fixed ? "translateY(0px)" : "translateY(1600px)",
        // top: 0,
        // left: 0,
        // right: 0,
        placeContent: "center",
      }}
    >
      <div
        ref={ref}
        sx={{
          transition: `height 2s ${snap}`,
          overflow: "hidden",
          zIndex: -1,
          " > *": {
            transform: "rotateX(90deg)",
            transition: `transform 3s ${snap}`,
          },
          " > .triggered": {
            transform: "rotateX(0deg)",
            display: "block",
          },
        }}
      >
        <h1>{children[0]}</h1>
        <h1>{children[1]}</h1>
        <h1>{children[2]}</h1>
      </div>
    </div>
  );
}

H1_.propTypes = {
  children: propTypes.array,
};

export default H1_;
