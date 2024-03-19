"use client";
import React from "react";
import Section from "./Section";
import Image from "next/image";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

const HeroSection = () => {
  return (
    <Section padding>
      <div className="md:grid relative md:grid-cols-12 md:h-[500px] content-center px-6">
        <div className="md:col-span-6 py-6 relative z-10 flex flex-col justify-center h-full text-neutral-100">
          <h1 className="text-3xl font-bold uppercase max-w-44 md:max-w-3xl sm:max-w-lg sm:h-24 md:h-auto h-52">
            <Typewriter
              words={["Distribute digital products and earn sales commission."]}
              loop={5}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={1}
              delaySpeed={1000}
            />
          </h1>
          <p className="my-6 text-base">
            inkam is nationwide digital distribution network empowering over
            15000+ agents by providing them with flexible earning opportunities.
          </p>
          <Link
            href="https://play.google.com/store/apps/details?id=app.inkam.agent.twa"
            className=" relative h-10 w-40 -left-2  rounded-2xl"
          >
            <Image
              src="/play-logo.png"
              className="absolute inset-0 object-cover h-full"
              alt="google play image"
              fill
            />
          </Link>
          <p className="mt-2 uppercase font-bold relative text-sm">
            No payment required
          </p>
        </div>
        <div className="md:col-span-6 relative h-[300px] z-10 mt-6">
          <Image
            className="h-full w-full absolute object-contain"
            src="/hero-image.png"
            alt="hero image"
            width={1200}
            height={720}
          />
        </div>
        <Image
          className="absolute h-full object-cover top-0 left-0 rounded-2xl w-full"
          src="/hero-bg.svg"
          alt="hero bg"
          width={1080}
          height={720}
        />
      </div>
    </Section>
  );
};

export default HeroSection;
