import { useYScrollEffect } from "@lib/useScrollEffect";
import { useState } from "react";

function Stick({
  children,
  zi = 1,
  positioning = { top: 0, right: 0, left: 0 },
  ss = {},
  stickOn = 0,
}) {
  const [fixed, setFixed] = useState(true);

  useYScrollEffect(
    (obj) => {
      setFixed(obj.dir === "up");
    },
    [stickOn]
  );

  return (
    <div
      sx={{
        //make multi line
        zIndex: zi,
        position: fixed ? "fixed" : "absolute",
        transform: fixed ? "translateY(0px)" : `translateY(${stickOn}px)`,
        ...positioning,
        ...ss,
      }}
    >
      {children}
    </div>
  );
}

export default Stick;
