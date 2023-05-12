import { motion } from "framer-motion";
import React from "react";
import styles from "./Animation.module.scss";
export default function Animation1() {
  const [transX, setTransX] = React.useState(0);
  const [transY, setTransY] = React.useState(0);
  const [rotate, setRotate] = React.useState(0);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    set: React.Dispatch<React.SetStateAction<number>>
  ) => {
    set(Number(e.target.value));
  };

  return (
    <div className="MotionWrapper">
      <div>
        <motion.div
          className={styles.box}
          animate={{
            x: transX,
            y: transY,
            rotate,
          }}
          transition={{ type: "spring" }}
        ></motion.div>
      </div>
      <div>
        <div>
          {transX}
          <input
            type="range"
            value={transX}
            min={-50}
            max={50}
            onChange={(e) => onChange(e, setTransX)}
          />
        </div>
        <div>
          {transY}
          <input
            type="range"
            min={-50}
            max={50}
            value={transY}
            onChange={(e) => onChange(e, setTransY)}
          />
        </div>
        <div>
          {rotate}
          <input
            type="range"
            min={-360}
            max={360}
            value={rotate}
            onChange={(e) => onChange(e, setRotate)}
          />
        </div>
      </div>
    </div>
  );
}
export function Animation1_Tumbnail() {
  return (
    <motion.div
      className={styles.box}
      initial={{ rotate: 0 }}
      whileHover={{ rotate: 360 }}
      exit={{ rotate: 0 }}
      transition={{ type: "spring" }}
    ></motion.div>
  );
}
