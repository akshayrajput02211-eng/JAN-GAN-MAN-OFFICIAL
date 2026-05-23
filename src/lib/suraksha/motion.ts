export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: {
    opacity: 1,
    y: 0,
  },
};

export const stagger = {
  hidden: {},

  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

export const scaleHover = {
  whileHover: {
    scale: 1.03,
    y: -4,
  },
};