"use client";

import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  MapPin,
  Calendar,
  Trophy,
  CheckCircle2,
  Cpu,
  Activity,
} from "lucide-react";
import { useState } from "react";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiBun,
  SiMongodb,
  SiDocker,
  SiJsonwebtokens,
  SiLeetcode,
  SiCodechef,
  SiGit,
  SiGithub,
  SiMysql,
  SiLinux,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import Image from "next/image";

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  logo: string;
  objectives: string[];
  techStack: {
    name: string;
    Icon: React.ComponentType<{ size?: number; style?: React.CSSProperties; className?: string }>;
    color: string;
  }[];
  achievement: string;
  status: "current" | "past";
  externalText: string;
}

const experiences: ExperienceItem[] = [];

function ExperienceCard({ exp }: { exp: ExperienceItem }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-[28px] border-4 border-[#222] bg-[#f7f7f7] shadow-[8px_8px_0_#111]"
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b-4 border-[#222] bg-[#efe9b5] px-4 py-3 sm:px-6 sm:py-4">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 border-[#222] bg-red-400" />
          <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 border-[#222] bg-yellow-400" />
          <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 border-[#222] bg-green-400" />

          <span className="font-black tracking-wide text-[#111] text-sm sm:text-base">
            {exp.company}
          </span>
        </div>

        <motion.span
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="hidden sm:block text-[10px] text-gray-500 font-mono"
        >
          EXPERIENCE TERMINAL
        </motion.span>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-4 p-4 sm:p-5">
        {/* ===================== TOP ===================== */}
        <div className="grid grid-cols-[1fr_auto] gap-4">
          {/* Left Info */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            viewport={{ once: true }}
          >
            <div className="p-1">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-black">
                {exp.role}
              </h2>

              <div className="mt-1 space-y-2 text-black">
                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-[#ff7a00] shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">
                    {exp.duration}
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin size={19} className="text-[#ff7a00] shrink-0" />
                  <span className="font-semibold text-sm sm:text-base">
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Company Logo */}
          <motion.div
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center">
              <Image
                src={exp.logo}
                alt="logo"
                width={70}
                height={70}
                className="object-contain"
              />
              <motion.div
                animate={{
                  scale: [1, 1.35, 1],
                  opacity: [1, 0.45, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className={`absolute bottom-0 left-1 h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-sm border border-white ${
                  exp.status === "current" ? "bg-green-500" : "bg-gray-400"
                }`}
              ></motion.div>
            </div>
          </motion.div>
        </div>

        {/* ===================== OBJECTIVES ===================== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl border-4 border-[#222] bg-[#fff7cf] p-4 sm:p-5 shadow-[4px_4px_0_#222]">
            <div className="flex items-center gap-3">
              <Activity size={22} className="text-[#ff7a00] shrink-0" />

              <h3 className="font-black uppercase tracking-wide text-black text-sm sm:text-base">
                Mission Objectives
              </h3>
            </div>

            <ul className="mt-3 space-y-2">
              {exp.objectives.map((objective, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15 + index * 0.08 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2
                    size={18}
                    className="mt-0.5 shrink-0 text-green-600"
                  />
                  <span className="text-sm leading-6 text-black">
                    {objective}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ===================== BOTTOM ===================== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.18 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border-4 border-[#222] bg-[#fff7cf] p-4 shadow-[4px_4px_0_#222]">
              {/* Header */}
              <div className="flex items-center gap-3">
                <Cpu size={22} className="text-[#ff7a00] shrink-0" />

                <h3 className="font-black uppercase tracking-wide text-black text-sm sm:text-base">
                  Tech Stack
                </h3>
              </div>

              <div className="relative mt-6 flex h-12 flex-wrap items-center justify-center gap-5 overflow-hidden">
                {exp.techStack.map(({ Icon, color }, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      y: [0, -6, 0],
                      rotate: [-4, 4, -4],
                    }}
                    transition={{
                      duration: 2.5 + index * 0.15,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2,
                    }}
                    whileHover={{
                      scale: 1.25,
                      rotate: 0,
                      y: -10,
                    }}
                    className="cursor-pointer"
                  >
                    <Icon
                      size={28}
                      style={{ color }}
                      className="drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)] transition-all duration-200"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Achievement */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.24 }}
            viewport={{ once: true }}
          >
            <div className="rounded-2xl border-4 border-[#222] bg-[#fff7cf] p-4 sm:p-5 shadow-[4px_4px_0_#222]">
              <div className="flex items-center gap-2">
                <Trophy size={22} className="text-[#ff7a00] shrink-0" />

                <h3 className="font-black uppercase tracking-wide text-black text-sm sm:text-base">
                  Achievement Unlocked
                </h3>
              </div>

              <p className="mt-3 text-sm leading-6 text-[#444]">
                {exp.achievement}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const [active, setActive] = useState(0);

  return (
    <section id="experience" className="min-h-screen px-4 pt-21 pb-3">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <h1
            className="
              text-4xl
              sm:text-5xl
              md:text-8xl
              font-black
              uppercase
              tracking-[0.08em]
              text-transparent
              bg-clip-text
              bg-linear-to-r
              from-[#111]
              via-[#444]
              to-[#111]
              drop-shadow-[2px_2px_0_rgba(0,0,0,0.15)]
            "
          >
            EXPERIENCE
          </h1>

          <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-4 text-base sm:text-xl md:text-2xl font-bold text-[#222]">
            <motion.div
              animate={{
                y: [0, -6, 0],
                rotate: [-8, 8, -8],
                filter: [
                  "drop-shadow(0 0 4px rgba(255,122,0,0.25))",
                  "drop-shadow(0 0 12px rgba(255,122,0,0.6))",
                  "drop-shadow(0 0 4px rgba(255,122,0,0.25))",
                ],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <BriefcaseBusiness size={32} className="text-[#ff7a00]" />
            </motion.div>

            <span className="font-semibold">
              Explore my journey • Open experience log • View milestones
            </span>
          </div>
        </motion.div>

        {experiences.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-8 overflow-hidden rounded-[28px] border-4 border-[#222] bg-[#f7f7f7] shadow-[8px_8px_0_#111]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b-4 border-[#222] bg-[#efe9b5] px-4 py-3 sm:px-6 sm:py-4">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 border-[#222] bg-red-400" />
                <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 border-[#222] bg-yellow-400" />
                <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full border-2 border-[#222] bg-green-400" />

                <span className="font-black tracking-wide text-[#111] text-sm sm:text-base">
                  EXPERIENCE LOG // STATUS
                </span>
              </div>

              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                }}
                className="hidden sm:block text-[10px] text-gray-500 font-mono"
              >
                EXPERIENCE TERMINAL
              </motion.span>
            </div>

            {/* Body */}
            <div className="flex flex-col items-center p-6 sm:p-12 text-center">
              <div className="w-full max-w-3xl rounded-2xl border-4 border-[#222] bg-[#fff7cf] p-6 sm:p-10 shadow-[6px_6px_0_#222]">
                <div className="mb-4 flex justify-center">
                  <motion.div
                    animate={{
                      y: [0, -6, 0],
                      rotate: [-4, 4, -4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-16 w-16 sm:h-20 sm:w-20 items-center justify-center rounded-2xl border-3 border-[#222] bg-[#ffeca1] shadow-[3px_3px_0_#222]"
                  >
                    <Activity size={36} className="text-[#ff7a00]" />
                  </motion.div>
                </div>

                <div className="inline-block rounded-full border-2 border-[#222] bg-[#e8d9a8] px-3 py-1 text-xs font-black uppercase text-[#222] mb-3">
                  Status: Academic & Project Track
                </div>

                <h2 className="text-xl sm:text-3xl font-black uppercase tracking-wide text-black mb-4">
                  Building Experience Through Practical Engineering
                </h2>

                <p className="text-sm sm:text-base md:text-lg font-bold text-[#333] leading-relaxed max-w-2xl mx-auto">
                  Currently building experience through projects, hackathons, and continuous software development.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="rounded-xl border-2 border-[#222] bg-[#f7f7f7] p-3 text-center shadow-[2px_2px_0_#222]">
                    <span className="text-xs font-mono uppercase text-gray-500 block mb-1">Focus 01</span>
                    <span className="text-xs sm:text-sm font-black text-black">Full-Stack Web Dev</span>
                  </div>
                  <div className="rounded-xl border-2 border-[#222] bg-[#f7f7f7] p-3 text-center shadow-[2px_2px_0_#222]">
                    <span className="text-xs font-mono uppercase text-gray-500 block mb-1">Focus 02</span>
                    <span className="text-xs sm:text-sm font-black text-black">Hackathon Innovation</span>
                  </div>
                  <div className="rounded-xl border-2 border-[#222] bg-[#f7f7f7] p-3 text-center shadow-[2px_2px_0_#222]">
                    <span className="text-xs font-mono uppercase text-gray-500 block mb-1">Focus 03</span>
                    <span className="text-xs sm:text-sm font-black text-black">DSA & Systems</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <>
            <div className="space-y-8 md:hidden">
              {experiences.map((exp) => (
                <ExperienceCard key={exp.company} exp={exp} />
              ))}
            </div>
            <div className="relative mt-10 h-140 hidden md:block">
              {experiences.map((exp, index) => {
                const isActive = active === index;
                const isLeft = index === 0;

                return (
                  <motion.div
                    key={exp.company}
                    layout
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    className={`absolute
            ${
              isActive
                ? isLeft
                  ? "left-0 top-0 h-full w-[74%] z-20"
                  : "right-0 top-0 h-full w-[74%] z-20"
                : isLeft
                  ? "left-0 bottom-0 h-55 w-[22%] z-10"
                  : "right-0 bottom-0 h-55 w-[22%] z-10"
            }`}
                  >
                    {/* Bounce wrapper — carries the border/bg/shadow so the WHOLE card box tilts, not just the text */}
                    <motion.div
                      onClick={() => setActive(index)}
                      className={`h-full w-full overflow-hidden rounded-[28px] border-4 border-[#222] bg-[#f7f7f7] shadow-[8px_8px_0_#111] ${
                        isActive ? "cursor-default" : "cursor-pointer"
                      }`}
                      animate={
                        isActive
                          ? { y: 0, scale: 1, rotate: 0 }
                          : {
                              y: [0, -18, 0],
                              scale: [0.96, 1, 0.96],
                              rotate: isLeft ? [-3, -1, -3] : [3, 1, 3],
                            }
                      }
                      transition={
                        isActive
                          ? { duration: 0.3 }
                          : {
                              duration: 1.4,
                              repeat: Infinity,
                              repeatDelay: 1.6,
                              ease: "easeInOut",
                            }
                      }
                    >
                      {/* Header */}
                      <div className="flex items-center justify-between border-b-4 border-[#222] bg-[#efe9b5] px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-4 w-4 rounded-full border-2 border-[#222] bg-red-400" />
                          <div className="h-4 w-4 rounded-full border-2 border-[#222] bg-yellow-400" />
                          <div className="h-4 w-4 rounded-full border-2 border-[#222] bg-green-400" />

                          <span className="font-black tracking-wide text-[#111]">
                            {exp.company}
                          </span>
                        </div>

                        {isActive && (
                          <motion.span
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{
                              repeat: Infinity,
                              duration: 2,
                            }}
                            className="hidden md:block text-[10px] text-gray-500 font-mono"
                          >
                            EXPERIENCE TERMINAL
                          </motion.span>
                        )}
                      </div>

                      {isActive ? (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.15 }}
                          className="flex h-[calc(100%-72px)] flex-col gap-4 p-5"
                        >
                          {/* ===================== TOP ===================== */}

                          <div className="grid grid-cols-[1fr_150px] gap-4">
                            {/* Left Info Card */}

                            <motion.div
                              initial={{ opacity: 0, y: 15 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.05 }}
                            >
                              <div className="p-1">
                                <h2 className="text-3xl font-black uppercase text-black">
                                  {exp.role}
                                </h2>

                                <div className="mt-1 space-y-2 text-black">
                                  <div className="flex items-center gap-3">
                                    <Calendar size={20} className="text-[#ff7a00]" />
                                    <span className="font-semibold">
                                      {exp.duration}
                                    </span>
                                  </div>

                                  <div className="flex items-center gap-3">
                                    <MapPin size={21} className="text-[#ff7a00]" />
                                    <span className="font-semibold">
                                      {exp.location}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </motion.div>

                            {/* Company Logo */}
                            <motion.div
                              animate={{
                                y: [0, -3, 0],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              <div className="relative flex h-24 w-27 items-center justify-center">
                                <Image
                                  src={exp.logo}
                                  alt="logo"
                                  width={90}
                                  height={90}
                                  className="object-contain"
                                />
                                <motion.div
                                  animate={{
                                    scale: [1, 1.35, 1],
                                    opacity: [1, 0.45, 1],
                                  }}
                                  transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                  }}
                                  className={`absolute bottom-0 left-1 h-3 w-3 rounded-sm border border-white ${
                                    exp.status === "current"
                                      ? "bg-green-500"
                                      : "bg-gray-400"
                                  }`}
                                ></motion.div>
                              </div>
                            </motion.div>
                          </div>

                          {/* ===================== OBJECTIVES ===================== */}

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.12 }}
                          >
                            <div className="rounded-2xl border-4 border-[#222] bg-[#fff7cf] p-5 shadow-[4px_4px_0_#222]">
                              <div className="flex items-center gap-3">
                                <Activity size={24} className="text-[#ff7a00]" />

                                <h3 className="font-black uppercase tracking-wide text-black">
                                  Mission Objectives
                                </h3>
                              </div>

                              <ul className="mt-3 space-y-2">
                                {exp.objectives.map((objective, index) => (
                                  <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -12 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.15 + index * 0.08 }}
                                    className="flex items-start gap-3"
                                  >
                                    <CheckCircle2
                                      size={20}
                                      className="mt-0.5 shrink-0 text-green-600"
                                    />
                                    <span className="text-sm leading-6 text-black">
                                      {objective}
                                    </span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          </motion.div>

                          {/* ===================== BOTTOM ===================== */}

                          <div className="grid flex-1 grid-cols-2 gap-4">
                            {/* Tech Stack */}

                            <motion.div
                              initial={{ opacity: 0, x: -25 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.18 }}
                            >
                              <div className="rounded-2xl border-4 border-[#222] bg-[#fff7cf] p-4 shadow-[4px_4px_0_#222]">
                                {/* Header */}
                                <div className="flex items-center gap-3">
                                  <Cpu size={24} className="text-[#ff7a00]" />

                                  <h3 className="font-black uppercase tracking-wide text-black">
                                    Tech Stack
                                  </h3>
                                </div>

                                <div className="relative mt-6 flex h-12 flex-wrap items-center justify-center gap-5 overflow-hidden">
                                  {exp.techStack.map(({ Icon, color }, index) => (
                                    <motion.div
                                      key={index}
                                      animate={{
                                        y: [0, -6, 0],
                                        rotate: [-4, 4, -4],
                                      }}
                                      transition={{
                                        duration: 2.5 + index * 0.15,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                        delay: index * 0.2,
                                      }}
                                      whileHover={{
                                        scale: 1.25,
                                        rotate: 0,
                                        y: -10,
                                      }}
                                      className="cursor-pointer"
                                    >
                                      <Icon
                                        size={30}
                                        style={{ color }}
                                        className="drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)] transition-all duration-200"
                                      />
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            </motion.div>

                            {/* Achievement */}

                            <motion.div
                              initial={{ opacity: 0, x: 25 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.24 }}
                            >
                              <div className="rounded-2xl border-4 border-[#222] bg-[#fff7cf] p-5 shadow-[4px_4px_0_#222]">
                                <div className="flex items-center gap-2">
                                  <Trophy size={24} className="text-[#ff7a00]" />

                                  <h3 className="font-black uppercase tracking-wide text-black">
                                    Achievement Unlocked
                                  </h3>
                                </div>

                                <p className="mt-3 text-sm leading-6 text-[#444]">
                                  {exp.achievement}
                                </p>
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      ) : (
                        <div
                          className="flex h-full flex-col items-center justify-start pt-4"
                        >
                          <pre className="whitespace-pre-wrap font-mono text-xs text-black px-3 font-semibold">
                            {exp.externalText}
                          </pre>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </>
        )}
      </div>
    </section>
  );
}