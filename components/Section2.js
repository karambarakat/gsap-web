import Card from "@cmp/Card";
import Aspect from "./Aspect";
import Btn2 from "./Btn2";
import GrabStick from "./layers/GrabStick";
import s from "./Section2.module.scss";

function Section2() {
  return (
    <section className={s.section}>
      <div className={s.center}>
        <GrabStick stickOn={2000} className={s.stick}>
          <h1>PROJECTS THAT</h1>
          <h1>MAKE US BLUSH</h1>
        </GrabStick>
      </div>

      <div className={s.holdPlace}>
        <h1>i</h1>
        <h1>i</h1>
      </div>
      <div
        //todo: not completed
        className={s.grid}
      >
        <Card title="Esse sint" imageSrc="/media/box1.jpg"></Card>
        <Card title="Lorem eu" imageSrc="/media/box2.jpg"></Card>
        <Card title="quis sunt" imageSrc="/media/box3.jpg"></Card>
        <Card title="consequat" imageSrc="/media/box4.jpg"></Card>
        <Card title="velit dolor" imageSrc="/media/box5.jpg"></Card>
        <div className={s.seeMore}>
          <Btn2>SEE MORE</Btn2>
        </div>
      </div>
    </section>
  );
}

export default Section2;
