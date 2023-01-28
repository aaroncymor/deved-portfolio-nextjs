import { useEffect, useRef  } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

import {
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";

import { BsFillSunFill } from "react-icons/bs";


const Footer = ({ darkMode, setDarkMode }) => {

  // https://greensock.com/forums/topic/21217-stagger-animation-with-react-functional-components/
  const footerRef = useRef();
  const tl = useRef();
  const q = gsap.utils.selector(footerRef);

  useEffect(() => {

    const ctx = gsap.context(() => {
      tl.current && tl.current.progress(0).kill();
      tl.current = gsap.timeline()
        .to(q(".footer__item--left"), {
          delay: 6.1,
          display: 'block',
        })
        .to(q(".footer__social"), {
          delay: 0.5,
          scale: 1,
          stagger: {
            each: 0.4,
            from: 0.75,
          }
      });

      gsap.to(q(".footer__item--right"), {
        delay: 6.1,
        display: 'block',
      });

    }, footerRef);

    return () => {
      ctx.revert();
    };

  }, []);

  return (
    <footer className="relative z-[1]" ref={footerRef}>
      <ul className="footer__item--left fixed bottom-0 left-[3.5%] md:left-[5%] after:absolute after:block after:w-1 after:h-0 after:bg-white after:bottom-0 after:left-[46.5%] hidden opacity-0 animate-fade-in-up">
        <li className="mb-4 md:mb-6 ">
          <a href="#" target="_blank">
            <AiFillLinkedin
              className="footer__social text-3xl text-gray-600 lg:text-5xl dark:text-white scale-75"
            />
          </a>
        </li>
        <li className="mb-4 md:mb-6">
          <a href="#" target="_blank">
            <AiFillGithub
              className="footer__social text-3xl text-gray-600 lg:text-5xl dark:text-white scale-75"
            />
          </a>
        </li>
      </ul>

      <nav className="footer__item--mid">
        <ul>

        </ul>
      </nav>

      <ul className="footer__item--right fixed bottom-0 right-[3.5%] md:right-[5%] hidden opacity-0 animate-fade-in-up">
        <li>
          <BsFillSunFill
            className="cursor-pointer text-3xl lg:text-5xl dark:text-white mb-8 md:mb-12 scale-75 hover:animate-rotating hover:scale-100"
            onClick={() => {setDarkMode(!darkMode)}}
          />
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
