import React from 'react'
import { motion } from 'framer-motion'
import certi1 from '../assets/certi1SkillD.png'
import certi2 from '../assets/certi2Azure.png'  
import certi3 from '../assets/certi3Oracle.png'



export default function Certificate() {

  
  return (
  <section className="bg-gradient-to-b from-black/50  via-violet-800  to-purple-500 h-screen w-screen flex flex-col flex-row">

    <div className='w-full w-2/3 justify-between '>

    <motion.div 

    initial ={{opacity:0, scaleX:0.80}}
    animate={{opacity:1, scaleX:1}}
    transition={{type:"spring",damping:30, duration:1.2, delay:0.2,stiffness:200}}

    
    className='container mb-24 mx-auto  w-full  text-center py-4'> 
      <h1 className='text-5xl xl:text-6xl lg:text-8xl font-extrabold  bg-gradient-to-r from-gray-100 to-gray-700 via-gray-400 bg-clip-text text-transparent hover:text-white '>Certificates</h1>
    </motion.div> 

      {/* --- CERTIFICATES GRID --- */}
      <motion.div 
      initial={{opacity:0, scaleX:0.8}}
      animate={{opacity:1, scaleX:1}}
      transition={{type:"spring", damping:35, stiffness:200, delay:0.4, duration:1.5}}
      
      className='w-full flex xl:max-w-6xl  md:max-w-4xl sm:max-w-md xl:grid-cols-3 md:grid-cols-3 mx-auto flex-col flex-row grid gap-4  flex justify-center  backdrop-blur-md z-50 '>
     
        {/*Card1*/}
        <motion.div 
        whileHover={{boxShadow:"0 0 20px rgba(19, 14, 2, 0.94)"}}
        className='p-4 shadow-xl shadow-purple-900/30 rounded-lg text-xl  bg-white m-4 hover:scale-105 cursor-default  transform transition duration-300'>
          <img src={certi3} alt="Certificate 1" className='rounded-md animate-pulse opacity-10 border-violet-900 border-4 mb-2 ' />

          <div className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-black via-purple-700 text-center font-bold '>
          Oracle Cloud Infrastructure 2025 Certified Generative AI Professional
          </div>

          <div className='text-black px-5 text-center mt-2 '>
            <span className='font-bold'> Issued by: </span> <span className='text-gray-600 text-shadow-xl rounded-md backdrop-blur'>Oracle (October 2025) </span>
          </div>

          <div className='text-center mt-1 cursor-pointer'>
              <span className='text-xl text-gray-600 text-center font-bold  mt-2 hover:underline hover:text-purple-600 hover:shadow-xl '>
              <a href={certi3} target="_blank" rel="noopener noreferrer">View Certificate</a>
              </span>
          </div>

        </motion.div>
        
         {/*Card2*/}
        <motion.div 
        whileHover={{boxShadow:"0 0 20px rgba(79, 20, 217, 0.87)"}}
        className='p-4 shadow-xl shadow-purple-900/30 rounded-lg text-xl  bg-white m-4 hover:scale-105 cursor-default  transform transition duration-300'>
          <img src={certi2} alt="Certificate 1" className='rounded-md animate-pulse opacity-10 border-violet-900 border-4 mb-2 ' />

          <div className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-black via-purple-700 text-center font-bold '>
          Microsoft Certified: Azure Fundamentals
          </div>

          <div className='text-black px-5 text-center mt-2 '>
            <span className='font-bold'> Issued by: </span> <span className='text-gray-600 text-shadow-xl rounded-md backdrop-blur'>Microsoft (April 2025) </span>
          </div>

          <div className='text-center mt-1 cursor-pointer'>
              <span className='text-xl text-gray-600 text-center font-bold  mt-2 hover:underline hover:text-purple-600 hover:shadow-xl '>
                <a href={certi2} target="_blank" rel="noopener noreferrer">View Certificate</a>
              </span>
          </div> 
        </motion.div>

        {/*Card3*/}
        <motion.div 
        whileHover={{boxShadow:"0 0 20px rgba(125, 11, 239, 0.92)"}}
        className='p-4 shadow-xl shadow-purple-900/30 rounded-lg text-xl  bg-white m-4 hover:scale-105 cursor-default  transform transition duration-300'>
          <img src={certi1} alt="Certificate 1" className='rounded-md animate-pulse opacity-10 border-violet-900 border-4 mb-2 ' />

          <div className='text-xl text-transparent bg-clip-text bg-gradient-to-r from-violet-800 to-black via-purple-700 text-center font-bold '>
          Artificial Intelligence Internship
          </div>

          <div className='text-black px-5 text-center mt-2 '>
            <span className='font-bold'> Issued by: </span> <span className='text-gray-600 text-shadow-xl rounded-md backdrop-blur'>SkillDzire (April 2025) </span>
          </div>

          <div className='text-center mt-3 cursor-pointer'>
              <span className='text-xl text-gray-600 text-center font-bold mt-2 hover:underline hover:text-purple-600 hover:shadow-xl '>
              <a href={certi1} target="_blank" rel="noopener noreferrer">View Certificate</a>
              </span>
          </div>

        </motion.div>


    </motion.div>

  
  </div>
</section>
  )
}
