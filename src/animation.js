export const pageAnimation = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delayChildren: 1,
      staggerChildren: 0.2,
    }
  },
  exit: {
    opacity: 0, y: 300,
    transition: {
      duration: 1,
    }
  }
};

export const titleAnim = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {duration: 1, ease:'easeOut'}
  }
};