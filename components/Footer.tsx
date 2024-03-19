import { Facebook, Linkedin, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const footerLinks = [
  { text: "Terms & Conditions", link: "/" },
  { text: "Refund Policy", link: "/refund" },
  { text: "Privacy Policy", link: "/privacy" },
];

const Footer = () => {
  return (
    <div className="py-6 bg-gradient-to-br from-[#00498A] to-[#74ABDC] mt-12">
      <div className="max-w-7xl px-4  md:flex justify-between text-white mx-auto">
        <div className="md:basis-2/5 flex flex-col justify-between">
          <div className="pb-3">
            <Image
              src="/inkam-logo.png"
              alt="footer logo"
              height={100}
              width={100}
            />
          </div>
          <ul className="flex flex-col space-y-1">
            {footerLinks.map((link) => (
              <Link href={link.link} className="text-sm">
                {link.text}
              </Link>
            ))}
          </ul>

          <div className="text-sm py-3 md:py-0 md:pt-5">
            <p>
              Trade License No: <span>TRAD/DNCC/007823/2923</span>
            </p>
            <p>
              TIN: <span>155766503785</span>
            </p>
          </div>
        </div>

        <div className="md:basis-3/5 flex flex-col justify-between">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-bold uppercase">Contact us</p>
            <p className="text-sm">
              H: 654, Road 9, Avenue 4 <br /> Mirpur DOHS, Dhaka 1216.
            </p>
            <a className="text-sm" href="tel:+0001896444201">
              <span className="font-bold">Phone:</span> 01896444201
            </a>
            <a className="text-sm " href="mailto:support@inkam.app">
              <span className="font-bold">Email:</span> support@inkam.app
            </a>
          </div>

          <div className="flex gap-2 items-center mt-3">
            <p className="text-sm font-bold">Follow us</p>

            <a href="http://">
              <Facebook />
            </a>
            <a href="http://">
              <Linkedin />
            </a>
            <a href="http://">
              <Youtube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
