import { debounceCell } from "@/utils/useDebounce";
import { useCallback, useEffect } from "react";

interface UseIntersectionDetectionType {
  arrayLength: number;
  triggerRef: TriggerRefType;
  callBack: () => void;
}

const useIntersectionDetection = ({
  arrayLength,
  triggerRef,
  callBack,
}: UseIntersectionDetectionType) => {
  const INTERSECTION_THRESHOLD = 25;
  const LOAD_DELAY_MS = 1000;

  const handleEntry = async (entry: IntersectionObserverEntry) => {
    const boundingRect = entry.boundingClientRect;
    const intersectionRect = entry.intersectionRect;
    const isScrolling =
      entry.isIntersecting &&
      intersectionRect.bottom - boundingRect.bottom <= INTERSECTION_THRESHOLD;
    if(arrayLength < 12) return;
    if (isScrolling) {
      callBack();
    }
  };

  const onIntersect = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (entries: any) => debounceCell(handleEntry, LOAD_DELAY_MS, entries[0]),
    [handleEntry]
  );

  useEffect(() => {
    if (triggerRef.current) {
      const container = triggerRef.current;
      const observer = new IntersectionObserver(onIntersect);

      observer.observe(container);

      return () => {
        observer.disconnect();
      };
    }
  }, [triggerRef, onIntersect]);
};

export default useIntersectionDetection;
