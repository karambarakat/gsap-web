import base from "./base";

var upOrDown;

const next = (rightBefore, scrolls, stake) => {
  if (rightBefore === scrolls.length) return false;

  if (stake > scrolls[rightBefore].threshold) {
    return true;
  } else return false;
};

const prev = (rightBefore, scrolls, stake) => {
  if (rightBefore === 0) return false;

  if (stake < scrolls[rightBefore - 1].threshold) {
    return true;
  } else return false;
};

const onScroll = (scrolls, helper, stake, call) => {
  while (next(helper.startAt, scrolls, stake)) {
    upOrDown = "down";
    call(scrolls[helper.startAt]);
    helper.startAt += 1;
  }

  while (prev(helper.startAt, scrolls, stake)) {
    upOrDown = "up";
    helper.startAt -= 1;
    call(scrolls[helper.startAt]);
  }
};

const useY = base(onScroll, () => upOrDown);

export default useY;
