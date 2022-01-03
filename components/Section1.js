import Btn2 from "./Btn2";
import s from "./Section1.module.scss";

function Section1() {
  return (
    <section className={s.section}>
      {/* <LayerRelative zi={-1}> */}
      <div dangerouslySetInnerHTML={{ __html: "<!-- first quarter -->" }}></div>
      {/* </LayerRelative> */}
      {/* <LayerRelative zi={30}> */}
      <div className={s.thirds2}>
        <div className={s.video}>
          {/* <video src="/media/5S REEL 2020.mp4"></video> */}
        </div>
        <div className={s.text}>
          <p className="body1">
            5S IS A CREATIVE STUDIO BORN AND BRED IN MONTREAL. OUR APPROACH
            INFUSES STRATEGIC INSIGHT INTO STORYTELLING FOR BRANDS AND AGENCIES
            SEEKING TO STAND OUT.
          </p>
          <Btn2>LEARN MORE</Btn2>
        </div>
      </div>
      {/* </LayerRelative> */}
    </section>
  );
}

export default Section1;
