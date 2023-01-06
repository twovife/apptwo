import { motion } from "framer-motion";
import React from "react";
import ProgressiveImage from "react-progressive-image";
import { Link } from "react-router-dom";
import Navbar from "../containers/Navbar";

const transition = { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] };
const Home = ({ image }) => {
  return (
    <div className="bg-main h-screen w-full relative flex flex-col">
      <div className="max-w-[200px] max-h-[280px] h-full w-full overflow-hidden mx-auto mt-auto -translate-y-1/2" ref={image}>
        <Link to="/about">
          <ProgressiveImage src={"/man2.jpg"}>
            {(src) => <motion.img whileHover={{ scale: 1.1 }} transition={transition} className="w-full h-full object-cover" src={src} />}
          </ProgressiveImage>
        </Link>
      </div>
    </div>
  );
};

export default Home;
