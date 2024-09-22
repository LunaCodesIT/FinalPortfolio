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
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-2 text-2xl sm:text-3xl lg:text-6xl lg:leading-normal font-semibold">
            <span className="text-primary">Welcome, I&apos;m </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Luzuko",
                1000,
                "an IT Professional",
                1000,
                "a Web Developer",
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
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Basically, I take your ideas from concept stages to finished digital
            products.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full mr-4 bg-primary hover:bg-slate-200 text-white"
            >
              <span className="block bg-[#000000] hover:bg-primary rounded-full px-5 py-2">
                Hire Me
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[300px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={800}
              height={800}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
