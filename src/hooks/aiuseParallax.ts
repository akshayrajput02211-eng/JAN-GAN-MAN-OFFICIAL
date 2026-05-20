"use client";

import { useScroll, useTransform } from "framer-motion";

export const useParallax = () => {
  const { scrollYProgress } = useScroll();

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -120]
  );

  return { y };
};