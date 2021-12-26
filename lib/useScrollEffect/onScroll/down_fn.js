export default (scrolls, helper, stake, call) => {
  // console.log(`thsh: ${scrolls[0].threshold}`, helper.startAt, stake);
  for (let i = helper.startAt; i < scrolls.length; i++) {
    let scroll = scrolls[i];
    if (stake >= scroll.threshold) {
      scroll.called = true;
      call(scroll, "down");
      helper.startAt += 1;
    } else {
      break;
    }
  }
};
