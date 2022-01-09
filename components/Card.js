import Image from "next/image";
import Aspect from "./Aspect";
import s from "./Card.module.scss";

function Card({ title, imageSrc, ...props }) {
  return (
    <div {...props} className={s.card}>
      <Aspect a={70}>
        <Image
          // loader={({ src, size, quality }) => src}
          layout="fill"
          objectFit="cover"
          src={imageSrc}
        ></Image>
        <div className={s.after}>
          <button>
            <span className="body3">CLICK HERE</span>
          </button>
        </div>
      </Aspect>
      <span className={["body2", s.span].join(" ")}>{title}</span>
    </div>
  );
}

export default Card;
