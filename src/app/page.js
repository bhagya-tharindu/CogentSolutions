"use client";
import dynamic from "next/dynamic";

import AboutFinastra from "./components/AboutFinastra";
import Agenda from "./components/Agenda";
import EventsOverView from "./components/EventsOverView";
import Hero from "./components/Hero";
import OurSpeakers from "./components/OurSpeakers";

const RegisterForm = dynamic(() => import("./components/RegisterForm"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Hero />
      <EventsOverView />
      <OurSpeakers />
      <Agenda />
      <AboutFinastra />
      <RegisterForm />
    </div>
  );
}
