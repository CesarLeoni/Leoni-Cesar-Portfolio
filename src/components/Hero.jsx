import { useEffect, useRef } from "react";
import { PROFILE } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import cesar from "/assets/cesar.webp";
import gsap from "gsap";

const Hero = () => {

    const heroRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: {ease: "power1.out", duration: 0.8},
            });


            tl.from(".hero-title", {
                opacity: 0,
                y: -50,
                scale: 0.90,
                duration: 0.8,
                // stagger: 0.15,
        })

            .from(
                ".hero-subheading",
                {
                    opacity: 0,
                    y: -50,
                    scale: 0.90,
                    duration: 0.8,
                },
                "-=0.8"
            )
            .from(
                ".hero-text",{
                    opacity: 0,
                    // y: 30,
                    scale: 0.9,
                    duration: 0.8,
                },
                "-=0.4"
            )
            .from(".hero-btn", {
                opacity: 0,
                scale: 0.9,
                duration: 0.8,
            }, "-=0.6")
            .from(".hero-img", {
                opacity: 0,
                y:150,
                scale: 0.95,
                duration: 1,
                ease: "elastic.out(0.35,0.25)",
            }, "-=0.4");

            }, heroRef)

            return() => ctx.revert()
        },[]);



    return (
        <section
            ref={heroRef}
            className="flex min-h-screen flex-col items-center justify-center gap-2 lg:gap-1.5 md:pt-[4rem] pt-[4rem] lg:pt-[0rem]" >
            <div className="mt-2 lg:mt-20">
                <h1 className="hero-title text-4xl uppercase lg:text-7xl">{PROFILE.name}</h1>
                <h2 className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 
                bg-clip-text text-center text-2xl tracking-tighter text-transparent">
                    {PROFILE.role}
                </h2>
            </div>
            <p className="hero-text max-w-2xl p-2 text-center text-xl tracking-tighter lg:text-2xl">
                {PROFILE.subheading}
            </p>
            <a
                href="/CV Leoni Cesar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download="Leoni_Cesar_CV.pdf"
                className="hero-btn mb-6 flex gap-1 rounded-full border-2 border-pink-200/80 px-3 py-2 tracking-tighter"
            >
                <span>Download Resume</span>
                <RiArrowRightUpLine />
            </a>
            <img
                src={cesar}
                alt={PROFILE.name}
                width={400}
                height={400}
                className="hero-img rounded-3xl border border-purple-300/20 p-1"
            />
        </section>

        
    );
};

export default Hero;
