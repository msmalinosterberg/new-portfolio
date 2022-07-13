import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: "-100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0,
    transition: { ease: "easeInOut" },
  },
};

const PageAnimation = (props: any) => {
  return (
    <motion.div
      className="Cv"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {props.children}
    </motion.div>
  );
};

const nameVariants = {
  hidden: {
    opacity: 0,
    x: "-100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,
    }
  }
}
export const SlidingFromLeftAnimation = (props: any) => {
  return (
    <motion.div
      className="size50 center"
      variants={nameVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {props.children}
    </motion.div>
  )
}
export const SlidingFromLeftAnimation2 = (props: any) => {
  return (
    <motion.div
      className="size50 center"
      variants={SlidingFromRightVariants2}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {props.children}
    </motion.div>
  )
}

const SlidingFromRightVariants = {
  hidden: {
    opacity: 0,
    x: "130vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2.5,
    }
  }
}
const SlidingFromRightVariants2 = {
  hidden: {
    opacity: 0,
    x: "-130vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2.75,
    }
  }
}



export const SlidingFromRightAnimation = (props: any) => {
  return (
    <motion.div
      variants={SlidingFromRightVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {props.children}
    </motion.div>
  )
}

export default PageAnimation;