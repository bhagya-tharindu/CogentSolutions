"use client";
import React from "react";
import ParticlesContainer from "./ParticlesContainer";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/Helpers";

const Hero = () => {
  return (
    <div className=" bg-[#171717] w-auto h-auto bg-[url('/heroBgImage.png')] bg-cover relative">
      <div className="flex flex-col gap-[60px]">
        <div className="text-[#878787] translate-z-0 text-center  flex flex-col gap-[12px] pt-[150px] z-30">
          <motion.span
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="capitalize"
          >
            organized by
          </motion.span>
          <motion.img
            src="/finastra-boardroom.png"
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-[340px] mx-auto"
            alt=""
          />
          <motion.h1
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-white text-7xl leading-tight font-bold"
          >
            Reimagine Banking: <br /> Adapt. Evolve. Thrive.
          </motion.h1>
          <motion.span
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="capitalize"
          >
            Date: 9th April 2025
          </motion.span>
          <motion.span
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="capitalize"
          >
            Time: 9:30 AM - 2:00 PM GMT+2
          </motion.span>
          <motion.span
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="capitalize"
          >
            The Nile Ritz-Carlton, Cairo, Egypt
          </motion.span>
        </div>
        {/* image */}
        <motion.img
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          src="/Finastra-UB-Egypt-Event-Overview SMALL.jpg"
          alt="overview-img"
          className="mx-auto w-full max-w-[600px] h-[250px] md:h-[400px] object-cover rounded-t-2xl z-30"
        />
      </div>
      <div className="absolute w-full h-full right-0 bottom-0">
        <ParticlesContainer />
      </div>
    </div>
  );
};

export default Hero;
