function Ul(props) {
  return (
    <ul
      sx={{
        listStyle: "none",
        display: "flex",
        alignItems: "center",
        gap: "0.3rem",
      }}
    >
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
