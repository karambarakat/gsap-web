export const registerCallback = (uuid, setCallbacks) => (callback) => {
  setCallbacks((old) => [...old, { callback, useEffectUuid: uuid }]);
};

export const removeCallback = (uuid, setCallbacks) => (cbToRemove) => {
  setCallbacks((old) =>
    old.filter((cb) => {
      return cb.useEffectUuid !== uuid;
    })
  );
};
