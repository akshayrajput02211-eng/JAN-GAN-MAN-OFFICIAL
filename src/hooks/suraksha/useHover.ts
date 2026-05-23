"use client";

import { useState } from "react";

export default function useHover() {
  const [hovered, setHovered] =
    useState(false);

  return {
    hovered,
    bind: {
      onMouseEnter: () =>
        setHovered(true),

      onMouseLeave: () =>
        setHovered(false),
    },
  };
}