"use client";
import React from "react";
import { motion } from "framer-motion";
import { useMotionScrollAnimation } from "../utils/Helpers";

const Agenda = () => {
  const agendaHeader = useMotionScrollAnimation(0.5);
  const firstAgenda = useMotionScrollAnimation(0.5);
  const secondAgenda = useMotionScrollAnimation(0.3);
  const thirdAgenda = useMotionScrollAnimation(0.3);
  const fourthAgenda = useMotionScrollAnimation(0.3);
  const fifthAgenda = useMotionScrollAnimation(0.3);
  const sixthAgenda = useMotionScrollAnimation(0.3);
  const seventhAgenda = useMotionScrollAnimation(0.3);
  const eigthAgenda = useMotionScrollAnimation(0.3);
  const ninthAgenda = useMotionScrollAnimation(0.3);
  const tenthAgenda = useMotionScrollAnimation(0.3);
  const elevenAgenda = useMotionScrollAnimation(0.3);
  const twelvethAgenda = useMotionScrollAnimation(0.3);

  return (
    <div
      id="agenda"
      className="bg-[#ffffff] py-[60px] px-8 max-w-[1100px] mx-auto xl:px-36 md:grid md:grid-cols-[auto_1fr] md:gap-[32px]"
    >
      <motion.h2
        ref={agendaHeader.ref}
        animate={agendaHeader.controls}
        className="bg-gradient-to-r text-center h-[60px] from-[#694ED6] to-[#C137A2] bg-clip-text text-transparent  text-5xl mb-4"
      >
        Agenda
      </motion.h2>

      <div className="p-[48px] bg-[#f9f1ff80] rounded-[0.3rem]">
        <motion.div
          ref={firstAgenda.ref}
          animate={firstAgenda.controls}
          className="border-b-2 border-b-purple-400 py-8 flex flex-col gap-12 md:flex-row"
        >
          <div className="flex items-start flex-col gap-2">
            <span className="text-[20px] text-[#212529] font-medium">
              09:30 AM
            </span>

            <span className="text-white bg-[#0d6efd] px-[0.65em] py-[0.35em] text-[0.75em] font-bold block rounded-[.25rem]">
              Registration
            </span>
          </div>
          <div className="text-[20px] text-[#212529] font-medium">
            Registration & Welcome Coffee
          </div>
        </motion.div>
        <motion.div
          ref={secondAgenda.ref}
          animate={secondAgenda.controls}
          className="border-b-2 border-b-purple-400 py-8 flex flex-col gap-12 md:grid md:grid-cols-[auto_1fr]"
        >
          <span className="text-[20px] text-[#212529] font-medium ">
            10:00 AM
          </span>
          <div className="text-[#212529] ">
            <p className="mb-4 font-medium text-[20px]">Opening Remarks</p>
            <p>
              Rudy Kawmi, Managing Director - Middle East, Africa &
              Asia-Pacific, Finastra Universal Banking
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={thirdAgenda.ref}
          animate={thirdAgenda.controls}
          className="border-b-2 border-b-purple-400 py-8 flex flex-col gap-12 md:grid md:grid-cols-[auto_1fr]"
        >
          <span className="text-[20px] text-[#212529] font-medium">
            10:10 AM
          </span>
          <div className="text-[#212529] ">
            <p className="mb-4 font-medium text-[20px]">
              Keynote session: Digital Transformation in a Gen AI World
            </p>
            <p>
              Ms. Siobhan Byron, Executive Vice President, Finastra Universal
              Banking
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={fourthAgenda.ref}
          animate={fourthAgenda.controls}
          className="border-b-2 border-b-purple-400 py-8 flex flex-col gap-12 md:grid md:grid-cols-[auto_1fr]"
        >
          <span className="text-[20px] text-[#212529] font-medium">
            10:30 AM
          </span>
          <div className="text-[#212529] ">
            <p className="mb-4 font-medium text-[20px]">
              Decoding the Future - Transformation: The Opportunity & Time is
              Now
            </p>
            <p>
              Mr. Daragh O'Byrne, Senior Director, Marketing, Universal Banking,
              Finastra
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={fifthAgenda.ref}
          animate={fifthAgenda.controls}
          className="border-b-2 border-b-purple-400 py-8 flex flex-col gap-12 md:grid md:grid-cols-[auto_1fr]"
        >
          <span className="text-[20px] text-[#212529] font-medium">
            11:00 AM
          </span>
          <div className="text-[#212529] ">
            <p className="mb-4 font-medium text-[20px]">
              Panel Discussion: Customer Acquisition - Gaining New Customers in
              a Hyper Competitive World
            </p>
            <p>
              Hamid Nirouzad, Managing Director - Africa, Finastra Universal
              Banking Ahmad Hamdy, Head of Information Technology, International
              Company for Leasing S.A.E. “Incolease’’.
              <br />
              Ms. Riham Ismail Kassem Muhammad, Corporate & Supporting Functions
              CEX Senior, FABMISR
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={sixthAgenda.ref}
          animate={sixthAgenda.controls}
          className="border-b-2 border-b-purple-400 py-8 flex flex-col gap-12 md:grid md:grid-cols-[auto_1fr]"
        >
          <span className="text-[20px] text-[#212529] font-medium ">
            11:30 AM
          </span>
          <div className="text-[#212529] ">
            <p className="mb-6 font-medium text-[20px]">
              Decoding the Future - Transformation: The Opportunity & Time is
              Now
            </p>
            <p>
              Mr. Daragh O'Byrne, Senior Director, Marketing, Universal Banking,
              Finastra
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={seventhAgenda.ref}
          animate={seventhAgenda.controls}
          className="border-b-2 border-b-purple-400 py-8 flex flex-col gap-12 md:grid md:grid-cols-[auto_1fr]"
        >
          <span className="text-[20px] text-[#212529] font-medium ">
            12:00 PM
          </span>
          <div className="text-[#212529] ">
            <p className="font-medium text-[20px]">Coffee Break & Networking</p>
          </div>
        </motion.div>
        <motion.div
          ref={eigthAgenda.ref}
          animate={eigthAgenda.controls}
          className="border-b-2 border-b-purple-400 py-8 flex flex-col gap-12 md:grid md:grid-cols-[auto_1fr]"
        >
          <span className="text-[20px] text-[#212529] font-medium ">
            12:30 PM
          </span>
          <div className="text-[#212529] ">
            <p className="mb-6 font-medium text-[20px]">
              Panel Discussion: Cost to Serve: Deliver Customer Delight
            </p>
            <p>
              Narendra Mistry, Chief Product and Technology Officer, Finastra
              Universal Banking
              <br />
              Shehab Moustafa, Country Center of Excellence Director, Money
              Fellows;
              <br />
              Matthew Hughes, Head of FS&I, International Markets, Atos Emad
              Shawky Habib Hanna, Chief Data and Analytics Officer, Banque Misr.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ninthAgenda.ref}
          animate={ninthAgenda.controls}
          className="border-b-2 border-b-purple-400 py-8 flex flex-col gap-12 md:grid md:grid-cols-[auto_1fr]"
        >
          <span className="text-[20px] text-[#212529] font-medium ">
            01:00 PM
          </span>
          <div className="text-[#212529] ">
            <p className="mb-6 font-medium text-[20px]">
              The Essential Elements: What do you need to be "all things to all
              people"?
            </p>
            <p>
              Narendra Mistry, Chief Product and Technology Officer, Finastra
              Universal Banking
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={tenthAgenda.ref}
          animate={tenthAgenda.controls}
          className="border-b-2 border-b-purple-400 py-8 flex flex-col gap-12 md:grid md:grid-cols-[auto_1fr]"
        >
          <span className="text-[20px] text-[#212529] font-medium ">
            01:30 PM
          </span>
          <div className="text-[#212529] ">
            <p className="mb-6 font-medium text-[20px]">
              Making the case for change: The Question is How
            </p>
            <p>
              Marwan Abouzeid, Principal Solutions Consultant & Customer Value
              Lead, MEA & APAC, Finastra Universal Banking
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={elevenAgenda.ref}
          animate={elevenAgenda.controls}
          className="border-b-2 border-b-purple-400 py-8 flex flex-col gap-12 md:grid md:grid-cols-[auto_1fr]"
        >
          <span className="text-[20px] text-[#212529] font-medium ">
            01:50 PM
          </span>
          <div className="text-[#212529] ">
            <p className="mb-6 font-medium text-[20px]">Closing Remarks</p>
            <p>
              Rudy Kawmi, Managing Director - Middle East, Africa &
              Asia-Pacific, Finastra Universal Banking
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={twelvethAgenda.ref}
          animate={twelvethAgenda.controls}
          className="border-b-2 border-b-purple-400 py-8 flex flex-col gap-12 md:grid md:grid-cols-[auto_1fr]"
        >
          <span className="text-[20px] text-[#212529] font-medium ">
            02:00 PM
          </span>
          <div className="text-[#212529] ">
            <p className="mb-6 font-medium text-[20px]">Lunch</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Agenda;
