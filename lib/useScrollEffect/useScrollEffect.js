// todo: delete this file
// import { useEffect } from "react";
// import { useScroll } from "./context";
// import uuid from "./uuid";

// const onScroll = (scrolls, helper, stake, call) => {
//   for (let i = helper.startAt; i < scrolls.length; i++) {
//     let scroll = scrolls[i];
//     if (stake > scroll.threshold) {
//       call(scroll);
//       helper.startAt += 1;
//     } else {
//       break;
//     }
//   }
// };

// export function useScrollEffect(callback, thresholds) {
//   const { dispatch } = useScroll();
//   useEffect(() => {
//     /**
//      * uuid is used internally to cleanup after useEffect and cleanup callbacks with removeCallback
//      */
//     const useEffectUuid = uuid();
//     const newItems = thresholds.map((threshold, i) => {
//       return {
//         threshold,
//         callback,
//         useEffectUuid,
//       };
//     });

//     dispatch({
//       type: "addItems",
//       dir: "down",
//       fn: onScroll,
//       payload: newItems,
//     });

//     return () => {
//       dispatch({ type: "deleteWithUUID", payload: useEffectUuid });
//     };
//   }, []);
// }
