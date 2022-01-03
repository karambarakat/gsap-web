import s from "./Aspect.module.scss";
import PropTypes from "prop-types";

function Aspect({ children, a = 100, className, ...props }) {
  return (
    <div {...props} className={s.main} style={{ paddingTop: `${a}%` }}>
      {children}
    </div>
  );
}

Aspect.propTypes = {
  children: PropTypes.node,
  /**
   * number where 100 means square
   */
  a: PropTypes.number,
};

export default Aspect;
