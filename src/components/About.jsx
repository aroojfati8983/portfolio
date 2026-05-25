import React from 'react';
import { motion } from 'framer-motion';
import { aboutInfo, assets } from '../assets/assets';

function About() {
  return (
    <section
      id="about"
      className="py-28 bg-gradient-to-b from-[#070b14] via-[#0f172a] to-[#070b14] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
         

          <h2 className="text-5xl md:text-6xl font-black text-white">
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-pink-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left Side Image */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            {/* Glow */}
            <div className="absolute w-[350px] h-[350px] bg-pink-500/30 blur-[120px] rounded-full"></div>

            {/* Image */}
            <div className="relative group">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-cyan-400 to-pink-500 rotate-6 group-hover:rotate-3 duration-500"></div>
              <img
                src={assets.profileImg}
                alt="profile"
                className="relative w-[320px] md:w-[420px] rounded-[40px] object-cover border border-white/10 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Right Side Content */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* Card */}
            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[35px] p-10 shadow-2xl">
              <h3 className="text-4xl font-bold text-white mb-6">My Journey</h3>

              <p className="text-gray-300 leading-8 text-lg mb-6">
                I'm a passionate beginner full-stack developer learning modern web technologies and
                building creative projects with React, Tailwind CSS, JavaScript, and backend tools.
              </p>

              <p className="text-gray-400 leading-8 mb-12">
                I enjoy designing aesthetic user interfaces, exploring new technologies, and turning
                ideas into beautiful responsive web experiences.
              </p>

              {/* Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -10, scale: 1.03 }}
                    transition={{ duration: 0.3 }}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 group cursor-pointer"
                  >
                    {/* hover glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-pink-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 duration-500"></div>

                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-cyan-400 to-pink-500 flex items-center justify-center text-3xl text-white mb-5 shadow-lg">
                        <data.icon />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">{data.title}</h3>
                      <p className="text-gray-400 leading-7 text-sm">{data.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;