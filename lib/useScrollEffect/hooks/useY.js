import base from "./base";

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
    call(scrolls[helper.startAt]);
    helper.startAt += 1;
  }

  while (prev(helper.startAt, scrolls, stake)) {
    helper.startAt -= 1;
    call(scrolls[helper.startAt]);
  }
};

const useY = base(onScroll, "y");

export default useY;
