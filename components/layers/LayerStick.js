import { useYScrollEffect } from "@lib/useScrollEffect";
import { useState } from "react";

function LayerStick({
  children,
  zi = 1,
  positioning = { top: 0, right: 0, left: 0 },
  ss = {},
}) {
  const [fixed, setFixed] = useState(true);

  useYScrollEffect(
    (obj) => {
      setFixed(obj.dir === "up");
    },
    [1600] //todo: I have to make this component have dynamic start and end point
  );

  return (
    <div
      sx={{
        //make multi line
        zIndex: zi,
        position: fixed ? "fixed" : "absolute",
        transform: fixed ? "translateY(0px)" : "translateY(1600px)",
        ...positioning,
        ...ss,
      }}
    >
      {children}
    </div>
  );
}

export default LayerStick;
