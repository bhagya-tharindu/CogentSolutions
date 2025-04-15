import React from "react";
import { IoLocationOutline } from "react-icons/io5";
import { BiPhoneCall } from "react-icons/bi";
import { CiMail } from "react-icons/ci";
import { FaLinkedinIn, FaTwitter, FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className=" text-white bg-[black] py-[60px] px-3 xl:px-36">
      <div className="xl:grid xl:grid-cols-[510px_1fr] xl:gap-24 mb-22">
        <div className="mb-8 xl:mb-0">
          <div className="mb-8">
            <h3 className="text-[24px] font-bold mb-4">Cogent Solutions™</h3>
            <p>
              Through our conferences we transform your business challenges into
              opportunities. Our clients and customers are leading government
              entities and the fortune 500 companies.
            </p>
          </div>

          <h3 className="text-[24px] font-bold mb-8">Awards</h3>

          <div className="flex">
            <img
              src="BPW-2024_2.png"
              className="h-[80px] md:h-[140px] w-auto"
              alt="img"
            />
            <img
              src="bestwork-04.png"
              className="h-[80px] md:h-[140px] w-auto"
              alt="img"
            />
            <img
              src="bestwork-03.png"
              className="h-[80px] md:h-[140px] w-auto"
              alt="img"
            />
            <img
              src="bestwork-01.png"
              className="h-[80px] md:h-[140px] w-auto"
              alt="img"
            />
          </div>
        </div>

        <div>
          <h2 className="text-[24px] font-bold mb-8">Our Office</h2>

          <ul className="flex flex-col gap-2 text-[rgba(255,255,255,0.7)]">
            <li className="flex gap-2">
              <span>
                <IoLocationOutline size={24} />
              </span>
              <p>
                Middle East & Africa HQ
                <br />
                Office No: 209, The Metropolis Tower
                <br />
                Business Bay, Dubai, United Arab Emirates
              </p>
            </li>
            <li className="flex gap-2">
              <span>
                <IoLocationOutline size={24} />
              </span>
              <p>
                Asia Pacific HQ
                <br />
                7th floor Green Lanka Tower, Colombo
                <br />
                Sri Lanka
              </p>
            </li>
            <li className="flex gap-2">
              <span>
                <IoLocationOutline size={24} />
              </span>
              <p>
                Saudi Arabia HQ
                <br />
                Riyadh , Saudi Arabia
              </p>
            </li>
            <li className="flex gap-2">
              <span>
                <BiPhoneCall size={24} />
              </span>
              <p>+971 50 5718867</p>
            </li>
            <li className="flex gap-2">
              <span>
                <CiMail size={24} />
              </span>
              <p>partnerships@cogentsolutions.ae</p>
            </li>
          </ul>
        </div>
      </div>

      <div className="md:flex justify-between mt-8 border-t-[0.5px] border-t-[rgba(255,255,255,0.7)] border-solid pt-8">
        <span className="text-center md:text-left block mb-6 md:mb-0 text-[rgba(255,255,255,0.7)]">
          © {new Date().getFullYear()} Cogent Solutions Event Management LLC.
          All Right Reserved
        </span>
        <div className="flex gap-6 items-center md:justify-items-end justify-center">
          <Link
            href="https://www.linkedin.com/company/cogent-solutions-event-management/"
            target="_blank"
          >
            <FaLinkedinIn
              className="hover:text-blue-400 transition-all delay-100 cursor-pointer"
              size={20}
            />
          </Link>

          <Link href="https://www.facebook.com/cseventsuae/" target="_blank">
            <FaFacebookF
              className="hover:text-blue-400 transition-all delay-100 cursor-pointer"
              size={20}
            />
          </Link>

          <Link
            href="https://www.instagram.com/cs_event_management/"
            target="_blank"
          >
            <FaInstagram
              className="hover:text-blue-400 transition-all delay-100 cursor-pointer"
              size={20}
            />
          </Link>

          <Link href="https://x.com/cseventsdxb" target="_blank">
            <FaTwitter
              className="hover:text-blue-400 transition-all delay-100 cursor-pointer"
              size={20}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
