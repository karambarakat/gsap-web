import s from "./Aspect.module.scss";
import PropTypes from "prop-types";

function Aspect({ children, a = "16/9", className, ...props }) {
  if (!a.includes("/") || a.split("/").some((e) => !Number(e))) {
    console.log('props `a` has to be in form of "<x>/<y>"');
    a = "16/9";
  }

  a = a.split("/").map((e) => Number(e));
  a = (a[1] / a[0]) * 100;

  return (
    <div
      {...props}
      className={[s.main, className].join(" ")}
      style={{ paddingTop: `${a}%` }}
    >
      {children}
    </div>
  );
}

Aspect.propTypes = {
  children: PropTypes.node,
  /**
   * string in form of "<w>/<h>"
   */
  a: PropTypes.string,
};

export default Aspect;
