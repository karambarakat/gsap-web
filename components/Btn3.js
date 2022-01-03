import s from "./Btn3.module.scss";

function Btn3() {
  return (
    <button>
      Hover me
      <svg viewBox="0 0 200 50">
        <polyline points="200,0 200,50 0,50 0,0 200,0"></polyline>
      </svg>
    </button>
  );
}

export default Btn3;
