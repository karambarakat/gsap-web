/**
 * a reducer passed to built-in useReducer hook from react
 * @param {Object} state old state
 * @param {Object} action the desired action passed to dispatch function
 * @returns the new state; if the same as the old state the tree will not refresh
 */
export default function (state, action) {
  switch (action.type) {
    case "addItems":
      const dir = action.dir || "down";
      const newArr = [...(state[dir]?.arr || []), ...action.payload].sort(
        (a, b) => a.threshold - b.threshold
      );

      return {
        ...state,
        [dir]: { arr: newArr, fn: action.fn },
      };

    case "deleteWithUUID":
      var returnVal = {};
      Object.keys(state).forEach((key) => {
        const scrolls = state[key].arr.filter(
          (scroll) => scroll.uuid !== action.payload
        );
        returnVal[key] = { arr: scrolls, fn: state[key].fn };
      });
      return returnVal;

    default:
      console.log("hit default, bug?");
      return state;
  }
}
