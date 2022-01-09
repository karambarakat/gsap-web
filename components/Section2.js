import Card from "@cmp/Card";
import Aspect from "./Aspect";
import Btn2 from "./Btn2";
import GrabStick from "./layers/GrabStick";
import Drop from "./Drop";
import OnScroll from "./OnScroll";
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
        <OnScroll from={{ width: "90%", x: 0, y: -90 }} to={{ y: -500 }}>
          <Drop>
            <Card title="Esse sint" imageSrc="/media/box1.jpeg" />
          </Drop>
        </OnScroll>
        <OnScroll from={{ width: "70%", x: 0, y: -20 }} to={{ y: -600 }}>
          <Drop>
            <Card title="Lorem eu" imageSrc="/media/box2.jpeg" />
          </Drop>
        </OnScroll>
        <OnScroll from={{ width: "75%", x: 90, y: -200 }} to={{ y: -700 }}>
          <Drop>
            <Card title="velit dolor" imageSrc="/media/box5.jpeg" />
          </Drop>
        </OnScroll>
        <OnScroll from={{ width: "85%", x: 0, y: -320 }} to={{ y: -500 }}>
          <Drop>
            <Card title="quis sunt" imageSrc="/media/box3.jpeg" />
          </Drop>
        </OnScroll>
        <OnScroll from={{ width: "120%", x: 300, y: -380 }} to={{ y: -400 }}>
          <Drop>
            <Card title="consequat" imageSrc="/media/box4.jpeg" />
          </Drop>
        </OnScroll>

        <Aspect a={70} className={s.seeMore}>
          <div style={{ display: "grid", placeContent: "center" }}>
            <Btn2>SEE MORE</Btn2>
          </div>
        </Aspect>
      </div>
    </section>
  );
}

export default Section2;
