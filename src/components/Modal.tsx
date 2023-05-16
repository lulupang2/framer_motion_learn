import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
interface IProps {
  exampleId: string;
  children: React.ReactNode;
}

export function Modal({ exampleId, children }: IProps) {
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const onOverlayClick = () => {
    navigate("/");
  };
  const sidebar = {
    open: (height = 720) => ({
      clipPath: `circle(${height * 2 + 200}px at 50% 50%)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 12,
      },
      transform: "translate(-50%, -50%)",
      top: "50%",
      left: "50%",
    }),
  };
  return (
    <>
      <motion.div
        className="Modal-Overlay"
        onClick={onOverlayClick}
        animate={exampleId ? "open" : "closed"}
        transition={{ duration: 1.5 }}
        variants={sidebar}
      ></motion.div>
      <motion.div
        className="Modal-Wrapper"
        layoutId={exampleId}
        style={{ top: scrollY.get() }}
      >
        {children}
      </motion.div>
    </>
  );
}
