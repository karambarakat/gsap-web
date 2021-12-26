/**
 * will be triggered by Provider.js the return value is to onScroll/*.js
 * @param {function} dispatch function
 * @param {Number} percent number passed to the provider ranges from 0 to 1, default is 0
 * @param {*} triggerOnScroll boolean to be deleted later, represent the event passed by onscroll event
 * @returns {function} function to be passed to onScroll/*.js
 */
export default function call(dispatch, percent, triggerOnScroll) {
  /**
   * type definition (Scroll)
   * @member callback: ƒ (_ref)
   * @member called: default false
   * @member threshold: 1300
   * @member useEffectUuid
   */
  /**
   * will be triggered by onScroll/*.js
   * @param (Scroll) object represent all infromation to scroll
   */
  return (scroll, dir) => {
    // function defined by the user when calling useScrollEffect, useYScrollEffect, useXScrollEffect
    scroll.callback({
      percent,
      threshold: scroll.threshold,
      dir: dir,
      registerCallback: (cb) =>
        dispatch({ type: "add_callback", payload, uuid: scroll.useEffectUuid }),
      removeCallback: () =>
        dispatch({ type: "remove_callback", uuid: scroll.useEffectUuid }),
      triggerOnScroll,
    });
  };
}
