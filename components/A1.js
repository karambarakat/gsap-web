function A1(props) {
  return (
    <a
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        svg: {
          marginBottom: "-10px",
          marginTop: "2px",
          fill: "none",
          strokeWidth: 2,
          stroke: "primaryFocus",
          path: {
            strokeDasharray: 300,
            strokeDashoffset: 300,
            transition: "stroke-dashoffset 1s linear",
          },
        },
        ":hover": {
          svg: {
            path: {
              strokeDashoffset: 0,
            },
          },
        },
      }}
      {...props}
    >
      {props.children}
      <svg
        x="0px"
        y="0px"
        width="8px"
        height="8px"
        viewBox="0 0 30 30"
        // style="enable-background:new 0 0 30 30;"
        xmlSpace="preserve"
      >
        <path d="M29,15c-0.1,7.7-6.3,14-14,14C7.3,29,1,22.7,1,15S7.3,1,15,1C22.7,1,28.9,7.3,29,15"></path>
      </svg>
    </a>
  );
}

export default A1;
