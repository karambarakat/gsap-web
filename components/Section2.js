import Card from "@cmp/Card";
import GrabStick from "./layers/GrabStick";
import s from "./Section2.module.scss";

function Section2() {
  return (
    <section>
      <GrabStick stickOn={500} className={s.grabNStick}>
        <h1>PROJECTS THAT</h1>
        <h1>MAKE US BLUSH</h1>
      </GrabStick>

      <div className={s.push}>
        <h1>i</h1>
        <h1>i</h1>
      </div>
      <div
        //todo: not completed
        className={s.grid}
      >
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </section>
  );
}

export default Section2;
