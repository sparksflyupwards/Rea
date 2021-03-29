export const pageVariants = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
  };
  
  export const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1
  };
  
  export const pageStyle = {
    position: "absolute"
  };

  /**
   * export const pageVariants = {
  initial: {
    opacity: 0,
    x: "0"
  },
  in: {
    opacity: 1,
    x: "calc(50vw - 50%)"
  },
  out: {
    opacity: 0,
    x: "100vw"
  },
  };
  
  export const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 1
  };
  
  export const pageStyle = {
    position: "absolute"
  };
   */