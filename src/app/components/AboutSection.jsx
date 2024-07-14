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
          In 2020, many people had to start new things to cope with the Covid-19 lock-down restrictions.
          That new thing for me was coding. <br /> <br />My stack started with <span className="text-orange">HTML</span>, <span className="text-blue">CSS</span>, and vanilla <span className="text-yellow">JavaScript</span> to create websites.
          However, I disliked the use of stock images/videos and due to copyright restrictions, I had to create my own images/videos
          using Adobe <span className="text-blue">Photoshop</span>, <span className="text-purple">After Effects</span>, <span className="text-amaranth">Premiere Pro</span>, <span className="text-orange">Illustrator</span>, <span className="text-rosepink">InDesign</span>, <span className="text-green">Figma</span> and more. A year later, vanilla JavaScript started
          to bore me, therefore I learnt <span className="text-aqua">React</span> to solidify my Frontend skills and I&apos;ve been gladly using the framework/library for just over 3 years now.
          Furthermore, <span className="text-aqua">React</span> also led me to <span className="text-reddy">Next.js</span> and the importance of <span className="text-blue">TypeScript</span> for production level Frontend development. 
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
