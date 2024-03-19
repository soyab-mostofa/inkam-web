import CarouselEl from "@/components/Carousel";
import ImageBox from "@/components/ImageBox";
import PhotoGrid from "@/components/PhotoGrid";

import Image from "next/image";
import React from "react";

const aboutContent = [
  "Inkam, which launched in 2021, has swiftly become an established name in Bangladesh’s startup scene. it is the nation’s first countrywide end-to-end digital distribution network, with over 16,000 affiliates covering 99% of the country.",
  "Inkam’s core aim is to simplify digital product distribution financial inclusion and digital literacy, which aligns with the increasing significance of technology in the contemporary world. As a digital product distribution platform, the firm connects customers to a wide variety of digital goods and services.",
  "Our founders envisioned a platform connecting individuals seeking income with businesses wanting digital reach. We set out to build an ecosystem facilitating this exchange.",
  "Leveraging the rapid digitalization across Bangladesh, we onboarded youth, homemakers, students, and unemployed individuals as digital sales agents. With just a smartphone and internet, anyone could become an Inkam agent.",
  "We empower agents to earn incomes while promoting digital adoption. Moving forward, we aim to enable businesses to scale through digital channels, expand our catalog, and nurture an entrepreneurial mindset.",
];

const page = () => {
  return (
    <div className="container  mx-auto px-4">
      <div className="bg-gradient-to-br from-[#00498A] to-[#74ABDC] rounded-2xl overflow-hidden mb-8">
        <div className="flex max-w-7xl px-8 flex-col md:flex-row  justify-end  mx-auto items-center ">
          <h1 className="text-white md:mr-8 font-bold text-3xl py-4 ml-4 md:basis-1/2">
            About Us
          </h1>
          <div className="flex items-center justify-center w-full">
            <ImageBox className="hidden md:block" />
            <div className="md:hidden flex flex-wrap justify-center pb-4">
              <Image
                src="/inkam-leaders.png"
                width={350}
                height={400}
                alt="about leaders"
              />
              <Image
                src="/about-2.jpeg"
                width={350}
                height={400}
                alt="about leaders"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="space-y-8 max-w-7xl mx-auto md:basis-2/5">
          {aboutContent.map((item) => (
            <p className="text-sm">{item}</p>
          ))}
        </div>
        <div className="mt-8 md:mt-0 w-full max-w-7xl mx-auto md:basis-3/5">
          <CarouselEl className="sm:hidden" />
          <PhotoGrid />
        </div>
      </div>
    </div>
  );
};

export default page;
