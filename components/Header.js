import { useEffect, useState } from "react";
import A1 from "@cmp/A1";
import Ul from "@cmp/Ul";
import s from "./Header.module.scss";
import { useYScrollEffect } from "@useScrollEffect";

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useYScrollEffect(
    ({ dir }) => {
      setScrolled(dir !== "up");
    },
    [500]
  );

  return (
    <div className={s.header}>
      <div
        style={{ height: scrolled ? "100%" : "0px" }}
        className={s.curtain}
      ></div>
      <Ul>
        <A1 href="#">EN</A1>
        <A1 href="#">FR</A1>
      </Ul>

      <div style={{ gridColumn: "span 2" }}>
        <Ul>
          <A1 href="#">WORK</A1>
          <A1 href="#">ABOUT</A1>
          <A1 href="#">CONTACT</A1>
        </Ul>
      </div>
      {/* <div>nav</div> */}
      <a href="#" style={{ textAlign: "right" }}>
        5S IS A CREATIVE STUDIO.
      </a>
    </div>
  );
}

export default Header;
