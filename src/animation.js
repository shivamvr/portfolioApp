export const pageAnimation = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: 'beforeChildren',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.7,
    },
  },
}

export const titleAnim = {
  hidden: { y: 20, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      duration: 1,
      ease: 'easeOut',
      when: 'beforeChildren',
      staggerChildren: 0.3,
    },
  },
}

export const lineAnim = {
  hidden: { width: 0 },
  show: {
    width: '100%',
    transition: {
      delay: 1,
      duration: 0.75,
      ease: 'easeOut',
    },
  },
}

export const photoAnim = {
  hidden: { scale: 1.2, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1,
      ease: 'easeOut',
    },
  },
}
export const slider = {
  hidden: { x: '-100%', skew: '45deg' },
  show: {
    x: '100%',
    skew: '0deg',
    transition: {
      duration: 0.75,
      ease: 'easeOut',
    },
  },
}
export const sliderContainer = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.15, ease: 'easeOut' } },
}
export const scrollReveal = {
  hidden: {
    opacity: 0,
    scale: 1.1,
    transition: { duration: 1, ease: 'easeOut' },
  },
  show: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
}
export const fade = {
  hidden: { opacity: 0, transition: { duration: 1 } },
  show: { opacity: 1, transition: { duration: 1 } },
}
