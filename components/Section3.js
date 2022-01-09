import Drop from "./Drop";
import s from "./Section3.module.scss";
import Lancome from "./svg/LANCOME";
// import { ReactComponent as YourSvg } from "./svg/brand.svg";

function Section3() {
  return (
    <>
      <Drop>
        <div className={s.newsletter}>
          <h1>Newsletter</h1>
          <input type={"email"} placeholder="enter you email"></input>
          <input type={"submit"}></input>
        </div>
      </Drop>
      <section className={s.section}>
        <div className={[s.title, "body1"].join(" ")}>CLEINTS</div>
        <div className={s.brands}>
          {Array.from({ length: 9 }).map((e, i) => (
            <div key={i} className={s.brand}>
              <Lancome></Lancome>
            </div>
          ))}
        </div>
        <div className={s.meto}>
          IT'S THE RELATIONSHIPS WE'VE BUILT THAT KEEP US DREAMING.
        </div>
        <div className={s.info}>
          <div className={s.contact}>
            <div>
              <a>INFO@ 5SCONTENT.COM</a>
            </div>
            <div>
              <a>(514) 467-9780</a>
            </div>
          </div>
          <a className={s.address}>
            <div>
              <span>4321 RUE CLARK</span>
            </div>
            <div>
              <span>MONTRÉAL (QC)</span>
            </div>
            <div>
              <span>H2W 1X2</span>
            </div>
          </a>
          <div className={s.socialMedia}>
            <div>
              <a>FACEBOOK</a>
            </div>
            <div>
              <a>INSTAGRAM</a>
            </div>
            <div>
              <a>VIMEO</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section3;
