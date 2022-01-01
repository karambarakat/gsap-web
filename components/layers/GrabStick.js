import { useYScrollEffect } from "@lib/useScrollEffect";
import { useEffect, useReducer, useRef, useState } from "react";
// todo: one problem with useScrollEffect is when I want to dynamically change the thresholds it is not possible (or is it)
// sticky >> fixed (when element hit the center) >> absolute (when )

/**
 *
 * @param {*} param0
 * @param {Array} stick this is array of two element; its value is either ['on', Number] or ['after', Number], if only number x is passed will be interpreted as ['after', x]
 * @returns
 */
function GrabStick({ children, zi = 1, ss = {}, stickOn = ["after", 500] }) {
  const [coor, setCoor] = useReducer(
    (s, a) => ({
      dispatched: true,
      grabOn: a,
      stickOn:
        stickOn[0] === "after"
          ? a + stickOn[1]
          : stickOn[0] === "on"
          ? a
          : a + stickOn,
    }),
    { grabOn: 0, stickOn: 0, dispatched: false }
  );

  const [pos, setPos] = useState({
    position: "absolute",
  });

  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current || typeof window === "undefined") return;
    const rectRef = ref.current.getBoundingClientRect();
    const rectBody = document.body.getBoundingClientRect();
    const offset = rectRef.top - rectBody.top;
    setCoor(offset);
    setPos({ position: "absolute", top: `${offset}px` });
  }, [ref.current]);

  useYScrollEffect(
    (obj) => {
      if (obj.threshold === coor.grabOn) {
        if (obj.dir === "down") {
          setPos({ position: "fixed", top: `${0}px` });
        } else {
          setPos({ position: "absolute", top: `${coor.grabOn}px` });
        }
      } else if (obj.threshold === coor.stickOn) {
        if (obj.dir === "down") {
          setPos({ position: "absolute", top: `${coor.stickOn}px` });
        } else {
          setPos({ position: "fixed", top: `${0}px` });
        }
      }
    },
    [coor.grabOn, coor.stickOn]
  );

  return (
    <div
      ref={ref}
      sx={{
        zIndex: zi,
        opacity: coor.dispatched ? 100 : 0,
        ...pos,
        ...ss,
      }}
    >
      {children}
    </div>
  );
}

export default GrabStick;
