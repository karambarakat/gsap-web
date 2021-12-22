import base from "./base";

const onScroll = (scrolls, helper, stake, call) => {
  for (let i = scrolls.length - 1 - helper.startAt; i >= 0; i--) {
    let scroll = scrolls[i];
    if (stake < scroll.threshold) {
      call(scroll);
      helper.startAt += 1;
    } else {
      break;
    }
  }
};

const useUp = base(onScroll, () => "up");

export default useUp;
