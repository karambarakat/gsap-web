import { snap } from "@lib/timeFunction";
import s from "./Btn2.module.scss";

function Btn2({ children, className, ...props }) {
  return (
    <button {...props} className={[s.btn, className].join(" ")}>
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 68 68"
        // xml:space="preserve"
      >
        <path
          d="M60.4,52.1c-5.8,8.6-15.6,14.3-26.8,14.3C15.7,66.3,1.2,51.9,1.2,34S15.7,1.7,33.6,1.7
	c10.4,0,19.6,4.9,25.6,12.5"
        ></path>
      </svg>
      <span>{children}</span>
    </button>
  );
}

export default Btn2;
