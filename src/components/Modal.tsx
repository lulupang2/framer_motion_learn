import { motion, useCycle, useScroll } from "framer-motion";
import { useNavigate } from "react-router-dom";
interface IProps {
  exampleId: string;
  children: React.ReactNode;
}

const sidebar = {
  open: {
    scale: [0, 1.2],
    transition: {
      stiffness: 50,
      type: "spring",
    },
  },
  closed: {
    scale: 0,
    transition: {
      stiffness: 400,
      damping: 40,
      type: "spring",
    },
  },
};

export function Modal({ exampleId, children }: IProps) {
  const { scrollY } = useScroll();
  const [isOpen, modalOpen] = useCycle(false, true);
  const navigate = useNavigate();
  const onOverlayClick = () => {
    modalOpen();
    setTimeout(() => {
      navigate("/");
    }, 400);
  };
  return (
    <>
      <motion.div
        className="Modal-Overlay"
        onClick={onOverlayClick}
        animate={isOpen ? "closed" : "open"}
        variants={sidebar}
      ></motion.div>
      <motion.div
        animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
        transition={{ stiffness: 2 }}
        className="Modal-Wrapper"
        layoutId={exampleId}
        style={{ top: scrollY.get() }}
        onTap={() => modalOpen()}
      >
        {children}
      </motion.div>
    </>
  );
}
