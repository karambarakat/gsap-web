export default (scrolls, _triggerAt) => {
  // callbacks.forEach((cb) => cb.callback());
  const top = window.scrollY;
  for (const triggerAtInstance of _triggerAt.current) {
    const { percent, startAt } = triggerAtInstance;
    let trigger = top + window.innerHeight * percent;
    // register
    for (let i = startAt; i < scrolls.length; i++) {
      let scroll = scrolls[i];
      if (trigger > scroll.threshold) {
        scroll.callback({
          percent: percent,
          threshold: scroll.threshold,
          // registerCallback: registerCallback(scroll.useEffectUuid),
          // removeCallback: removeCallback(scroll.useEffectUuid),
        });
        triggerAtInstance.startAt += 1;
        continue;
      } else {
        break;
      }
    }
  }
};
