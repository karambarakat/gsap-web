import s from "./Ul.module.scss";

function Ul({ children, className, ...props }) {
  return (
    <ul {...props} className={[s.ul, className].join(" ")}>
      {children.map((e, i, l) => {
        return [
          <li key={i * 2}>{e}</li>,
          <li key={i * 2 + 1}>{i !== l.length - 1 ? "|" : ""}</li>,
        ];
      })}
    </ul>
  );
}

export default Ul;
