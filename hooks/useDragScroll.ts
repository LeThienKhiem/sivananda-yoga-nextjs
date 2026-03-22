import {
  useState,
  useRef,
  useCallback,
  useEffect,
  type MouseEvent as ReactMouseEvent,
} from "react";

const DRAG_CLICK_THRESHOLD_PX = 8;

/**
 * Mouse drag-to-scroll for horizontal overflow containers.
 * Uses document-level move/up so dragging continues outside the strip.
 * Suppresses accidental clicks on children (e.g. links) after a drag.
 */
export function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isDragging, setIsDragging] = useState(false);

  const isDownRef = useRef(false);
  const startPageXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const didDragRef = useRef(false);
  const cleanupRef = useRef<(() => void) | null>(null);

  const endDrag = useCallback(() => {
    cleanupRef.current?.();
    cleanupRef.current = null;
    isDownRef.current = false;
    setIsDragging(false);
  }, []);

  useEffect(() => {
    return () => {
      cleanupRef.current?.();
      cleanupRef.current = null;
    };
  }, []);

  const applyDrag = useCallback((pageX: number) => {
    if (!isDownRef.current || !ref.current) return;
    const dx = pageX - startPageXRef.current;
    if (Math.abs(dx) > DRAG_CLICK_THRESHOLD_PX) didDragRef.current = true;
    ref.current.scrollLeft = scrollLeftStartRef.current - dx;
  }, []);

  const onMouseDown = useCallback(
    (e: ReactMouseEvent<T>) => {
      if (e.button !== 0 || !ref.current) return;
      isDownRef.current = true;
      didDragRef.current = false;
      startPageXRef.current = e.pageX;
      scrollLeftStartRef.current = ref.current.scrollLeft;
      setIsDragging(true);

      cleanupRef.current?.();
      const onDocMove = (ev: MouseEvent) => {
        ev.preventDefault();
        applyDrag(ev.pageX);
      };
      const onDocUp = () => {
        document.removeEventListener("mousemove", onDocMove);
        document.removeEventListener("mouseup", onDocUp);
        endDrag();
      };
      document.addEventListener("mousemove", onDocMove);
      document.addEventListener("mouseup", onDocUp);
      cleanupRef.current = () => {
        document.removeEventListener("mousemove", onDocMove);
        document.removeEventListener("mouseup", onDocUp);
      };
    },
    [applyDrag, endDrag],
  );

  const onMouseMove = useCallback(
    (e: ReactMouseEvent<T>) => {
      if (!isDownRef.current) return;
      e.preventDefault();
      applyDrag(e.pageX);
    },
    [applyDrag],
  );

  /** No-op: drag is ended by document mouseup; leaving the strip should not cancel. */
  const onMouseLeave = useCallback(() => {}, []);

  const onMouseUp = useCallback(() => {
    endDrag();
  }, [endDrag]);

  const onClickCapture = useCallback((e: ReactMouseEvent<T>) => {
    if (didDragRef.current) {
      e.preventDefault();
      e.stopPropagation();
      didDragRef.current = false;
    }
  }, []);

  return {
    ref,
    isDragging,
    events: {
      onMouseDown,
      onMouseMove,
      onMouseLeave,
      onMouseUp,
      onClickCapture,
    },
  };
}
