export const pageAnimation = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    y: 300,
    transition: {
      duration: 1,
      when: 'beforeChildern',
      staggerChildern: .3,
      delayChildern: 2
    },
  },
}

export const titleAnim = {
  hidden: { opacity: 0, x: 200 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: 'easeOut' },
  },
}
