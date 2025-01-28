"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left sm:place-self-start flex flex-col sm:block items-center"
        >
          <h1 className="text-white mb-2 text-2xl sm:text-3xl lg:text-6xl lg:leading-normal font-semibold">
            <span className="text-primary">Welcome, I&apos;m </span>
            <br />
            <TypeAnimation
              sequence={[
                "Luzuko",
                1000,
                "a Developer",
                1000,
                "a Graphic Designer",
                1000,
                "a Videographer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <div className="mt-4 sm:mt-0">
            <Link
              href="/#contact"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-primary hover:bg-slate-200 text-white"
            >
              <span className="block bg-[#000000] hover:bg-primary rounded-full px-5 py-2">
                Hire Me
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
