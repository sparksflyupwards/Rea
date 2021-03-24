export const pageVariants = {
  initial: {
    opacity: 0,
    x: "calc(50vw - 50%)",
    y: "0",
    scale: 0.8
  },
  in: {
    opacity: 1,
    x: "calc(50vw - 50%)",
    y: "calc(50vh - 50%)",
    scale: 1
  },
  out: {
    opacity: 0,
    x: "100vw",
    scale: 1.2
  },
  };
  
  export const pageTransition = {
    type: "tween",
    ease: "anticipate",
    duration: 2
  };
  
  export const pageStyle = {
    position: "absolute"
  };