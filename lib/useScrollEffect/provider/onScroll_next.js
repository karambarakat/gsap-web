import { registerCallback, removeCallback } from "./manageCallbacks";

const call = (setCallbacks, percent, triggerOnScroll) => (scroll) => {
  scroll.callback({
    percent,
    threshold: scroll.threshold,
    dir: scroll.dir(),
    registerCallback: registerCallback(scroll.useEffectUuid, setCallbacks),
    removeCallback: removeCallback(scroll.useEffectUuid, setCallbacks),
    triggerOnScroll,
  });
};

export default function onScroll_next(
  keyArrayScrolls,
  sHelper,
  setCallbacks,
  percent,
  triggerOnScroll
) {
  const stake = window.scrollY + window.innerHeight * percent;
  Object.keys(keyArrayScrolls).forEach((key) => {
    const scrolls = keyArrayScrolls[key].arr;
    const helper = sHelper[key];
    keyArrayScrolls[key].fn(
      scrolls,
      helper,
      stake,
      call(setCallbacks, percent, triggerOnScroll)
    );
  });
}
