import {
  motion,
  AnimatePresence,
  useInView,
  useAnimation,
} from "framer-motion";
import { useEffect, useRef } from "react";

const PageAnimation = (props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
        mainControls.start("visible")
    }
  }, [isInView]);

  return (
    <AnimatePresence>
      <div ref={ref}>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 8 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: 0.3, delay: 0.23 }}
        >
          {props.children}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default PageAnimation;
