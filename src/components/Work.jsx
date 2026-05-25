import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

function Work() {
  return (
    <section
      id="experience"
      className="py-28 bg-gradient-to-b from-[#070b14] via-[#0f172a] to-[#070b14] overflow-hidden"
    >

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24">

          <h2 className="text-5xl md:text-6xl font-black text-white">
            Work <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">Experience</span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mt-6 rounded-full"></div>

        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* center line */}
          <div className="absolute left-1/2 top-0 hidden md:block w-1 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full"></div>

          <div className="space-y-16">

            {workData.map((data, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                }`}
              >

                {/* timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-gradient-to-r from-cyan-400 to-pink-500 border-4 border-[#070b14] shadow-[0_0_30px_rgba(236,72,153,0.8)] z-20"></div>

                {/* card */}
                <div className="w-full md:w-[45%]">

                  <motion.div
                    whileHover={{ y: -10, scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-2xl group"
                  >

                    {/* hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-pink-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 duration-500"></div>

                    <div className="relative z-10">

                      {/* duration */}
                      <span className="inline-block px-5 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-pink-500/20 border border-pink-500/20 text-pink-300 text-sm mb-6">
                        {data.duration}
                      </span>

                      {/* role */}
                      <h3 className="text-3xl font-bold text-white mb-3">
                        {data.role}
                      </h3>

                      {/* company */}
                      <p className="text-cyan-300 text-lg mb-5">
                        {data.company}
                      </p>

                      {/* description */}
                      <p className="text-gray-400 leading-8">
                        {data.description}
                      </p>

                    </div>

                  </motion.div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Work