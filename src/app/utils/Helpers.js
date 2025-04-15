import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const speakersInfo = [
  {
    id: 1,
    name: "Mr. Mohamed Elazzazy",
    position: "Head of IT Governance and Change Management",
    additionalPosition: "Al-Baraka Bank Egypt",
    img: "1s.png",
    hasBioInfo: false,
  },
  {
    id: 2,
    name: "Mr. Shehab Moustafa",
    position: "Country Center of Excellence Director",
    additionalPosition: "Money Fellows",
    img: "2s.jpg",
    hasBioInfo: false,
  },
  {
    id: 3,
    name: "Mr. Marwan Abouzeid",
    position:
      "Principal Solutions Consultant & Customer Value Lead, MEA & APAC",
    additionalPosition: "Finastra",
    img: "3s.jpg",
    hasBioInfo: true,
    bioInfoOne:
      "Marwan Abouzeid is a seasoned professional with over 22 years of experience in the Fintech industry. Currently serving as the Principal Solutions Consultant & Customer Value Lead for MEA and APAC at Finastra, Marwan is known for his strategic consulting, customer relationship management, and business development expertise.",
    bioInfoTwo:
      "His role involves ensuring Finastra adopts the right Go-to-Market strategy for its core banking platform, blending direct strategic customer engagements for both conventional and Islamic banks with complementary marketing and business development activities. Marwan's direct KPIs include C-level engagements such as ideation sessions, strategy formulation, and business case construction.",
    bioInfoThree:
      "Marwan's career background spans various roles in development, product management, professional services, and presales. He has proven ability in technology consultative selling for financial institutions seeking transformation and innovation. His extensive experience and dedication have made him a key player in the industry, contributing to significant projects and initiatives that drive growth and innovation.",
    bioInfoFour:
      "Prior to his journey at Finastra Marwan has held multiple roles within the financial industry working for both banking solution providers and financial institutions. Marwan holds an MBA from Manchester Business School and a bachelor’s degree in computer science from The American University in Cairo.",
  },
  {
    id: 4,
    name: "Mr. Karim El Mou",
    position: "Solution Consulting Director - MEA",
    additionalPosition: "Finastra",
    img: "4s.jpg",
    hasBioInfo: true,
    bioInfoOne:
      "Karim El Mourabet leads the Retail Banking Solution Consulting team at Finastra, covering Middle East & Africa. He has over 12 years’ experience in retail banking software implementation and consulting and working with Digital Banks. He previously led the Innovation services for Finastra Global Services team and worked on Next Gen implementation services, including core banking migrations.",
    bioInfoTwo:
      "Prior to re-joining Finastra, he was global head of solution consulting at Fidor, working on designing and launching digital banks globally. He holds a Masters of Science in Project Management and a Bachelor’s in Business Administration from the American University of Beirut.",
    bioInfoThree: false,
    bioInfoFour: false,
    bioInfoFive: false,
  },
  {
    id: 5,
    name: "Ms. Siobhan Byron",
    position: "Executive Vice President, Universal Banking",
    additionalPosition: "Finastra",
    img: "5s.jpg",
    hasBioInfo: true,
    bioInfoOne:
      "Siobhan oversees Universal Banking, including market leading core banking and digital solutions globally. She has more than 25 years of experience in IT and channel management, as well as leading and growing prominent technology companies across financial services, insurance, manufacturing, and public sectors. Siobhan is a strong advocate for diversity and inclusion. She is the Executive Sponsor for the company’s LGBTQ+ and Friends initiatives and supports Women@Finastra. Based in Canada, Siobhan enjoys spending down time with her family and friends, travelling, reading, and watching her son play hockey.",
    bioInfoTwo: false,
    bioInfoThree: false,
    bioInfoFour: false,
    bioInfoFive: false,
  },
  {
    id: 6,
    name: "Mr. Narendra Mist",
    position: "Chief Product and Technology Officer Universal Banking",
    additionalPosition: "Finastra",
    img: "6s.jpg",
    hasBioInfo: true,
    bioInfoOne:
      "Narendra leads the global product and technology organization for Universal Banking as the Chief Product and Technology Officer (CPTO). Narendra has been in the financial software industry for more than 25 years and his career with Finastra spans more than 13 years in various leadership roles, including running product for International Retail. He has experience building new SaaS businesses in Digital Essence cloud banking, whilst ensuring a robust product and go-to-market strategy. Narendra was instrumental in the very successful Equation N-2 program and the Midas Service Pack program that have made the Midas and Equation business extremely stable over the years.",
    bioInfoTwo:
      "During his time at Finastra, Narendra has built a strong reputation of being a trusted leader who has been central to many successes on our journey. Narendra is based in London.",
    bioInfoThree: false,
    bioInfoFour: false,
    bioInfoFive: false,
  },
  {
    id: 7,
    name: "Mr. Ahmed Hamdy Bahey El Din",
    position: "Head of Information Technology ",
    additionalPosition: "Incolease",
    img: "7s.png",
    hasBioInfo: true,
    bioInfoOne:
      "Ahmed Hamdy is a results-driven IT professional with extensive experience leading IT departments and delivering innovative solutions. As the IT Head at Incolease, he manages all IT operations, ensuring strategic alignment, process optimization, and efficient resource management. With over 18 years of experience, his career highlights include managing complex projects at EFG-HERMES, Corplease, and Atos, focusing on business process automation and efficiency improvements. Ahmed's expertise includes ERP systems, leasing, factoring, and securitization, and he holds certifications in CBAP® and ITIL® Foundation.",
    bioInfoTwo: false,
    bioInfoThree: false,
    bioInfoFour: false,
    bioInfoFive: false,
  },
  {
    id: 8,
    name: "Mr. Emad Shawky Habib Hanna",
    position: "Chief Data and Analytics Officer ",
    additionalPosition: "Banque Misr",
    img: "8s.png",
    hasBioInfo: false,
  },
  {
    id: 9,
    name: "Ms. Heba Yehi",
    position: "Head of Digital Products",
    additionalPosition: "Arab African International Bank",
    img: "9s.jpg",
    hasBioInfo: false,
  },
  {
    id: 10,
    name: "Mr. Hamid Nirouzad",
    position: "Managing Director - Africa",
    additionalPosition: "Finastra Universal",
    img: "10s.jpg",
    hasBioInfo: true,
    bioInfoOne:
      "Hamid Nirouzad is a seasoned professional in the fintech industry. He began his career at National Westminster Bank in the UK before joining Midas-Kapiti in 1994. Throughout his tenure at Finastra, Hamid has played a pivotal role in various business aspects across Europe and the MEA regions. With a robust background in both retail and corporate banking, he possesses a comprehensive understanding of the banking sector.",
    bioInfoTwo: false,
    bioInfoThree: false,
    bioInfoFour: false,
    bioInfoFive: false,
  },
  {
    id: 11,
    name: "Mr. Rudy Kawmi",
    position: "Managing Director - Middle East, Africa & Asia-Pacific",
    additionalPosition: "Finastra Universal Banking",
    img: "11s.jpg",
    hasBioInfo: true,
    bioInfoOne:
      "Rudy Kawmi oversees the Retail Banking business across the Middle East, Africa, and Asia-Pacific regions at Finastra. With a career dedicated to financial technology, Rudy has collaborated with banks on numerous digital transformation initiatives. As a proponent of innovative business models that promote financial inclusion, he is passionate about establishing fintech partnerships across these regions to drive innovation and expand access to next-generation banking systems.",
    bioInfoTwo: false,
    bioInfoThree: false,
    bioInfoFour: false,
    bioInfoFive: false,
  },
  {
    id: 12,
    name: "Mr. Matthew Hughes",
    position: "Head of FS&I, International Markets",
    additionalPosition: "Atos",
    img: "12s.jpg",
    hasBioInfo: true,
    bioInfoOne:
      "Matthew Hughes is a seasoned professional with over 25 years of experience in the financial services and insurance sectors. Matthew worked for 17 years at Royal Bank of Scotland in various leadership roles, including Country Head of Operations in China, Head of Retail and Commercial Banking in China, Head of Core Banking Operations for England and Wales, and Head of Consumer Finance for Spain and Portugal.",
    bioInfoTwo:
      "At Atos, he serves as Global Client Executive Partner and Head of the Financial Services & Insurance Sector for International Markets (covering Middle East, APAC, Latin America, Switzerland, Iberia and South East Europe). In this role, Matthew leads strategic client engagement and initiatives around Platform and/or Mainframe Modernisation and Migrations, Cloud, Cybersecurity and the full range of end-to-end managed services that Atos offers, as well as the management of key client relationships, leveraging his extensive industry expertise to drive business growth and innovation.",
    bioInfoThree:
      "In 2022, Atos in Asia Pacific announced Matthew's appointment as the Global Client Executive Partner for our largest customer in APAC (Global Bank), underscoring his pivotal role in strengthening the partnership between Atos and the bank.",
    bioInfoFour: "Matthew is based in Singapore and is bilingual in Spanish.",
    bioInfoFive: false,
  },
  {
    id: 13,
    name: "Mr. Daragh O'Byrne",
    position: "Senior Director, Marketing, Universal Banking,",
    additionalPosition: "Finastra",
    img: "13s.jpeg",
    hasBioInfo: true,
    bioInfoOne:
      "Daragh leads the Finastra Universal Banking marketing team. For more than 25 years he has worked in the Financial Services application software market, focusing on ensuring that software provides tangible business benefits for customers, and that those business benefits are explained in a clear, concise and compelling way via an integrated set of creative marketing activities that generate results.",
    bioInfoTwo:
      "He combines his background in technology with a decade helping banks all over the world translate their vision into implemented reality to position sophisticated banking platforms in terms of the business problems they solve and the opportunities they enable.",
    bioInfoThree:
      "Daragh focuses on turning strategy into action and turning action into results in a co-ordinated way. A passionate believer in technology's power to transform and enrich, he believes in explaining its benefits in easy to an understand, educational and entertaining way.",
    bioInfoFour: false,
    bioInfoFive: false,
  },
  {
    id: 14,
    name: "Dr. Ismail Al",
    position: "Co-Founder and CEO of CARITec",
    additionalPosition: false,
    img: "14s.jpg",
    hasBioInfo: true,
    bioInfoOne:
      "Dr. Ismail Ali is the Co-Founder and CEO of CARITech, a digital banking solutions provider supporting financial institutions across the Middle East and Africa. With over 25 years of experience in financial technology, Dr. Ali has led core banking modernization programs for both Islamic and conventional banks—helping them overcome legacy challenges and respond to dynamic market demands.",
    bioInfoTwo:
      "He has held senior positions with leading global technology firms and now leads CARITech’s mission to eliminate technology barriers through structured, standards-driven delivery. CARITech operates in the Americas and is expanding rapidly across MEA, delivering high-quality transformation services using CMMI Level 3-compliant methodologies",
    bioInfoThree:
      "Dr. Ali holds a Doctorate in Business Management, an MBA, and is an alumnus of Harvard Business School. He regularly collaborates with banks, regulators, and fintech leaders to enable inclusive, future-ready financial ecosystems.",
    bioInfoFour: false,
    bioInfoFive: false,
  },
  {
    id: 15,
    name: "Ms. Riham Muhammad",
    position: "Corporate CEX Senior Analyst",
    additionalPosition: "FABMISR",
    img: "15s.png",
    hasBioInfo: false,
  },
];

const useMotionScrollAnimation = (threshold = 0.5, direction = "down") => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (direction == "down") {
      controls.start({
        opacity: inView ? 1 : 0,
        y: inView ? 0 : 40,
        transition: {
          duration: inView ? 0.6 : 0.3,
          ease: inView ? "easeOut" : "easeIn",
        },
      });
    } else {
      controls.start({
        opacity: inView ? 1 : 0,
        x: inView ? 0 : -100,
        transition: {
          duration: inView ? 0.6 : 0.3,
          ease: inView ? "easeOut" : "easeIn",
        },
      });
    }
  }, [inView, controls]);

  return { ref, controls };
};

const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 80 : direction === "down" ? -80 : 0,
      opacity: 0,
      x: direction === "left" ? 80 : direction === "right" ? -80 : 0,
      transition: {
        type: "tween",
        duration: 1.5,
        delay: delay,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 1.4,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

export { speakersInfo, useMotionScrollAnimation, fadeIn };
