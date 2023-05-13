import { AnimatePresence, motion, useScroll } from "framer-motion";
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
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="Modal-Overlay"
          onClick={onOverlayClick}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        ></motion.div>
      </AnimatePresence>
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
