import { React, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import "./styles.css";

function App() {
  const textRef = useRef();
  // get current Y scroll progress with reference to the text
  const { scrollYProgress } = useScroll({ target: textRef });
  const y = useTransform(scrollYProgress, [0, 1], [-60, 60]);

  return (
    <div className="app">
      <motion.div className="text" ref={textRef} style={{ y: y, x: "-50%" }}>
        <h2>Hello, World!</h2>
        <p>Framer motion parallax effects are super cool!</p>
      </motion.div>
      <img
        src="https://cdn.pixabay.com/photo/2012/08/27/14/19/mountains-55067_640.png"
        className="background-image"
      />
    </div>
  );
}

export default App;
