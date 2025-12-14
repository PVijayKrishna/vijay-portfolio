import React from 'react';
import { motion } from 'framer-motion';
import { Download, GraduationCap, Briefcase, Code } from 'lucide-react'; 
import profileImg from '../assets/Portfolioselfie.png';
import resumePdf from '../assets/Resume.pdf'; 

export default function Resume() {
  

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="w-screen min-h-screen bg-gradient-to-b to-black from-purple-700 text-white py-20 overflow-hidden relative">
      
  

      <div className="container mx-auto px-6 z-10 relative h-full flex flex-col lg:flex-row gap-12 items-center lg:items-start">
        
        {/* --- LEFT SIDE: PROFILE & DOWNLOAD --- */}
        <div className="w-full lg:w-1/3 flex flex-col items-center sticky top-20">
            
            {/* Pulsing Photo Container */}
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative mb-8"
            >
                {/* The Pulse Animation Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-violet-500 opacity-50"
                  animate={{
                    scale: [1, 1.5],
                    opacity: [0.5, 0],
                  }}
                  transition={{
                    duration: 2,
                    ease: "easeOut",
                    repeat: Infinity,
                  }}
                />
                
                {/* The Image Itself */}
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-violet-400/50 shadow-2xl relative z-10 bg-black">
                  <img 
                    src={profileImg} 
                    alt="Vijay" 
                    className="w-full h-full object-cover"
                  />
                </div>
            </motion.div>

            {/* Name & Title */}
            <motion.div 
              initial="hidden" animate="visible" variants={fadeIn} transition={{ delay: 0.3 }}
              className="text-center mb-8"
            >
                <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-pink-200 mb-2">Vijay</h2>
                <p className="text-violet-300 text-lg font-medium">Full Stack Developer & AI Enthusiast</p>
            </motion.div>

            {/* Download Button */}
            <motion.a
              href={resumePdf}
              download="Vijay_Resume.pdf"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgb(139, 92, 246)" }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 rounded-full font-bold text-lg shadow-lg shadow-purple-500/30 border border-white/10"
            >
              <Download className="group-hover:animate-bounce" />
              <span>Download CV</span>
            </motion.a>
        </div>


        {/* --- RIGHT SIDE: RESUME CONTENT --- */}
        <div className="w-full lg:w-2/3 flex flex-col gap-8">
            
            {/* Education Section */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-violet-500/30 transition-colors"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-violet-500/20 rounded-lg text-violet-300 text-2xl">
                        <GraduationCap />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Education</h3>
                </div>
                
                <div className="space-y-6 border-l-2 border-violet-500/30 pl-6 ml-2">
                    <div className="relative">
                        <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-violet-500 ring-4 ring-violet-200"></span>
                        <h4 className="text-xl font-bold text-gray-200">Bachelor of Technology in CS</h4>
                        <p className="text-violet-400">KL University | 2021 - 2025</p>
                        <p className="text-gray-400 mt-2 text-sm">Specializing in Artificial Intelligence and scalable web architectures.</p>
                    </div>
                    {/* Add more education items here if needed */}
                </div>
            </motion.div>


            {/* Experience / Projects Section */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-violet-500/30 transition-colors"
            >
                <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-blue-500/20 rounded-lg text-blue-300 text-2xl">
                        <Briefcase />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Experience & Projects</h3>
                </div>

                <div className="space-y-4 border-l-2 border-blue-500/30 pl-6 ml-2">
                    
                    <div className="relative">
                        <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-blue-200"></span>
                        <h4 className="text-xl font-bold text-gray-200">AI  Developer (Intern)</h4>
                        <p className="text-blue-400">SkillDzire | Summer 2025</p>
                        <ul className="text-gray-400 mt-2 text-sm list-disc pl-4 space-y-1">
                            <li>Developed a RAG-based chatbot using Python and LangChain.</li>
                            <li>Integrated OpenAI API to improve customer support response efficiency by 40%.</li>
                        </ul>
                    </div>

                    <div className="relative">
                        <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-blue-200"></span>
                        <h4 className="text-xl font-bold text-gray-200">Full Stack Developer</h4>
                        <p className="text-blue-400">Academic Project | 2025</p>
                        <ul className="text-gray-400 mt-2 text-sm list-disc pl-4 space-y-1">
                            <li>Built a scalable e-commerce dashboard using React, Spring Boot, and MySQL.</li>
                       
                        </ul>
                    </div>

                </div>
            </motion.div>

             {/* Tech Stack Summary (Mini) */}
             <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} transition={{ delay: 0.3 }}
              className="bg-gradient-to-r from-violet-900/40 to-purple-900/40 backdrop-blur-md rounded-2xl p-6 border border-white/5"
            >
                <div className="flex items-center gap-3 mb-4">
                    <Code className="text-pink-400 text-xl"/>
                    <h3 className="text-xl font-bold">Tech Stack</h3>
                </div>
                <div className="flex flex-wrap justify-center grid-cols-4 grid-cols-2 grid gap-3">
                    {["Python","JAVA","SQL","JavaScript","GenAi","SpringBoot","CI/CD","React"].map((tech, i) => (
                        <span key={i} className="px-5 py-3  text-center  rounded-xl bg-white/10 text-sm font-medium hover:bg-white/20 transition-colors cursor-default">
                            {tech}
                        </span>
                    ))}
                </div>
            </motion.div>

        </div>
      </div>
    </section>
  );
}