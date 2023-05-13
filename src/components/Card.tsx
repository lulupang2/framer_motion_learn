import { motion } from "framer-motion";

const Card = ({
  children,
  label,
  onClick,
}: {
  children: React.ReactNode;
  label: string;
  onClick: () => void;
}) => {
  return (
    <motion.div
      className="Card"
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.2 }}
      exit={{ scale: 1 }}
      transition={{ type: "spring" }}
      onClick={onClick}
    >
      {label}
      {children}
    </motion.div>
  );
};

export default Card;
