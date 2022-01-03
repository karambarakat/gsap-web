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
      />

      <Ul className={s.language}>
        <A1 href="#">EN</A1>
        <A1 href="#">FR</A1>
      </Ul>

      <nav className={s.navigation}>
        <Ul className={s.nav_ul}>
          <A1 href="#">WORK</A1>
          <A1 href="#">ABOUT</A1>
          <A1 href="#">CONTACT</A1>
        </Ul>
      </nav>

      <a href="#" className={s.title}>
        A CREATIVE STUDIO.
      </a>
    </div>
  );
}

export function HeaderSm() {
  return (
    <Ul className={s.languageSm}>
      <A1 href="#">EN</A1>
      <A1 href="#">FR</A1>
    </Ul>
  );
}

export default Header;
