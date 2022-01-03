import { useYScrollEffect } from "@lib/useScrollEffect";
import { useState } from "react";

function Stick({ children, stickOn = 0, ...props }) {
  const [fixed, setFixed] = useState(true);

  useYScrollEffect(
    (obj) => {
      setFixed(obj.dir === "up");
    },
    [stickOn]
  );

  return (
    <div
      {...props}
      style={{
        position: fixed ? "fixed" : "absolute",
        transform: fixed ? "translateY(0px)" : `translateY(${stickOn}px)`,
      }}
    >
      {children}
    </div>
  );
}

export default Stick;
