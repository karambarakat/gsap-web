import { useEffect, useState } from "react";
import A1 from "@cmp/A1";
import Ul from "@cmp/Ul";
import {
  useScrollEffect,
  useUpScrollEffect,
  useYScrollEffect,
} from "@useScrollEffect";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useYScrollEffect(
    (obj) => {
      // console.log(obj);
      setScrolled((old) => !old);
    },
    [2000]
  );

  return (
    <div
      sx={{
        py: 3,
        mx: 3,
        position: "fixed",
        top: 0,
        right: 0,
        left: 0,
        display: "grid",
        alignItems: "center",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 5,
        "::before": {
          content: '""',
          borderBottom: ({ colors }) => `1px solid ${colors.primary}`,
          bg: "base",
          position: "absolute",
          top: 0,
          height: scrolled ? "100%" : "0%",
          transition: "height 0.5s ease-in-out",
          left: 0,
          right: 0,
        },
        ">*": {
          zIndex: 100,
        },
      }}
    >
      <Ul>
        <A1 href="#">EN</A1>
        <A1 href="#">FR</A1>
      </Ul>

      <div sx={{ gridColumn: "span 2" }}>
        <Ul>
          <A1 href="#">WORK</A1>
          <A1 href="#">ABOUT</A1>
          <A1 href="#">CONTACT</A1>
        </Ul>
      </div>
      {/* <div>nav</div> */}
      <a href="#" sx={{ textAlign: "right" }}>
        5S IS A CREATIVE STUDIO.
      </a>
    </div>
  );
}

export default Header;
