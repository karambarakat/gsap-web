import { useReducer } from "react";

function sbt(a, b) {
  return a.threshold - b.threshold;
}

function reducer(state, action) {
  // console.log(action);
  switch (action.type) {
    case "add_up":
      return {
        ...state,
        up: [...state.up, ...action.payload].sort(sbt),
      };
    case "add_down":
      return { ...state, down: [...state.down, ...action.payload].sort(sbt) };
    case "add_y":
      return { ...state, y: [...state.y, ...action.payload].sort(sbt) };
    case "delete_uuid":
      //todo: remove all callbacks registered with this uuid
      return {
        up: state.up.filter((e) => e.useEffectUuid !== action.uuid),
        down: state.down.filter((e) => e.useEffectUuid !== action.uuid),
        y: state.y.filter((e) => e.useEffectUuid !== action.uuid),
        cbs: state.cbs.filter((e) => e.useEffectUuid !== action.uuid),
      };

    /**
     * cases only to modify state.cbs
     */
    case "add_callback":
      return {
        ...state,
        cbs: [
          ...state.cbs,
          { callback: action.payload, useEffectUuid: action.uuid },
        ],
      };
    case "remove_callback":
      return {
        ...state,
        cbs: state.cbs.filter((e) => e.useEffectUuid !== action.uuid),
      };
    /**
     * cases only to modify state.cbs
     */

    /**
     * shouldn't reach this code at all
     */
    default:
      console.log("error?");
      return state;
  }
}

export default () => useReducer(reducer, { up: [], down: [], y: [], cbs: [] });
