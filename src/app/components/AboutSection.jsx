"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li className="text-yellow">JavaScript</li>
        <li className="text-blue">TypeScript</li>
        <li className="text-aqua">React.js</li>
        <li className="text-reddy">Next.js</li>
        <li className="text-orange">Firebase</li>
        <li className="text-green">Laravel</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li className="text-purple">Adobe After Effects</li>
        <li className="text-blue">Adobe Photoshop</li>
        <li className="text-amaranth">Adobe Premiere Pro</li>
        <li className="text-orange">Adobe Illustrator</li>
        <li className="text-rosepink">Adobe InDesign</li>
        <li className="text-green">Figma</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li className="text-blue">QCTO: IT Systems Development</li>
        <li className="text-green">AWS Cloud Practitioner</li>
        <li className="text-primary-600">ACP in Visual Design</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        
          <p className="text-base lg:text-lg">
         With 5 years of experience as a self-taught frontend web developer and graphic designer, 
         I have honed my skills in creating visually stunning and highly functional websites. 
         My passion for design and coding drives me to continuously learn and push the boundaries of creativity and technology. 
         Whether it's crafting sleek user interfaces or bringing ideas to life through innovative web solutions, 
         I am dedicated to delivering exceptional results that exceed expectations.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Web{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Graphics{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
