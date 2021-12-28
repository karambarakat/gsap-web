function LayerFixed({
  children,
  zi = 1,
  positioning = { top: 0, right: 0, left: 0 },
  ss = {},
}) {
  return (
    <div
      sx={{
        //make multi line
        position: "fixed",
        zIndex: zi,
        ...positioning,
        ...ss,
      }}
    >
      {children}
    </div>
  );
}

export default LayerFixed;
