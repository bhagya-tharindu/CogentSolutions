"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import RegisterNowBtn from "./RegisterNowBtn";
import MenuModal from "./MenuModal";
import { motion, useScroll, useVelocity } from "framer-motion";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onToggle = () => {
    setShowMenu(!showMenu);
    console.log("on toggle click");
  };

  const slideDistance = 80;
  const threshold = 200;

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const [isScrollingBack, setIsScrollingBack] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isInView, setIsInView] = useState(true);

  useEffect(
    () =>
      scrollVelocity.onChange((latest) => {
        if (latest > 0) {
          setIsScrollingBack(false);
          return;
        }
        if (latest < -threshold) {
          setIsScrollingBack(true);
          return;
        }
      }),
    []
  );

  useEffect(() => scrollY.onChange((latest) => setIsAtTop(latest <= 0)), []);

  useEffect(
    () => setIsInView(isScrollingBack || isAtTop),
    [isScrollingBack, isAtTop]
  );

  return (
    <nav>
      <motion.nav
        className="bg-white-10 z-50 fixed backdrop-blur-sm text-white w-full"
        animate={{ y: isInView ? 0 : -slideDistance }}
        transition={{ duration: 0.2, delay: 0.25, ease: "easeInOut" }}
      >
        <div className="md:max-w-[70%] mx-auto py-4 px-6 flex justify-between items-center">
          {/* logo */}
          <Link href="/" className="">
            <img src="/cogent-logo-01.png" className="w-[160px]" alt="logo" />
          </Link>
          <motion.span
            animate={{ rotate: 360 }}
            transition={{ duration: 2 }}
            onClick={() => onToggle()}
            className="xl:hidden cursor-pointer"
          >
            <GiHamburgerMenu size={32} />
          </motion.span>
          {/* links */}
          {/* on desktop view */}
          <ul className="hidden xl:flex justify-between gap-4">
            <li>
              <Link href="#eventsOverview">Event Overview</Link>
            </li>
            <li>
              <Link href="#agenda">Agenda</Link>
            </li>
          </ul>
          {/* register btn */}
          <div className="hidden xl:block">
            <Link href="#registerForm">
              <RegisterNowBtn />
            </Link>
          </div>
        </div>
      </motion.nav>
      <div className="xl:hidden">
        <MenuModal
          showMenu={showMenu}
          setShowMenu={() => {
            setShowMenu(false);
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
