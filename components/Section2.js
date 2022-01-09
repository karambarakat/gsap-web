import Card from "@cmp/Card";
import Aspect from "./Aspect";
import Btn2 from "./Btn2";
import GrabStick from "./layers/GrabStick";
import OnScroll from "./ScrollTrigger";
import s from "./Section2.module.scss";

function Section2() {
  return (
    <section className={s.section}>
      <div className={s.center}>
        <GrabStick stickOn={9000} className={s.stick}>
          <h1>PROJECTS THAT</h1>
          <h1>MAKE US BLUSH</h1>
        </GrabStick>
      </div>

      <div className={s.holdPlace}>
        <h1>i</h1>
        <h1>i</h1>
      </div>
      <div className={"p-r " + s.grid}>
        <OnScroll from={{ scale: 0.9, x: 0, y: -90 }} to={{ y: -500 }}>
          <Card title="Esse sint" imageSrc="/media/box1.jpeg" />
        </OnScroll>
        <OnScroll from={{ scale: 0.7, x: 0, y: -20 }} to={{ y: -600 }}>
          <Card title="Lorem eu" imageSrc="/media/box2.jpeg" />
        </OnScroll>
        <OnScroll from={{ scale: 0.65, x: 90, y: -200 }} to={{ y: -700 }}>
          <Card title="velit dolor" imageSrc="/media/box5.jpeg" />
        </OnScroll>
        <OnScroll from={{ scale: 0.85, x: 0, y: -320 }} to={{ y: -500 }}>
          <Card title="quis sunt" imageSrc="/media/box3.jpeg" />
        </OnScroll>
        <OnScroll from={{ scale: 1.2, x: 300, y: -380 }} to={{ y: -400 }}>
          <Card title="consequat" imageSrc="/media/box4.jpeg" />
        </OnScroll>

        <div className={s.seeMore}>
          <Btn2>SEE MORE</Btn2>
        </div>
      </div>
    </section>
  );
}

export default Section2;
