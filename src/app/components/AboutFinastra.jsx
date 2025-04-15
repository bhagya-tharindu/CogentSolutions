"use client";
import React from "react";
import { useMotionScrollAnimation } from "../utils/Helpers";
import { motion } from "framer-motion";

const AboutFinastra = () => {
  const aboutFinastra = useMotionScrollAnimation(0.5);
  return (
    <motion.div
      ref={aboutFinastra.ref}
      animate={aboutFinastra.controls}
      className="bg-[#181818] text-white text-center py-[100px] px-3 xl:px-36"
    >
      <h2 className="font-bold text-[40px] mb-6">About Finastra</h2>
      <p className="text-[#f8f9fa] md:mx-auto md:w-[66%] text-2xl font-light">
        Finastra is a global provider of financial services software
        applications across Lending, Payments, Treasury and Capital Markets, and
        Universal (retail and digital) Banking. Committed to unlocking the
        potential of people, businesses and communities everywhere, its vision
        is to accelerate the future of Open Finance through technology and
        collaboration, and its pioneering approach is why it is trusted by
        ~8,100 financial institutions, including 45 of the world's top 50 banks
        <br />
        <br />
        For more information, visit{" "}
        <a href="https://www.finastra.com/" target="_blank">
          www.finastra.com.
        </a>
      </p>
    </motion.div>
  );
};

export default AboutFinastra;
