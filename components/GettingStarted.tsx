import React from "react";
import Section from "./Section";
import Image from "next/image";
import GettingStartedImage from "../public/getting-started.svg";

const GettingStarted = () => {
  return (
    <div className=" px-4 p-16 flex justify-center">
      <div className="flex flex-col md:grid md:grid-cols-2 px-8 items-center container">
        <div className="flex flex-col justify-center h-full">
          <h1 className="text-3xl  font-bold uppercase pb-4">
            Getting Started with Inkam
          </h1>
          <p className="text-sm mb-8 mr-0 md:mb-0 md:mr-8">
            Join over 14,000 Inkam agents across Bangladesh and start earning
            commissions in just 5 minutes. Simply download our app, register for
            free, and share digital product links. For every resulting purchase
            made through your link, withdraw attractive sales commissions to
            your mobile wallet or bank account every Sunday. With zero
            investment and absolute flexibility, Inkam empowers you to embark on
            your entrepreneurial journey right away. Sign up now to become a
            digital sales agent in just 5 minutes!
          </p>
        </div>
        <div className="h-60">
          <div className="w-60 h-60 relative left-1/2 -translate-x-1/2">
            <Image src={GettingStartedImage} alt="getting started image" fill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStarted;
