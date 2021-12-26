export default (scrolls, helper, stake, call) => {
  for (let i = scrolls.length - 1 - helper.startAt; i >= 0; i--) {
    let scroll = scrolls[i];
    if (stake <= scroll.threshold) {
      scroll.called = true;
      call(scroll, "up");
      helper.startAt += 1;
    } else {
      break;
    }
  }
};
