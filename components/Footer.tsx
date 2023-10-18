import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Solutions } from "@/constants";

const Footer = () => {
  return (
    <section className="flex items-start justify-around w-full py-4 mt-10 mb-5 text-white ">
      <Link href="/" className="grid place-items-center">
        <Image
          src="/images/logo.jpg"
          alt="Hictros Logo"
          width={150}
          height={50}
        />
      </Link>
      <div className="flex flex-col">
        <div className="mb-2 text-2xl">Hictros</div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className="flex flex-col">
        <Link href="/" className="mb-2 text-2xl">
          Solutions
        </Link>
        {Solutions.map((item) => (
          <Link key={item.title} href={item.href}>
            {item.title}
          </Link>
        ))}
      </div>
      <div className="flex flex-col">
        <div className="mb-1 text-2xl">Office Location:</div>
        <div>Ejipura, Bengaluru</div>
        <div>560047, India</div>
      </div>
    </section>
  );
};

export const Copyright = () => {
  return (
    <div className="w-full p-5 text-center bg-black ">
      Copyright &copy; 2020 Hictros Pvt Ltd. All Rights Reserved
    </div>
  );
};

export default Footer;
