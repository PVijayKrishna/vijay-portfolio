import React from 'react'
import { motion } from 'framer-motion'
import localImage from '../assets/Portfolioselfie.png' 

export default function About() {
   
  
   const skills = ["Python","JAVA","SQL","JavaScript","GenAi","SpringBoot","CI/CD","React"];

  return (
   <section className='xl:flex-row flex-col-reverse relative overflow-hidden w-screen min-h-screen bg-gradient-to-b from-black to-purple-900 flex'>
        
        {/* --- LEFT SIDE: TEXT CONTENT --- */}
        <div className='w-full xl:w-3/5 flex flex-col justify-center py-10 xl:py-0 px-4 xl:px-0 z-10'>
            
            {/* Title */}
            <motion.div
                initial={{opacity:0, scaleX:0}}
                animate={{opacity:1, scaleX:1}}
                transition={{type:"spring", damping:25, stiffness:100, delay:0.2, duration:1.5}}
                className='container mx-auto flex justify-center items-center mb-10'>
                <h1 className='text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500 hover:text-white transition-colors duration-300'>
                    About Me
                </h1>
            </motion.div>

            {/* Introduction Header */}
            <motion.div 
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{type:"spring", damping:30, stiffness:300, delay:0.4}}
                className='flex justify-center xl:justify-start xl:px-20 mb-4'>
                <h2 className='text-4xl md:text-5xl font-bold text-gray-100 drop-shadow-lg'>
                    Hi! This is <span className="text-violet-400">Vijay</span>,
                </h2>
            </motion.div>

            {/* Bio Paragraph */}
            <motion.div
                initial={{opacity:0, y:20}}
                animate={{opacity:1, y:0}}
                transition={{type:"spring", damping:30, stiffness:300, delay:0.6}}
                className='flex justify-center xl:justify-start xl:px-20 mb-12'>
                <p className='text-lg md:text-xl md:max-w-3xl text-gray-300 leading-relaxed text-center xl:text-left'>
                    I am a Computer Science student at <span className="text-violet-300 font-semibold">KL University</span> passionate about engineering scalable solutions and intelligent systems.
                    My technical expertise spans full-stack development using <span className="text-white">Java, Spring Boot, and React</span>, integrated with modern
                    cloud infrastructure like Oracle and Azure. Beyond web applications, I actively explore Generative AI and Machine Learning,
                    having built RAG chatbots and interactive ML dashboards.      
                </p>
            </motion.div>

            {/* Skills Header */}
            <motion.div
                initial={{opacity:0, x:-50}}
                animate={{opacity:1, x:0}}
                transition={{type:"spring", stiffness:200, damping:50, delay:0.8}}
                className='flex justify-center mb-8'>
                <h2 className='text-4xl font-bold text-white border-b-4 border-violet-600 pb-2 px-4 shadow-lg shadow-violet-900/20'>
                    Skills
                </h2>
            </motion.div>

            {/* Skills Grid */}
            <motion.div 
                initial={{opacity:0, scale:0.9}}
                animate={{opacity:1, scale:1}}
                transition={{type:"spring", stiffness:300, damping:30, delay:1.0}}
                className='px-4 xl:px-20 flex justify-center xl:justify-start'>
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl'>
                    {skills.map((skill, i) => (
                        <div key={i} className='group relative'>
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-200"></div>
                            <div className='relative h-14 bg-black/50 backdrop-blur-xl border border-white/10 rounded-xl flex items-center justify-center hover:bg-white/10 transition-all duration-300 cursor-default'>
                                <span className='text-violet-100 font-semibold tracking-wide group-hover:text-white transition-colors'>{skill}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>

        {/* --- RIGHT SIDE: IMAGE SECTION --- */}
        <motion.div 
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", damping: 30, stiffness: 100, delay: 1.2, duration: 1.5 }}
            className='w-full xl:w-2/5 flex items-center justify-center p-10 xl:p-0 relative z-30'
        >
            {/* Floating Animation Wrapper */}
            <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className='relative w-full max-w-[320px] xl:max-w-[420px] aspect-square'
            >
                {/* 1. The Glowing Aura */}
                <div className='absolute -inset-4 bg-gradient-to-tr from-violet-600 via-purple-600 to-blue-600 rounded-[3rem] blur-2xl opacity-60 animate-pulse'></div>
                
                {/* 2. The Rotating Border Effect */}
                <div className='absolute -inset-[2px] bg-gradient-to-r from-violet-400 via-fuchsia-500 to-indigo-500 rounded-[3rem] z-0'></div>

                {/* 3. The Main Image Container (The Cube/Squircle) */}
                <div className='relative w-full h-full rounded-[3rem] overflow-hidden z-10 bg-gray-900 border-4 border-black/20 shadow-2xl shadow-violet-900/50 group'>
                   <img 
                        src={localImage} 
                        alt="Vijay Portfolio" 
                        className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                   />
                 
                </div>

            </motion.div>
        </motion.div>

   </section>
  )
}