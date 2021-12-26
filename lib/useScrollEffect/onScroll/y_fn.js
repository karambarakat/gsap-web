const next = (rightBefore, scrolls, stake) => {
  if (rightBefore === scrolls.length) return false;

  if (stake >= scrolls[rightBefore].threshold) {
    return true;
  } else return false;
};

const prev = (rightBefore, scrolls, stake) => {
  if (rightBefore === 0) return false;

  if (stake <= scrolls[rightBefore - 1].threshold) {
    return true;
  } else return false;
};

export default (scrolls, helper, stake, call) => {
  // console.log(
  //   `thsh: ${scrolls.map((e) => e.threshold)}`,
  //   helper.startAt,
  //   stake
  // );

  if (next(helper.startAt, scrolls, stake)) {
    while (next(helper.startAt, scrolls, stake)) {
      scrolls[helper.startAt].newVal = !scrolls[helper.startAt].newVal;
      call(scrolls[helper.startAt], "down");
      helper.startAt += 1;
    }
    return;
  }

  while (prev(helper.startAt, scrolls, stake)) {
    helper.startAt -= 1;
    call(scrolls[helper.startAt], "up");
  }
};
