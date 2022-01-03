import { useYScrollEffect } from "@lib/useScrollEffect";
import PropTypes from "prop-types";
import { useEffect, useReducer, useRef, useState } from "react";
// todo: one problem with useScrollEffect is when I want to dynamically change the thresholds it is not possible (or is it)
// sticky >> fixed (when element hit the center) >> absolute (when )

/**
 * component to hold position "grab" of `children`
 * for certain scroll distance (by setting position:fixed)
 * and then stick after this scroll distance (by setting position; top)
 *
 * @component
 * @example
 * return (
 *   <GrabStick stickOn={["after", 500]} />
 *     <div>grab and stick</div>
 *   </GrabStick>
 * )
 */
function GrabStick({ children, stickOn = ["after", 500], ...props }) {
  /**
   * set coor.stickOn value and coor.grabOn value; depends on stickOn props value
   */
  const [coor, setCoor] = useReducer(
    (s, a) => ({
      grabOn: a,
      stickOn:
        stickOn[0] === "after"
          ? a + stickOn[1]
          : stickOn[0] === "on"
          ? a
          : a + stickOn,
      dispatched: true,
    }),
    { grabOn: 0, stickOn: 0, dispatched: false }
  );

  /**
   * contains two properties that gonna be passed to the style attribute of the parent div: these are `position` and `top`
   */
  const [pos, setPos] = useState({
    position: "absolute",
  });

  /**
   * this reference for the parent div. It is used by useEffect to figure what is the y position of this element
   */
  const ref = useRef(null);

  // console.log(ref, pos, coor);

  /**
   * determine the y position of the parent div
   */
  useEffect(() => {
    if (!ref.current || typeof window === "undefined" || coor.dispatched)
      return;
    const rectRef = ref.current.getBoundingClientRect();
    const rectBody = document.body.getBoundingClientRect();
    const offset = rectRef.top - rectBody.top;
    // console.log(offset, rectRef);
    setCoor(offset);
    setPos({ position: "absolute", top: `${offset}px` });
  }, [ref.current]);

  /**
   *
   */
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
      {...props}
      ref={ref}
      style={{
        opacity: coor.dispatched ? 100 : 0,
        ...pos,
      }}
    >
      {children}
    </div>
  );
}

GrabStick.propTypes = {
  /**
   * the component/node need to be rendered
   */
  children: PropTypes.node,
  /**
   * this is either
   * ['after', <px:number>] which will stick the children after scrolling `px` from grabbing
   * or ['on', <px:number>] where will stick exactly on scroll position of `px`
   * if number `px` is passed this will be treated as ['after', px]
   */
  stickOn: PropTypes.oneOfType([
    PropTypes.exact({
      0: PropTypes.oneOf(["after", "on"]),
      1: PropTypes.number,
    }),
    PropTypes.number,
  ]),
  /**
   * props passed to parent div that have styles of `position`; `opacity`; `top`
   */
  // props: PropTypes.any,
};

GrabStick.defaultProps = {
  stickOn: ["after", 500],
  props: {},
};

export default GrabStick;
