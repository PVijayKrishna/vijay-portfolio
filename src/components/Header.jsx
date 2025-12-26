import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMenu, FiX } from 'react-icons/fi';

export default function Header() {
  const [isopen, setopen] = useState(false);
  const toggleMenu = () => setopen(!isopen);

  const [iscon, setcon] = useState(false);
  const openContact = () => {
    setcon(true);
    setopen(false);
  };
  const closeContact = () => setcon(false);

  const navItems = ["Hero", "About", "Resume", "Projects", "Certificates"];

  return (
    <>
      {/* 1. HEADER SECTION */}
      <header className='fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-gradient-to-b from-black/50 to-transparent backdrop-blur-[2px]'>
        
        <div className='w-full max-w-7xl mx-auto h-20 px-4 sm:px-6 lg:px-8 flex items-center justify-between'>
            
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 30, delay: 0.3, duration: 1.2 }}
              className='flex items-center bg-transparent rounded-xl cursor-pointer'
            >
              <div className='h-10 w-10 rounded-xl bg-gradient-to-r from-gray-500 to-gray-700 flex items-center justify-center text-purple-300 font-bold text-xl mr-3 shadow-lg'>
                V
              </div>
              <span className='text-xl font-bold bg-gradient-to-r from-gray-200 to-purple-200 mr-3 bg-clip-text text-transparent'>
                VijayKrishna
              </span>
            </motion.div>

            {/* Desktop Nav */}
            <nav className='hidden md:flex font-bold space-x-8'>
              {navItems.map((item, index) => (
                <motion.a
                  key={item} // Fixed: Changed from item.id to item
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 1.5, type: "spring", stiffness: 100 }}
                  className="relative text-gray-200 hover:text-violet-400 font-medium transition-colors duration-300 group"
                  href={`#${item}`} // This is the Routing Link (e.g., #Hero)
                >
                  {item}
                  <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-violet-300 group-hover:w-full transition-all duration-300'></span>
                </motion.a>
              ))}
            </nav>

            {/* Desktop Icons */}
            <div className='hidden md:flex items-center space-x-4'>
                <div className='flex space-x-4 border-r border-gray-600 pr-4'>
                    <a href='https://github.com/PVijayKrishna' target="_blank" rel="noreferrer" className='text-gray-200 hover:text-green-500 hover:shadow-lg hover:shadow-green-900 transition-colors'><FiGithub className='w-5 h-5'/></a>
                    <a href='https://www.linkedin.com/in/p-vijay-krishna' target="_blank" rel="noreferrer" className='text-gray-200 hover:text-blue-500 hover:shadow-lg hover:shadow-blue-900 transition-colors'><FiLinkedin className='w-5 h-5'/></a>
                    <a href='#' className='text-gray-200 hover:text-black hover:shadow-lg hover:shadow-black transition-colors'><FiTwitter className='w-5 h-5'/></a>
                </div>
                <motion.button 
                    initial={{opacity:0, scale:1}}
                    animate={{opacity:1,scale:1}}
                    transition={{damping:50,duration:0.9,delay:1.3 }}
                    onClick={openContact}
                    whileTap={{scale:0.6}}
                    className="px-5 py-2 bg-gradient-to-r from-gray-500 to-gray-400 rounded-xl hover:from-violet-700 hover:to-violet-900 hover:text-gray-200 text-violet-900 font-extrabold transition-all duration-300 shadow-lg"
                >
                    Hire Me
                </motion.button>
            </div>

            {/* Mobile Button */}
            <div className='md:hidden flex items-center'>
              <motion.button 
                className='text-gray-300 focus:outline-none'
                whileTap={{scale: 0.7}}
                onClick={toggleMenu}
              >
                {isopen ? <FiX className='h-8 w-8'/> : <FiMenu className='h-8 w-8' />}          
              </motion.button>
            </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
            {isopen && (
                <motion.div 
                    initial={{opacity:0, height:0}}
                    animate={{opacity:1, height:'auto'}}
                    exit={{opacity:0, height:0}}
                    transition={{duration:0.3}}
                    className='absolute top-20 left-0 w-full overflow-hidden  bg-blue-700 dark:bg-gray-900/95 backdrop-blur-md shadow-xl border-t border-gray-700 rounded-b-2xl z-40'
                >
                  <div className='px-6 py-6 space-y-6'>
                    <nav className='flex flex-col space-y-4'>
                        {navItems.map((item)=> 
                            <a key={item} onClick={toggleMenu} className='text-gray-100 hover:text-black text-lg font-bold border-gray-700 py-3' href={`#${item}`}>{item}</a>
                        )}
                    </nav>
                    <div className='flex items-center space-x-6'>
                        <a href='https://github.com/PVijayKrishna' className='text-gray-300 hover:text-black'><FiGithub className='w-6 h-6'/></a>
                        <a href='https://www.linkedin.com/in/p-vijay-krishna' className='text-gray-300 hover:text-black'><FiLinkedin className='w-6 h-6'/></a>
                        <a href='#' className='text-gray-300 hover:text-black'><FiTwitter className='w-6 h-6'/></a>
                    </div>
                    <button onClick={openContact} className="w-full py-3 rounded-xl text-gray-200 hover:text-gray-900 bg-gradient-to-r from-violet-600 to-violet-800 hover:from-violet-500 hover:to-violet-700 font-extrabold shadow-lg">Contact Me</button>      
                  </div>
                </motion.div>
            )}
        </AnimatePresence>
      </header>

      {/* 2. CONTACT MODAL */}
      <AnimatePresence>
      {iscon && (
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity: 0}}
            className='fixed inset-0 w-screen h-screen backdrop-blur-sm z-[60] bg-black/50 flex justify-center items-center p-4'
        >
          <motion.div 
              initial={{opacity : 0,scale:0.8,y : 30}}
              animate={{opacity : 1,scale : 1,y : 0}}
              exit={{opacity : 0,scale:0.8,y : 30}}
              transition={{ type :"spring", damping : 30, stiffness : 200, duration : 0.8 }}
              className='bg-gray-800 dark:bg-gray-800 rounded-xl shadow-xl w-full max-w-md p-6 space-y-5 border border-gray-700'
          >
              <div className='flex justify-between items-center'>
                  <h1 className='text-gray-200 font-extrabold text-xl'>Get in Touch</h1>
                  <button onClick={closeContact}>
                    <FiX className='text-gray-300 hover:text-white font-extrabold h-6 w-6 transition-colors' />
                  </button>
              </div>
              <form className='space-y-4'>
                  <div>
                    <label htmlFor='name' className='block text-sm font-extrabold text-gray-300 mb-1'>Name : </label>
                    <input type='text' id='name' placeholder='Enter Your Name' className='bg-gray-600 border border-gray-700 rounded-xl shadow-xl w-full px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-violet-500' />
                  </div>
                  <div>
                    <label htmlFor='email' className='block font-extrabold text-gray-300 mb-1'>Email :</label>
                    <input type='email' id='email' placeholder='Your Email' className='bg-gray-600 border border-gray-700 rounded-xl shadow-xl px-3 py-2 w-full text-white focus:outline-none focus:ring-2 focus:ring-violet-500' />
                  </div>
                  <div>
                    <label htmlFor='message' className='mb-1 text-gray-300 font-extrabold block'>Message :</label>
                    <textarea rows='4' id="message" placeholder='How Can I Help you' className='px-3 py-2 bg-gray-600 rounded-xl border border-gray-700 shadow-xl w-full text-white focus:outline-none focus:ring-2 focus:ring-violet-500'></textarea>
                  </div>
                  <motion.button
                      whileHover={{scale : 1.04}}
                      whileTap={{scale : 0.97}}
                      type='submit' 
                      className='px-3 py-3 w-full bg-violet-600 rounded-xl shadow-xl hover:bg-violet-500 font-extrabold text-white transition-all duration-300 hover:shadow-lg hover:shadow-violet-800/50 hover:text-gray-800'
                  >
                      Send
                  </motion.button>
              </form>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
}