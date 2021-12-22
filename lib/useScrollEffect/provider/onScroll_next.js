// const registerCallback = (uuid, setCallbacks) => (callback) => {
//   setCallbacks((old) => [...old, { callback, useEffectUuid: uuid }]);
// };

// const removeCallback = (uuid, setCallbacks) => (cbToRemove) => {
//   setCallbacks((old) =>
//     old.filter((cb) => {
//       return cb.useEffectUuid !== uuid;
//     })
//   );
// };

function registerCallback(uuid, setCallbacks) {
  function internal(callback) {
    setCallbacks((old) => [...old, { callback, useEffectUuid: uuid }]);
  }
  return internal;
}

function removeCallback(uuid, setCallbacks) {
  function internal(cbToRemove) {
    setCallbacks((old) =>
      old.filter((cb) => {
        return cb.useEffectUuid !== uuid;
      })
    );
  }
  return internal;
}

export default function onScroll_next(scrolls, _triggerAt, setCallbacks) {
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
          registerCallback: registerCallback(
            scroll.useEffectUuid,
            setCallbacks
          ),
          removeCallback: removeCallback(scroll.useEffectUuid, setCallbacks),
        });
        triggerAtInstance.startAt += 1;
        continue;
      } else {
        break;
      }
    }
  }
}
