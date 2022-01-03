import s from "./Ul.module.scss";

function Ul(props) {
  return (
    <ul className={s.ul}>
      {props.children.map((e, i, l) => {
        return [
          <li key={i * 2}>{e}</li>,
          <li key={i * 2 + 1}>{i !== l.length - 1 ? "|" : ""}</li>,
        ];
      })}
    </ul>
  );
}

export default Ul;
