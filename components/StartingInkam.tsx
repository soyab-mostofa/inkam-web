import React from "react";
import SignUpImage from "../public/signup.svg";
import LoginImage from "../public/login.svg";
import FindImage from "../public/find.svg";
import DistributeImage from "../public/distribute.svg";
import EarningImage from "../public/earning.svg";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
const items = [
  {
    id: 1,
    title: "Sign Up",
    icon: SignUpImage,
  },
  {
    id: 2,
    title: "Login",
    icon: LoginImage,
  },
  {
    id: 3,
    title: "Find products",
    icon: FindImage,
  },
  {
    id: 4,
    title: "Distribute products",
    icon: DistributeImage,
  },
  {
    id: 5,
    title: "Earn commissions",
    icon: EarningImage,
  },
];
const StartingInkam = () => {
  return (
    <div className="py-6 container">
      <h2 className="text-3xl md:text-center  font-bold uppercase pb-4 ">
        Start your inkam in simple steps
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((item) => (
          <Card>
            <CardContent className="p-8 flex items-center justify-between">
              <p className="relative text-base font-semibold z-10  ">
                {item.title}
              </p>
              <div className="relative w-24  aspect-square">
                <Image src={item.icon} alt="signup image" fill />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default StartingInkam;
