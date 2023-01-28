import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { useState, useRef, useEffect } from "react";

import {
  FaAws,
  FaHtml5,
  FaLinux,
  FaPhp,
  FaPython,
  FaReact,
  FaWordpress
} from "react-icons/fa";

import {
  SiCss3,
  SiDjango,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

  const ref = useRef(null);
  const tl = gsap.timeline();
  const q = gsap.utils.selector(ref);

  useEffect(() => {

    const ctx = gsap.context(() => {
      setTimeout(() => {

        gsap.to(q("[class*='skill__item']"), {
          x: 700,
          duration: 3,
          trigger: q("[class*='skill__item']"),
        })

        ScrollTrigger.refresh();
      }, 1000);
      ScrollTrigger.refresh();
    }, ref);

    return () => {
      ctx.revert();
      ScrollTrigger.killAll();
    };

  }, [])

  return (
    <div ref={ref} className="skills h-screen w-full max-w-[1440px] mx-auto">
      <div className="skills__wrapper mt-10">
        <h2 className="text-center text-white text-4xl">Web Development</h2>
        <div className="skills__group mt-8 grid grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          <div className="skill__item dark:text-white text-6xl">
            <FaHtml5 />
          </div>
          <div className="skills__item dark:text-white text-6xl">
            <SiCss3 />
          </div>
          <div className="skills__item dark:text-white text-6xl">
            <SiJavascript />
          </div>
        </div>
      </div>
      <div className="skills__wrapper mt-10">
        <h2 className="text-center text-white text-4xl">Backend</h2>
        <div className="skills__group mt-8 grid grid-cols-2 md:grid-cols-3 gap-10 place-items-center">
          <div className="skills__item dark:text-white text-6xl">
            <FaPython />
          </div>
          <div className="skills__item dark:text-white text-6xl">
            <FaPhp />
          </div>
          <div className="skills__item dark:text-white text-6xl">
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
