export const floatAnimation = {
  animate: {
    y: [0, -20, 0],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

export const butterflyAnimation = {
  animate: {
    x: [0, 100, -50, 0],
    y: [0, -50, 50, 0],
    rotate: [0, 20, -20, 0],
  },
  transition: {
    duration: 12,
    repeat: Infinity,
    ease: "linear",
  },
};