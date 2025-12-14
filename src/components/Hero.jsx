import React, { Suspense } from 'react'
import { motion } from 'framer-motion'
// New Imports for 3D
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Orb from './orb'

export default function Hero() {
  return (
    <section className='w-screen h-screen bg-gradient-to-b from-violet-900 to-black flex justify-between items-center lg:px-24 md:px-10 xl:flex-row flex-col-reverse relative overflow-hidden ' >

      {/*Left Data*/}
      <div className='z-40 transitions-all duration-300'>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 50, duration: 1.5, delay: 1.3 }}
          className='lg:text-6xl lg:max-w-4xl  md:text-7xl md:max-w-xl  font-bold z-10 mb-6 '>
          CS Student | Full-Stack Dev | <br />AI Enthusiast
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 50, duration: 1.5, delay: 1.7 }}
          className='text-xl md:text-1xl mb-7 lg:text-2xl text-purple-200 max-w-2xl'>
          Bridging the gap between robust software engineering and AI-driven intelligence to architect the web of tomorrow
   
   
        </motion.p>

      </div>

      {/*Right 3D*/}
      <div className='flex-1 h-full w-full relative z-30 min-h-[300px] '>
        <Canvas dpr={[1, 2]} camera={{ fov: 45 }}>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              <Orb />
            </Stage>
          </Suspense>
          <OrbitControls enableZoom={false} autoRotate />
        </Canvas>
      </div>

    </section>
  )
}