import { useEffect } from "react";
import { useScroll } from "./context";
import uuid from "./uuid";

export function useScrollEffect(callback, thresholds) {
  const { scrolls, setScrolls } = useScroll();
  useEffect(() => {
    /**
     * uuid is used internally to cleanup callbacks
     */
    const useEffectUuid = uuid();
    const newItems = thresholds.map((threshold, i) => {
      return {
        threshold,
        callback,
        useEffectUuid,
      };
    });

    setScrolls((oldScrolls) =>
      [...newItems, ...oldScrolls].sort((a, b) => a.threshold - b.threshold)
    );

    return () => {
      setScrolls((oldScrolls) =>
        oldScrolls.filter((scroll) => scroll.uuid === useEffectUuid)
      );
    };
  }, []);
}
