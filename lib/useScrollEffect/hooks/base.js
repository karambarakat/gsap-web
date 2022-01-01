import { useEffect } from "react";
import { disScrolls } from "../context";
import uuid from "../uuid";

function base(action) {
  return function (callback, thresholds) {
    if (
      Object.prototype.toString.apply(thresholds) !== "[object Array]" ||
      thresholds.some((e) => typeof e !== "number")
    ) {
      throw new Error("thresholds must be array of numbers");
    }
    const dispatch = disScrolls();
    useEffect(() => {
      /**
       * uuid is used internally to cleanup after useEffect and cleanup callbacks with removeCallback
       */
      const useEffectUuid = uuid();
      // console.log(thresholds, useEffectUuid);
      const newItems = thresholds.map((threshold, i) => {
        return {
          threshold,
          callback,
          useEffectUuid,
          called: false,
        };
      });

      dispatch({ type: action, payload: newItems });

      return () => {
        // console.log("return", thresholds, useEffectUuid);

        dispatch({ type: "delete_uuid", uuid: useEffectUuid });
      };
    }, [thresholds.toString()]);
  };
}

export const useScrollEffect = base("add_down");
export const useDownScrollEffect = base("add_down");
export const useUpScrollEffect = base("add_up");
export const useYScrollEffect = base("add_y");
