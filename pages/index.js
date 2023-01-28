import { gsap } from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { useState, useRef, useEffect } from "react";
import { useLocomotiveScroll } from "react-locomotive-scroll";
import { useThemeContext } from "../context/theme";

import IntroductionAnimation from "../components/IntroductionAnimation";
import Skills from "../components/Skills";

import Image from "next/image";

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

const About = () => {
  return (
    <div className="about h-screen w-full max-w-[1440px] mx-auto flex flex-row items-center justify-between font-mono">
      <div className="about__intro-text ml-8 lg:ml-16">
        <p className="about__intro typing--1st">Hi! I am Aa</p>
        <p className="about__intro typing--2nd">Nice to meet you!</p>
        <p className="about__intro typing--3rd">I'm a Fullstack Developer.</p>
      </div>
    </div>
  );
}

const ContactMe = () => {
    <div>
      Contact Me
    </div>
}

const Home = () => {

  const { introLoading } = useThemeContext();
  const [introDone, setIntroDone] = introLoading;

  const introAnimationRef = useRef();

  const { scroll } = useLocomotiveScroll();
  const homeRef = useRef(null);
  const aboutRef = useRef(null);

  const tl = useRef();
  const q = gsap.utils.selector(homeRef);

  setIntroDone(true);

  useEffect(() => {
    const ctx = gsap.context(() => {

      tl.current && tl.current.progress(0).kill();

      const typing1 = q(".typing--1st");
      const typing2 = q(".typing--2nd");
      const typing3 = q(".typing--3rd");

      tl.current = gsap.timeline()
        .to(typing1, {
          display: 'block'
        })
        .to(typing1, {
          delay: 2,
          border: 'none'
        })
        .to(typing2, {
          display: 'block'
        })
        .to(typing2, {
          delay: 2,
          border: 'none'
        })
        .to(typing3, {
          display: 'block'
        })
        .to(typing3, {
          delay: 3,
          border: 'none'
        });

    }, homeRef);

    return () => {
      ctx && ctx.revert();
    };

  }, []);

  return (
    <>
      {!introDone
        ? (<IntroductionAnimation
            introAnimationRef={introAnimationRef}
            introDone={introDone}
            setIntroDone={setIntroDone}
          />)
        : (<></>)
      }
      <section
        data-scroll-section
        className="home bg-white dark:bg-gray-900"
        ref={homeRef}
      >
        <About ref={aboutRef} />
        <Skills />
      </section>
    </>
  );
};

export default Home;
