"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  console.log(pathname);
  return (
    <div className="flex py-4 fixed top-0  left-0  w-full justify-between items-center px-6 mx-auto z-50 bg-gray-50/40 backdrop-blur-md">
      <Link href="/">
        <Image
          src="/inkam-logo-s.png"
          alt="logo"
          width={50}
          height={50}
          className=""
        />
      </Link>

      <div className="hidden md:flex ">
        <ul className="flex space-x-4 font-medium text-sm items-start ">
          {["home", "about", "contact"].map((item) => (
            <li>
              <Link
                className="hover:text-blue-700 uppercase"
                href={`/${item === "home" ? "/" : item}`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <Button variant={"default"} className="hidden md:block">
        <Link href="https://agent.inkam.app/#/login">Sign Up</Link>
      </Button>

      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <MenuIcon />
          </SheetTrigger>
          <SheetContent>
            <ul className="mt-20 space-y-4">
              {["home", "about", "contact"].map((item) => (
                <li>
                  <Link
                    className="hover:text-blue-700 uppercase mt-20 px-2 text-lg"
                    href={`/${item === "home" ? "" : item} `}
                  >
                    {item}
                  </Link>
                </li>
              ))}
              <Button variant={"default"} className=" w-full mt-20">
                <Link href="https://agent.inkam.app/#/login">Sign Up</Link>
              </Button>
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};

export default NavBar;
