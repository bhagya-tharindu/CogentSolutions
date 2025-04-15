"use client";
import React from "react";
import { motion } from "framer-motion";
import { useMotionScrollAnimation } from "../utils/Helpers";

const EventsOverView = () => {
  const eventOverViewHeaderAnimation = useMotionScrollAnimation(0.5, "left");
  const eventOverViewParagraghAnimation = useMotionScrollAnimation(0.5);
  const eventOverViewReasonsAnimation = useMotionScrollAnimation(0.5);

  return (
    <div id="eventsOverview" className="bg-[#171717] text-white py-[60px]">
      <div className="px-3 xl:px-12 md:grid grid-cols-[auto_1fr] gap-[20px] mb-[80px]">
        <motion.h2
          ref={eventOverViewHeaderAnimation.ref}
          animate={eventOverViewHeaderAnimation.controls}
          className="text-[56px] pb-8 text-center leading-tight max-w-[300px] mx-auto"
        >
          Event Overview
        </motion.h2>
        <motion.p
          ref={eventOverViewParagraghAnimation.ref}
          animate={eventOverViewParagraghAnimation.controls}
          className="text-[20px]"
        >
          Join us on April 9th in Cairo, Egypt, for Finastra's Universal Banking
          Forum, "Reimagine Banking: Adapt. Evolve. Thrive." This exclusive
          event is designed to help you navigate and excel in the rapidly
          evolving banking landscape.
          <br />
          <br />
          Our forum will bring together business and technology experts,
          industry leaders, and visionaries to share their insights on the
          latest trends and challenges in the banking sector. You'll gain
          valuable knowledge on topics such as Generative AI, the impact of
          volatility, globalization challenges, persistent supply chain issues,
          recession threats, shifts in competitive dynamics, and evolving
          regulations.
          <br />
          <br />
          Each session will delve into the implications, challenges, and
          opportunities these topics present, providing you with practical
          strategies to leverage the latest technologies and capitalize on
          emerging opportunities. This is a unique chance to learn from the best
          in the industry, stay ahead of the curve, and connect with fellow
          retail banking professionals.
          <br />
          <br />
          Don't miss this opportunity to enhance your knowledge, skills, and
          network in the finance and banking sector. Register today and secure
          your place at this must-attend event!
        </motion.p>
      </div>
      <motion.article
        ref={eventOverViewReasonsAnimation.ref}
        animate={eventOverViewReasonsAnimation.controls}
        className="bg-[linear-gradient(84deg,_#1c015d_-7.52%,_#8045ce_108.41%)] rounded-[30px] pt-7 px-7 pb-0 md:grid grid-cols-[1fr_1fr] gap-[24px] max-w-[1150px] mx-auto md:pb-7 "
      >
        <img
          src="/Finastra-UB-Egypt-Benefits-of-attending SMALL.jpg"
          alt="Benefits-of-attending-image"
          className="rounded-[30px] block mb-6 md:mb-0"
        />

        <div className="pl-[33px]">
          <p className="text-2xl">
            TOP REASONS WHY THIS IS THE ONLY CONFERENCE YOU NEED TO ATTEND IN
            2025
          </p>

          <ul className="p-[32px] flex flex-col gap-4 md:gap-6 md:justify-between md:pb-0">
            <li>
              <img
                src="/Icon_5h.png"
                className="w-[30px] h-[30px] inline-block mr-2"
                style={{ filter: "brightness(100)" }}
                alt=""
              />
              <span className="text-[18px]">Learn from industry experts</span>
            </li>
            <li>
              <img
                src="/Icon_4f.png"
                className="w-[30px] h-[30px] inline-block mr-2 "
                style={{ filter: "brightness(100)" }}
                alt=""
              />
              <span className="text-[18px]">Stay ahead of emerging trends</span>
            </li>
            <li>
              <img
                src="/Icon_2ff.png"
                className="w-[30px] h-[30px] inline-block mr-2"
                style={{ filter: "brightness(100)" }}
                alt=""
              />
              <span className="text-[18px]">
                Connect with fellow banking professionals
              </span>
            </li>
            <li>
              <img
                src="/Icon_8d.png"
                className="w-[30px] h-[30px] inline-block mr-2"
                style={{ filter: "brightness(100)" }}
                alt=""
              />
              <span className="text-[18px]">
                Enhance your knowledge, skills, and network
              </span>
            </li>
            <li>
              <img
                src="/Icon_1f.png"
                className="w-[30px] h-[30px] inline-block mr-2"
                style={{ filter: "brightness(100)" }}
                alt=""
              />
              <span className="text-[18px]">
                Enhance your knowledge, skills, and network
              </span>
            </li>
          </ul>
        </div>
      </motion.article>
    </div>
  );
};

export default EventsOverView;
