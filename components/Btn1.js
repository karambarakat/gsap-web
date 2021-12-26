import { snap } from "@lib/timeFunction";
import propTypes from "prop-types";

function Btn1(props) {
  return (
    <button
      sx={{
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 2,
        width: 300,
        height: 300,
        borderRadius: "100%",
        border: ({ colors }) => `1px solid ${colors.primary}`,
        color: ({ colors }) => colors.primary,
        bg: "transparent",
        transition: `background 0.2s ${snap}`,
        ":hover": {
          bg: "base",
          "> *": {
            height: 0,
          },
        },
        "> *": {
          transition: `height 0.2s ${snap} var(--transition-delay)`,
          height: 50,
          marginTop: 10,
          "--transition-delay": "0s",
          ":first-child": {
            "--transition-delay": "0.1s",
          },
        },
      }}
    >
      {(props.children || []).map((word, i) => (
        <span
          sx={{
            display: "flex",
            flexDirection: "column-reverse",
          }}
          key={i}
        >
          {word}
        </span>
      ))}
    </button>
  );
}

Btn1.propType = {
  children: propTypes.array,
};

export default Btn1;
