import Image from "next/image";
import Aspect from "./Aspect";
import s from "./Card.module.scss";

function Card({ title, imageSrc }) {
  return (
    <div className={s.card}>
      <Aspect a={70}>
        <Image layout="fill" objectFit="cover" src={imageSrc}></Image>
      </Aspect>
      <span className={["body2", s.span].join(" ")}>{title}</span>
    </div>
  );
}

export default Card;
