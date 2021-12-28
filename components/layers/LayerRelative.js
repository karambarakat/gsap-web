function LayerRelative({
  //make multi line
  children,
  zi = 1,
  positioning = {},
  ss = {},
}) {
  return (
    <div
      sx={{
        //make multi line
        position: "relative",
        zIndex: zi,
        ...positioning,
        ...ss,
      }}
    >
      {children}
    </div>
  );
}

export default LayerRelative;
