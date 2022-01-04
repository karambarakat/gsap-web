import Aspect from "./Aspect";
import Btn2 from "./Btn2";
import s from "./Section1.module.scss";

function Section1() {
  return (
    <section className={s.section}>
      <div className={s.third1} />
      <div className={s.thirds2}>
        <div className={s.aspect}>
          <div>
            <Aspect a={150}>
              <video
                muted
                playsInline
                autoPlay
                loop
                src="./media/Intro - Pexel.com.mp4"
              ></video>
            </Aspect>
          </div>
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
