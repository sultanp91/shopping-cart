export const pageTransition = {
  hidden: {
    opacity: 0,
    y: 200,
  },
  show: {
    opacity: 0.7,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 200,
    transition: {
      duration: 0.7,
    },
  },
};
