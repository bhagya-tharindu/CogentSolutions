import React from "react";
import { LuPhone } from "react-icons/lu";
import { IoCloseSharp } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import Link from "next/link";
import RegisterNowBtn from "./RegisterNowBtn";

const MenuModal = ({ showMenu, setShowMenu }) => {
  return (
    <nav
      className={`w-screen h-screen bg-white/10 fixed top-0 left-0 opacity-0 visibility-hidden transition-all duration-500 transform backdrop-blur-sm ${
        showMenu
          ? "opacity-100 visibility-visible translate-y-0 z-[200]"
          : "opacity-0 visibility-hidden translate-y-[-100%]"
      }`}
    >
      <div className="flex justify-between items-center border-b border-[0.5px] md:border-none border-white px-[16px] py-[18px] md:py-[18px] md:px-[40px]">
        <Link href="/">
          <img
            src="/cogent-logo-01.png"
            className="w-[160px]"
            alt="white-home-logo"
          />
        </Link>
        <IoCloseSharp
          onClick={() => {
            setShowMenu();
          }}
          size={34}
          className="text-white"
        />
      </div>
      <div
        className="
          py-[60px] px-[40px] h-[calc(100vh-76px)] md:h-[calc(100vh-90px)] text-white flex flex-col justify-between md:py-[80px]"
      >
        {/* navlinks */}
        <ul className="title-medium h-[300px] md:h-[320px] flex flex-col gap-[28px]">
          <li>
            <Link
              href="#eventsOverview"
              onClick={() => {
                setShowMenu();
              }}
            >
              Event Overview
            </Link>
          </li>
          <li>
            <Link
              href="#agenda"
              onClick={() => {
                setShowMenu();
              }}
            >
              Agenda
            </Link>
          </li>
          <li>
            <Link
              href="#registerForm"
              onClick={() => {
                setShowMenu();
              }}
            >
              <RegisterNowBtn />
            </Link>
          </li>
        </ul>
        {/* end of navlinks */}

        {/* info */}
        <div className="flex flex-col md:flex-row">
          <span className="flex mb-[16px] md:mb-0 md:mr-[36px]">
            <LuPhone size={24} />
            <span className="ml-[15px] block">Hotline (+971) 50 5718867</span>
          </span>
          <span className="flex">
            <CiMail size={24} />
            <span className="ml-[15px] block">
              partnerships@cogentsolutions.ae
            </span>
          </span>
        </div>
        {/* end of info */}
      </div>
    </nav>
  );
};

export default MenuModal;
