"use client";

import { motion } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { playClickSound } from "../utils/sound";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    name: "NeuroFlux",
    title: "NEUROFLUX",
    tagline: "Full-Stack Web Application",
    badge: "FULL-STACK // MERN",
    techSummary: "React • Node.js • Express • MongoDB",

    description:
      "A full-stack web application built with React, Node.js, Express.js and MongoDB.",

    github: "",
    live: "https://neuroflux-frontend-r0sz.onrender.com",

    points: [
      "Full-stack web application built with React on the frontend.",
      "Backend architecture developed with Node.js and Express.js REST APIs.",
      "Database management and schema modeling implemented with MongoDB.",
      "Engineered for modularity, clean code structure, and reliable performance.",
    ],
  },

  {
    name: "GrabItGo",
    title: "GRABITGO",
    tagline: "Blinkit-Inspired Grocery & E-Commerce Frontend",
    badge: "FRONTEND // REDUX",
    techSummary: "React • Vite • Tailwind CSS • Redux",

    description:
      "A Blinkit-inspired grocery and e-commerce frontend built with React, Vite, Tailwind CSS and Redux Toolkit.",

    github: "",
    live: "",

    points: [
      "Interactive grocery and e-commerce user interface inspired by Blinkit.",
      "Fast frontend development and asset bundling configured with Vite.",
      "Centralized cart and application state managed using Redux Toolkit.",
      "Responsive and modern component styling designed with Tailwind CSS.",
    ],
  },

  {
    name: "RURAL GUARDIAN",
    title: "RURAL GUARDIAN: AI BOT TO DETECT FAKE NEWS AND SCAMS IN RURAL MESSAGING",
    tagline: "AI Bot to Detect Fake News and Scams in Rural Messaging",
    badge: "AI/ML // HACKATHON",
    techSummary: "AI/ML • Python • NLP • Smart Bharat",

    description:
      "An AI-powered Smart India Hackathon project focused on detecting fake news and scams in rural messaging, with a focus on text/voice verification and local-language accessibility.",

    github: "",
    live: "",

    points: [
      "Smart India Hackathon project addressing rural misinformation and scams.",
      "AI/ML and NLP powered solution tailored for messaging platforms.",
      "Focus on text and voice verification for accessible rural communication.",
      "Designed to support local-language interaction and usability.",
    ],
  },
];

const bootMessages = [
  "Connecting...",
  "Loading Project...",
  "Reading Repository...",
  "Rendering Preview...",
  "Boot Complete.",
];

function BootLoader({ onComplete }: { onComplete: () => void }) {
  const [line, setLine] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (line >= bootMessages.length) return;

    let char = 0;

    const interval = setInterval(() => {
      char++;

      setTyped(bootMessages[line].slice(0, char));

      if (char === bootMessages[line].length) {
        clearInterval(interval);

        setTimeout(() => {
          if (line === bootMessages.length - 1) {
            onComplete();
          } else {
            setLine((p) => p + 1);
            setTyped("");
          }
        }, 150);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [line, onComplete]);

  return (
    <div className="md:min-h-93 min-h-162 p-8 font-mono text-lg text-gray-500">
      {bootMessages.slice(0, line).map((msg) => (
        <div key={msg}>&gt; {msg}</div>
      ))}

      {line < bootMessages.length && (
        <div>
          &gt; {typed}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 0.6 }}
          >
            _
          </motion.span>
        </div>
      )}
    </div>
  );
}

export default function Projects({
  musicEnabled,
}:{
  musicEnabled:boolean;
}) {
  const [selected, setSelected] = useState(0);
  const [activeProject, setActiveProject] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [pendingProject, setPendingProject] = useState<number | null>(null);

  const current = projects[activeProject];

  const switchProject = (index: number) => {
    if (isLoading || index === activeProject) return;
    setSelected(index);
    setPendingProject(index);
    setIsLoading(true);
  };

  const prev = () => {
    switchProject(
      activeProject === 0 ? projects.length - 1 : activeProject - 1,
    );
  };
  const next = () => {
    switchProject(
      activeProject === projects.length - 1 ? 0 : activeProject + 1,
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const section = document.getElementById("projects");

      if (!section) return;

      const rect = section.getBoundingClientRect();

      const isVisible =
        rect.top < window.innerHeight * 0.7 &&
        rect.bottom > window.innerHeight * 0.3;

      if (!isVisible) return;

      if (e.key === "ArrowDown" || e.key === "ArrowRight") {
        e.preventDefault();

        const nextIndex =
          activeProject === projects.length - 1 ? 0 : activeProject + 1;

        switchProject(nextIndex);
      }

      if (e.key === "ArrowUp" || e.key === "ArrowLeft") {
        e.preventDefault();

        const prevIndex =
          activeProject === 0 ? projects.length - 1 : activeProject - 1;

        switchProject(prevIndex);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeProject, isLoading]);

  return (
    <section id="projects" className="min-h-screen overflow-x-hidden px-4 pt-21 pb-5">
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
            className="text-4xl sm:text-5xl md:text-8xl font-black uppercase tracking-[0.08em] text-transparent bg-clip-text bg-linear-to-r from-[#111] via-[#444] to-[#111] drop-shadow-[2px_2px_0_rgba(0,0,0,0.15)]
            "
          >
            PROJECTS
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
              <FolderGit2 size={32} className="text-[#ff7a00]" />
            </motion.div>
            <span className="font-semibold">
              Browse my builds • Open project dossier • Inspect the source
            </span>
          </div>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[400px_minmax(0,1fr)]">
          {/* LEFT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="hidden lg:block w-full max-w-100 min-w-0 overflow-hidden rounded-[28px] border-4 border-[#222] bg-[#f5f5f5] shadow-[8px_8px_0_#111]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b-4 border-[#222] bg-[#efe9b5] px-6 py-4">
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="font-black tracking-[0.08em] text-[#111] text-sm"
              >
                SWITCHBOARD
              </motion.span>

              <motion.span
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-[10px] md:text-[10px] text-gray-500 font-mono"
              >
                Route signal to project archive
              </motion.span>
            </div>

            {/* List */}
            <div className="space-y-5 p-6">
              {projects.map((exp, index) => (
                <div
                  key={exp.name}
                  className={`flex items-center justify-between rounded-xl border-4 border-[#222] px-4 py-5 transition-all duration-300 text-black
                    ${
                      selected === index
                        ? "bg-[#ffd100] shadow-[0_8px_0_#222]"
                        : "bg-white hover:translate-y-0.5 shadow-[0_6px_0_#222]"
                    }
                  `}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      animate={{
                        scale: selected === index ? [1, 1.15, 1] : 1,
                      }}
                      transition={{
                        duration: 1.2,
                        repeat: selected === index ? Infinity : 0,
                      }}
                      className={`h-3 w-3 rounded-full border-2 border-[#444]
                        ${
                          selected === index
                            ? "bg-[#8c7d32] shadow-[0_0_10px_rgba(140,125,50,0.6)]"
                            : "bg-[#efe9b5]"
                        }
                        `}
                    />

                    <span className="font-black text-sm">{exp.name}</span>
                  </div>

                  <button
                    disabled={isLoading}
                    onClick={() => {
                      if(musicEnabled) playClickSound();
                      switchProject(index);
                    }}
                    className={`relative h-10 w-16 rounded-full border-4 border-[#2d2d2d]
    ${isLoading ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
    ${
      selected === index
        ? "bg-linear-to-r from-[#ffe36a] via-[#ffd100] to-[#e6bc00]"
        : "bg-[#efe9b5]"
    }
    shadow-[0_3px_0_#222] active:translate-y-0.5 active:shadow-none overflow-hidden`}
                  >
                    <motion.div
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                      className={`absolute top-0.75 left-0.75 h-6 w-6 rounded-full border-4 border-[#333] bg-[#f4f4f4] shadow-[0_2px_6px_rgba(0,0,0,0.25)]
                      `}
                      animate={{
                        x: selected === index ? 32 : 0,
                        rotate: selected === index ? 180 : 0,
                      }}
                    />
                  </button>
                </div>
              ))}
            </div>

            <div className="border-t-4 border-[#222] bg-[#efe9b5] px-6 py-4 text-xs text-gray-600">
              <motion.span
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="text-[10px] md:text-[10px] text-gray-500 font-mono"
              >
                ↑ ↓ Arrow keys navigate • Toggles select
              </motion.span>
            </div>
          </motion.div>

          {/* RIGHT PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeInOut",
            }}
            className="
              overflow-hidden
              rounded-[28px]
              border-4
              border-[#222]
              bg-[#f7f7f7]
              shadow-[8px_8px_0_#111]
            "
          >
            {/* Header */}
            <div
              className="
                flex
                items-center
                justify-between
                border-b-4
                border-[#222]
                bg-[#efe9b5]
                px-6
                py-4
              "
            >
              <div className="flex items-center gap-3">
                <div className="h-4 w-4 rounded-full border-2 border-[#222] bg-red-400" />
                <div className="h-4 w-4 rounded-full border-2 border-[#222] bg-yellow-400" />
                <div className="h-4 w-4 rounded-full border-2 border-[#222] bg-green-400" />

                <span
                  className="
    ml-2
    text-[10px]
    sm:text-xs
    md:ml-4
    md:text-base
    font-black
    tracking-tight
    text-[#111]
    leading-tight
  "
                >
                  PROJECT ARCHIVE TERMINAL
                </span>
              </div>

              <motion.span
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden lg:block text-[10px] md:text-[10px] text-gray-500 font-mono"
              >
                Signal Routed from Switchboard
              </motion.span>
            </div>

            {/* PROJECT ARCHIVE TERMINAL */}
            <div className="relative min-h-105 overflow-hidden bg-[#f8f8f8] p-6">
              {/* Scanlines */}
              <div
                className="pointer-events-none absolute inset-0 opacity-15"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(to bottom, transparent 0px, transparent 2px, #000 3px)",
                }}
              />

              {isLoading ? (
                <BootLoader
                  onComplete={() => {
                    if (pendingProject !== null) {
                      setActiveProject(pendingProject);
                    }

                    setPendingProject(null);
                    setIsLoading(false);
                  }}
                />
              ) : (
                <motion.div
                  key={activeProject}
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                  }}
                  className="relative z-10 space-y-6"
                >
                  {/* TOP ROW */}
                  <div className="grid gap-6 grid-cols-1 lg:grid-cols-[minmax(0,1fr)_300px]">
                    {/* Project Visual Graphic */}
                    <motion.div
                      initial="rest"
                      whileHover="hover"
                      animate="rest"
                      className="group relative h-52 md:h-52 overflow-hidden rounded-2xl border-4 border-[#222] bg-[#143d32] shadow-[0_6px_0_#222] flex flex-col justify-between p-5 select-none"
                    >
                      {/* Grid / CRT Overlay */}
                      <div
                        className="pointer-events-none absolute inset-0 opacity-15"
                        style={{
                          backgroundImage:
                            "radial-gradient(circle at 1px 1px, rgba(255,255,255,.25) 1px, transparent 0)",
                          backgroundSize: "12px 12px",
                        }}
                      />

                      {/* Header in Preview */}
                      <div className="relative z-10 flex items-center justify-between">
                        <span className="border-2 border-[#fff7b3]/40 bg-[#0e2c24] px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider text-[#fff7b3]">
                          {current.badge}
                        </span>
                        <div className="flex gap-1.5">
                          <div className="h-2 w-2 rounded-full bg-[#ff7a00]" />
                          <div className="h-2 w-2 rounded-full bg-[#fff7b3]" />
                          <div className="h-2 w-2 rounded-full bg-[#06d59f]" />
                        </div>
                      </div>

                      {/* Center Project Name Display */}
                      <div className="relative z-10 my-auto text-center">
                        <span className="font-mono text-[10px] sm:text-xs text-[#06d59f] tracking-widest uppercase block mb-1">
                          // PROJECT DOSSIER
                        </span>
                        <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-linear-to-r from-white via-[#fff7b3] to-white drop-shadow-[2px_2px_0_#05231c]">
                          {current.name.toUpperCase()}
                        </h3>
                      </div>

                      {/* Footer in Preview */}
                      <div className="relative z-10 flex items-center justify-between border-t border-white/15 pt-2 font-mono text-[10px] sm:text-[11px] text-[#cdd6cf]">
                        <span className="truncate mr-2">{current.techSummary}</span>
                        <span className="shrink-0 text-[#ffd100]">ACTIVE</span>
                      </div>

                      {/* Github Link */}
                      {current.github && (
                        <a
                          href={current.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="
                            absolute
                            top-3
                            right-3
                            z-20
                            flex
                            items-center
                            justify-center
                            h-10
                            w-10
                            rounded-lg
                            bg-black/75
                            backdrop-blur-sm
                            text-white
                            opacity-100
                            md:opacity-0
                            md:-translate-y-3
                            md:group-hover:opacity-100
                            md:group-hover:translate-y-0
                            transition-all
                            duration-300
                          "
                        >
                          <FaGithub size={20} />
                        </a>
                      )}
                    </motion.div>

                    {/* Name + Description */}
                    <div className="flex flex-col min-w-0 flex-1">
                      <h2 className="text-3xl md:text-4xl font-black uppercase tracking-wide bg-linear-to-r from-[#ff7a00] via-[#ffb347] to-[#ffd100] bg-clip-text text-transparent drop-shadow-[2px_2px_0_rgba(0,0,0,0.15)] -mt-1.5">
                        {current.title}
                      </h2>
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[#666]">
                        {current.tagline}
                      </p>

                      <p className="mt-3 text-[15px] leading-7 text-[#444]">
                        {current.description}
                      </p>

                      {current.live && (
                        <motion.button
                          onClick={() => {
                            if (musicEnabled) playClickSound();
                            window.open(current.live, "_blank", "noopener,noreferrer");
                          }}
                          className="mt-2 w-fit rounded-lg border-4 border-[#333] bg-[#ff6b6b] px-6 py-3 font-black text-white shadow-[0_5px_0_#222] hover:-translate-y-1 active:translate-y-1 active:shadow-none transition-all duration-200 cursor-pointer"
                        >
                          <div className="flex gap-2 items-center">
                            VIEW PROJECT <ExternalLink size={18} />
                          </div>
                        </motion.button>
                      )}
                    </div>
                  </div>

                  {/* BOTTOM ROW */}
                  <div className="mt-2">
                    {/* Key Features */}
                    <div>
                      <ul className="space-y-2">
                        {current.points.map((point) => (
                          <li key={point} className="flex gap-3 text-base">
                            <span className="font-black text-[#ff7a00]">▸</span>
                            <span className="text-black">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Footer */}
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between items-center justify-between border-t-4 border-[#222] bg-[#efe9b5] px-6 py-4">
              <div className="flex flex-wrap gap-3">
                <button
                  disabled={isLoading}
                  onClick={() => {
                    if(musicEnabled) playClickSound();
                    prev();
                  }}
                  className={`flex items-center gap-2 rounded-lg border-4 border-[#333]
    bg-linear-to-r from-[#60a5fa] via-[#3b82f6] to-[#2563eb]
    px-5 py-3 font-black text-white shadow-[0_5px_0_#222]
    transition-all duration-200
    ${
      isLoading
        ? "cursor-not-allowed opacity-50"
        : "cursor-pointer hover:-translate-y-1 active:translate-y-1 active:shadow-none"
    }`}
                >
                  <ChevronLeft size={18} />
                  PREV
                </button>

                <button
                  disabled={isLoading}
                  onClick={() => {
                    if(musicEnabled) playClickSound();
                    next();
                  }}
                  className={`flex items-center gap-2 rounded-lg border-4 border-[#333]
    bg-linear-to-r from-[#4ade80] via-[#22c55e] to-[#16a34a]
    px-5 py-3 font-black text-white shadow-[0_5px_0_#222]
    transition-all duration-200
    ${
      isLoading
        ? "cursor-not-allowed opacity-50"
        : "cursor-pointer hover:-translate-y-1 active:translate-y-1 active:shadow-none"
    }`}
                >
                  NEXT
                  <ChevronRight size={18} />
                </button>
              </div>
              <motion.span
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="hidden md:block text-[10px] text-gray-500 font-mono"
              >
                ← → Arrow keys navigate • Prev / Next project
              </motion.span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
