import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaShareAlt } from 'react-icons/fa'; // Changed to FontAwesome as SIShareAlt doesn't exist
import imageSrc from "../assets/RAG-chatbot.png";

// Note: If you have local images in your src folder, import them like this:
// import project1Img from '../assets/RAG chatbot.png';

export default function Project() {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const titleLineRef = useRef(null);
  const horizontalRef = useRef(null);
  const triggerRef = useRef(null);

  const projectImages = [
    {
      id: 1,
      title: "RAG Chatbot",
      // ideally import this image at the top or put it in the 'public' folder
      imageSrc: "../assets/certi3Oracle.png" 
    },
    {
      id: 2,
      title: "Project Two",
      imageSrc: "/images/project2.jpg"
    },
    {
      id: 3,
      title: "Project Three",
      imageSrc: "/images/project3.jpg"
    }
  ];

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Use gsap.context for proper cleanup in React
    let ctx = gsap.context(() => {
      // 1. Title Animation
      gsap.fromTo(
        titleRef.current,
        {
          y: 100,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 88%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // 2. Line Animation
      gsap.fromTo(
        titleLineRef.current,
        {
          width: "0%",
          opacity: 0
        },
        {
          width: "80%",
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          }
        }
      );

      // 3. Horizontal Scroll Logic (This was missing)
      const slides = gsap.utils.toArray(".panel");
      const amountToScroll = 100 * (slides.length - 1); // Calculate width to move

      gsap.to(slides, {
        xPercent: -amountToScroll, 
        ease: "none",
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (slides.length - 1),
          end: "+=3000", // Controls how long the scroll feels
        }
      });
      
      // Reveal the container (removed opacity-0 handling via CSS to let GSAP handle it if needed, or just kept visible)
      gsap.to(triggerRef.current, { opacity: 1, duration: 0.5 });

    }, sectionRef); // Scope to section

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <section ref={sectionRef} id="horizon-section" className="relative w-full w-screen h-screenmin-h-screen py-20 bg-violet-200 overflow-hidden">
      
      <div className="container mx-auto px-4 mb-16 relative z-10">
        <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-black hover:text-purple-600 mb-4 transition-colors">
          Featured Projects
        </h2>
        <div ref={titleLineRef} className="h-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 mx-auto opacity-0"></div>
      </div>

      {/* Trigger Ref Container */}
      <div ref={triggerRef} className="opacity-0 w-full h-screen">
        
        {/* Horizontal Container: Width = 100% * number of slides */}
        <div ref={horizontalRef} className="horizontal-section flex h-full w-[300%]">
          
          {projectImages.map((pro) => (
            <div key={pro.id} className="panel w-screen h-full relative flex items-center justify-center">
              <div className="relative w-full h-full flex items-center flex-col justify-center sm:p-8 md:p-12">
                <div className="relative flex flex-col p-4 sm:p-8 md:p-12 items-center justify-center max-h-[80vh]">
                  
                  {/* Fixed pro.image to pro.imageSrc */}
                  <img 
                    className="project-image max-w-full max-h-[60vh] rounded-2xl object-cover shadow-2xl" 
                    src={imageSrc} 
                    alt={pro.title} 
                  />

                  <h2 onClick={() => window.open("https://rag-chat-portal.lovable.app/", "_blank")} className="project-title gap-3 flex items-center text-2xl md:text-3xl font-bold text-black mt-6 z-50 whitespace-nowrap hover:text-purple-600 transition-colors duration-300 cursor-pointer">
                    {pro.title} <FaShareAlt />
                  </h2>
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}