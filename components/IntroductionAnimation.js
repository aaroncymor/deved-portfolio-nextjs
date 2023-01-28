import { useEffect, useRef } from "react";
import gsap from "gsap";

const IntroductionAnimation = ({ introAnimationRef, introDone, setIntroDone }) => {

  const introText1Ref = useRef();
  const introText2Ref = useRef();
  const introBlockLeftRef = useRef();
  const introBlockRightRef = useRef();
  const tl = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      tl.current && tl.current.progress(0).kill();
      tl.current = gsap.timeline()
        .to(introText1Ref.current, { display: 'block', duration: 2 })
        .to(introText1Ref.current, { display: 'none', duration: 0.2 })
        .to(introText2Ref.current, { display: 'block', duration: 2 })
        .to(introText2Ref.current, { display: 'none', duration: 0.2 });

      gsap.to(introBlockLeftRef.current, { left: '-50%', delay: 4.5, duration: 2.5 });
      gsap.to(introBlockRightRef.current, {
        right: '-50%',
        delay: 4.5,
        duration: 2.5,
        onComplete() {
          setIntroDone(true);
        }
      });
    }, introAnimationRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <>
      <h1
        className="intro-text-1 fixed w-[10ch] z-[2] text-black text-2xl lg:text-6xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-blinking-caret animate-typing-intro-1 overflow-hidden border-r-2 border-r-black border-solid whitespace-nowrap mx-auto my-0 hidden"
        ref={introText1Ref}
      >
        Hi! I am Aa.
      </h1>
      <h1
        className="intro-text-2 fixed w-[21ch] z-[2] text-black text-2xl lg:text-6xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-typing-intro-2 overflow-hidden border-r-2 border-r-neon-green border-solid whitespace-nowrap mx-auto my-0 hidden"
        ref={introText2Ref}
      >
        I'm a Fullstack Developer.
      </h1>
      <div
        className="intro-block--left fixed z-[1] bg-white h-full w-1/2 top-0 overflow-hidden left-0"
        ref={introBlockLeftRef}
      ></div>
      <div
        className="intro-block--right fixed z-[1] bg-white h-full w-1/2 top-0 overflow-hidden right-0"
        ref={introBlockRightRef}
      ></div>
    </>
  );
};

export default IntroductionAnimation;
