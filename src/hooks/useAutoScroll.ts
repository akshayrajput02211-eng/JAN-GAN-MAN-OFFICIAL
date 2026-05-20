"use client";

import { useEffect, RefObject } from "react";

export const useAutoScroll = (
  ref: RefObject<HTMLDivElement | null>
) => {
  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop =
        ref.current.scrollHeight;
    }
  }, [ref]);
};