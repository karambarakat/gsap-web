import base from "./base";

const onScroll = (scrolls, helper, stake, call) => {
  for (let i = helper.startAt; i < scrolls.length; i++) {
    let scroll = scrolls[i];
    if (stake > scroll.threshold) {
      call(scroll);
      helper.startAt += 1;
    } else {
      break;
    }
  }
};

const useDown = base(onScroll, "down");

export default useDown;
