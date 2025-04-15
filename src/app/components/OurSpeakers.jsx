"use client";
import React, { useState } from "react";
import { speakersInfo, useMotionScrollAnimation } from "../utils/Helpers";
import SpeakerPopupModal from "./SpeakerPopupModal";
import { motion } from "framer-motion";
const OurSpeakers = () => {
  const [open, setOpen] = useState(false);
  const [selectedSpeaker, setSelectedSpeaker] = useState({});
  const headerAnimation = useMotionScrollAnimation(0.5);
  const speakersAnimation = useMotionScrollAnimation(0.5);

  const openDialog = (speakerInfo) => {
    if (speakerInfo.hasBioInfo) {
      setSelectedSpeaker(speakerInfo);
      setOpen(true);
    }
  };

  return (
    <div className="bg-[linear-gradient(-90deg,_#343434_-7.52%,_#000_108.41%)] text-[#f8f9fa] pt-[60px] pb-[30px] px-3 xl:px-36 ">
      <motion.h2
        ref={headerAnimation.ref}
        animate={headerAnimation.controls}
        className="text-center text-6xl mb-16"
      >
        Our Speakers
      </motion.h2>
      {/* speakers section */}
      <motion.div
        ref={speakersAnimation.ref}
        animate={speakersAnimation.controls}
        className="flex flex-wrap justify-center -mx-2"
      >
        {speakersInfo.map((speakerInfo) => (
          <article
            key={speakerInfo.id}
            className="text-center w-full em:w-1/2 md:w-1/3 xl:w-1/4 px-2 md:px-6 mb-10 cursor-pointer shadow-md transition-transform duration-400 hover:-translate-y-3 hover:shadow-lg"
            onClick={() => openDialog(speakerInfo)}
          >
            <img
              src={`/${speakerInfo.img}`}
              className="w-full  mx-auto mb-3 rounded-[20%]"
              alt=""
            />
            <h3 className="text-[28px] mb-2 leading-tight">
              {speakerInfo.name}
            </h3>
            <p className="text-[rgb(182,182,182)]">
              {speakerInfo.position}
              {speakerInfo.additionalPosition && (
                <span>
                  <br />
                  {speakerInfo.additionalPosition}
                </span>
              )}
            </p>
          </article>
        ))}
      </motion.div>

      {open && (
        <SpeakerPopupModal
          open={open}
          setOpen={() => {
            setSelectedSpeaker({});
            setOpen(false);
          }}
          selectedSpeaker={selectedSpeaker}
        />
      )}
    </div>
  );
};

export default OurSpeakers;
