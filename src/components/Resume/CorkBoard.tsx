"use client";

import {
  Mail,
  Phone,
  Pin,
  WandSparkles,
  Download,
  Shuffle,
} from "lucide-react";
import { resumeData } from "./ResumeData";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { playClickSound } from "@/src/utils/sound";
import { Piece, type Mode } from "./Piece";
import { motion } from "framer-motion";
import { useState } from "react";

export default function CorkBoard({
  musicEnabled = false,
}: {
  musicEnabled?: boolean;
}) {
  const header = resumeData.filter((item) => item.section === "header");
  const contact = resumeData.filter((item) => item.section === "contact");

  const education = resumeData.filter((item) => item.section === "education");
  const educationDegree = education.find((i) => i.id === "education-degree");
  const educationGpa = education.find((i) => i.id === "education-gpa");
  const educationDate = education.find((i) => i.id === "education-date");

  const experience = resumeData.filter((item) => item.section === "experience");
  const experienceRole = experience.find((i) => i.id === "experience-role");
  const experienceDate = experience.find((i) => i.id === "experience-date");
  const experienceBullets = experience.filter(
    (i) =>
      i.id.startsWith("experience-") &&
      /\d/.test(i.id.replace("experience-", "")),
  );

  const honors = resumeData.filter(
    (item) => item.section === "honors" && item.type === "body",
  );

  const projects = resumeData.filter((item) => item.section === "projects");
  const neuroflux = projects.filter((p) => p.id.startsWith("project-neuroflux"));
  const neurofluxTitle = neuroflux.find((p) => p.id === "project-neuroflux");
  const neurofluxStack = neuroflux.find((p) => p.id === "project-neuroflux-stack");
  const neurofluxBullets = neuroflux.filter((p) => /neuroflux-\d/.test(p.id));

  const grabitgo = projects.filter((p) => p.id.startsWith("project-grabitgo"));
  const grabitgoTitle = grabitgo.find((p) => p.id === "project-grabitgo");
  const grabitgoStack = grabitgo.find((p) => p.id === "project-grabitgo-stack");
  const grabitgoBullets = grabitgo.filter((p) => /grabitgo-\d/.test(p.id));

  const skills = resumeData.filter(
    (item) => item.section === "skills" && item.type === "tag",
  );

  // Group the tech-stack tags into the labelled rows the card displays.
  const techGroups: { label: string; ids: string[] }[] = [
    {
      label: "Languages",
      ids: ["skill-java", "skill-python", "skill-javascript", "skill-sql"],
    },
    {
      label: "Frontend",
      ids: [
        "skill-react",
        "skill-html5",
        "skill-css3",
        "skill-tailwindcss",
        "skill-axios",
      ],
    },
    {
      label: "Backend",
      ids: [
        "skill-nodejs",
        "skill-express",
        "skill-restapis",
        "skill-jwt",
        "skill-bcrypt",
        "skill-multer",
        "skill-socketio",
      ],
    },
    {
      label: "Database",
      ids: ["skill-mongodb", "skill-mysql", "skill-postgresql"],
    },
    {
      label: "Tools",
      ids: [
        "skill-git",
        "skill-github",
        "skill-postman",
        "skill-docker",
        "skill-linux",
        "skill-vscode",
      ],
    },
    {
      label: "Core",
      ids: [
        "skill-dsa",
        "skill-oop",
        "skill-dbms",
        "skill-cn",
        "skill-os",
      ],
    },
  ];

  const skillById = (id: string) => skills.find((s) => s.id === id)?.text;

  const [mode, setMode] = useState<Mode>("scattered");

  const handleStop = () => {
    setMode("slow");
    if (musicEnabled) playClickSound();
  };

  const handleDownload = () => {
    setMode("fast");
    if (musicEnabled) playClickSound();

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/documents/VinayakSharma.pdf";
      link.download = "VinayakSharma.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 400);
  };

  const handleScatter = () => {
    setMode("scattered");
    if (musicEnabled) playClickSound();
  };

  const isSpellActive = mode === "scattered";

  const disableDispel = !isSpellActive;
  const disableCastSpell = isSpellActive;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.9,
        ease: "easeOut",
      }}
      className="
        overflow-hidden
        rounded-[20px] sm:rounded-[28px]
        border-4
        border-[#222]
        bg-[#e8d9a8]
        shadow-[8px_8px_0_#111] mx-3 sm:mx-5 md:mx-0
      "
    >
      {/* ------------------ HEADER ----------------- */}

      <div
        className="
          flex flex-row items-center justify-between
          border-b-4
          border-[#222]
          bg-[#ffeca1]
          px-3
          sm:px-6
          py-3
          sm:py-4
        "
      >
        <div className="flex items-center gap-2 sm:gap-3 min-w-0">
          <Pin
            size={16}
            className="shrink-0 rotate-[-20deg] text-[#7a3b1f] sm:size-4.5"
          />

          <span className="truncate text-xs sm:text-base font-black tracking-wider text-[#3a2a14]">
            PERSONNEL DOSSIER
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
          className="hidden shrink-0 text-[10px] sm:text-[12px] font-mono text-gray-600 md:block"
        >
          {mode === "scattered" ? "SPELL ACTIVE" : "SPELL BROKEN"}
        </motion.span>
      </div>

      {/* ------------------ BODY ----------------- */}

      <div
        className="relative h-auto lg:h-150 xl:h-140 overflow-hidden bg-[#fff8d6] px-4 sm:px-6 md:px-8 py-4 text-[#222]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(0,0,0,.08) 1px, transparent 0)",
          backgroundSize: "16px 16px",
        }}
      >
        {/* ================= HEADER ================= */}

        <div className="border-b-2 border-[#222] pb-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            {/* NAME */}
            <div>
              {header.map((item) => (
                <Piece
                  as="h1"
                  limitX={20}
                  limitY={20}
                  mode={mode}
                  key={item.id}
                  className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-[#222]"
                >
                  {item.text}
                </Piece>
              ))}
            </div>

            {/* CONTACT */}
            <div className="flex flex-wrap gap-x-3 gap-y-1.5 sm:gap-x-5 text-[11px] sm:text-sm items-center">
              {contact.map((item) => (
                <Piece
                  as="div"
                  mode={mode}
                  key={item.id}
                  className="flex items-center gap-1.5 sm:gap-2 font-medium text-neutral-700"
                >
                  {item.id === "phone" && (
                    <Phone
                      size={13}
                      className="shrink-0 text-[#d97706] sm:size-3.5"
                    />
                  )}

                  {item.id === "email" && (
                    <Mail
                      size={13}
                      className="shrink-0 text-[#d97706] sm:size-3.5"
                    />
                  )}

                  {item.id === "github" && (
                    <FaGithub className="shrink-0 text-[#d97706]" />
                  )}

                  {item.id === "linkedIn" && (
                    <FaLinkedin className="shrink-0 text-[#d97706]" />
                  )}

                  <span className="break-all sm:break-normal">{item.text}</span>
                </Piece>
              ))}
            </div>
          </div>
        </div>

        {/* ================= MAIN ================= */}

        <div className="mt-5 grid h-auto sm:grid-cols-[1.3fr_1fr] lg:h-[calc(100%-110px)] gap-6 sm:gap-8">
          {/* LEFT */}

          <div className="flex flex-col justify-between">
            <div className="mb-6 lg:mb-1">
              <div className="mb-2 border-b border-[#555] pb-1">
                <Piece
                  as="h2"
                  mode={mode}
                  className="text-sm sm:text-base font-black tracking-wider text-[#222]"
                >
                  EDUCATION
                </Piece>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[13px] sm:text-[15px] text-[#333] gap-1 sm:gap-0">
                <Piece as="span" mode={mode} className="font-semibold">
                  {educationDegree?.text.split(" — ")[0]}{" "}
                  <span className="font-normal text-neutral-600 block sm:inline">
                    <span className="hidden sm:inline">•</span>{" "}
                    {educationDegree?.text.split(" — ")[1]}
                  </span>
                </Piece>

                <Piece
                  as="span"
                  mode={mode}
                  className="font-bold text-[#d97706] sm:text-inherit"
                >
                  {educationGpa?.text}
                </Piece>
              </div>

              <Piece
                as="div"
                mode={mode}
                className="mt-1 sm:mt-0.5 text-xs font-medium text-neutral-500"
              >
                {educationDate?.text}
              </Piece>
            </div>

            <div className="mb-6 lg:mb-5">
              <div className="mb-2 border-b border-[#555] pb-1">
                <Piece
                  as="h2"
                  mode={mode}
                  className="text-sm sm:text-base font-black tracking-wider text-[#222]"
                >
                  EXPERIENCE
                </Piece>
              </div>

              {/* Position + Duration */}
              <div className="mb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-0">
                <Piece
                  as="span"
                  mode={mode}
                  className="text-[13px] sm:text-[15px] font-bold"
                >
                  {experienceRole?.text.split(" — ")[0]}
                </Piece>

                <Piece
                  as="span"
                  mode={mode}
                  className="text-xs sm:text-sm font-semibold text-neutral-600"
                >
                  {experienceDate?.text}
                </Piece>
              </div>

              {/* Company */}
              <Piece
                as="div"
                mode={mode}
                className="mb-2 text-xs sm:text-sm text-neutral-600"
              >
                {experienceRole?.text.split(" — ")[1]}
              </Piece>

              {/* Highlights */}
              <ul className="space-y-1 pl-4 sm:pl-5 text-[12px] sm:text-[13px] text-[#333]">
                {experienceBullets.map((bullet) => (
                  <Piece
                    as="li"
                    mode={mode}
                    key={bullet.id}
                    className="list-disc"
                  >
                    {bullet.text}
                  </Piece>
                ))}
              </ul>
            </div>

            <div className="hidden sm:mb-5 sm:block lg:mb-5">
              <div className="mb-2 border-b border-[#555] pb-1">
                <Piece
                  as="h2"
                  mode={mode}
                  className="text-sm sm:text-base font-black tracking-wider text-[#222]"
                >
                  HONORS
                </Piece>
              </div>

              <div className="space-y-1.5 sm:space-y-1 text-[12px] sm:text-[13px] text-[#333]">
                {honors.map((honor) => (
                  <Piece
                    as="div"
                    mode={mode}
                    key={honor.id}
                    className="flex items-start sm:items-center gap-2"
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-[#d97706] mt-1.5 sm:mt-0 shrink-0" />
                    <span>{honor.text}</span>
                  </Piece>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}

          <div className="flex h-full flex-col justify-between">
            <div className="mb-6 lg:mb-5">
              <div className="mb-2 border-b border-[#555] pb-1">
                <Piece
                  as="h2"
                  mode={mode}
                  className="text-sm sm:text-base font-black tracking-wider text-[#222]"
                >
                  PROJECTS
                </Piece>
              </div>

              {/* Project 1 — NeuroFlux */}

              <div className="mb-6 lg:mb-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-0">
                  <Piece
                    as="h3"
                    mode={mode}
                    className="text-[13px] sm:text-[15px] font-bold"
                  >
                    {neurofluxTitle?.text.split(" – ")[0] ||
                      neurofluxTitle?.text.split(" — ")[0]}
                  </Piece>

                  <Piece
                    as="span"
                    mode={mode}
                    className="text-xs font-semibold sm:font-normal text-neutral-600 inline-block bg-[#ffeca1] sm:bg-transparent px-2 py-0.5 sm:px-0 sm:py-0 rounded-sm sm:rounded-none w-fit"
                  >
                    Live
                  </Piece>
                </div>

                <Piece
                  as="p"
                  mode={mode}
                  className="mb-1.5 sm:mb-1 text-[11px] sm:text-xs italic text-neutral-600 leading-tight"
                >
                  {neurofluxStack?.text}
                </Piece>

                <ul className="space-y-1 pl-4 sm:pl-5 text-[12px] sm:text-[13px] text-[#333]">
                  {neurofluxBullets.map((bullet) => (
                    <Piece
                      as="li"
                      mode={mode}
                      key={bullet.id}
                      className="list-disc"
                    >
                      {bullet.text}
                    </Piece>
                  ))}
                </ul>
              </div>

              {/* Project 2 — GrabItGo */}

              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 sm:gap-0">
                  <Piece
                    as="h3"
                    mode={mode}
                    className="text-[13px] sm:text-[15px] font-bold"
                  >
                    {grabitgoTitle?.text.split(" – ")[0] ||
                      grabitgoTitle?.text.split(" — ")[0]}
                  </Piece>

                  <Piece
                    as="span"
                    mode={mode}
                    className="text-xs font-semibold sm:font-normal text-neutral-600 inline-block bg-[#ffeca1] sm:bg-transparent px-2 py-0.5 sm:px-0 sm:py-0 rounded-sm sm:rounded-none w-fit"
                  >
                    Full Stack
                  </Piece>
                </div>

                <Piece
                  as="p"
                  mode={mode}
                  className="mb-1.5 sm:mb-1 text-[11px] sm:text-xs italic text-neutral-600 leading-tight"
                >
                  {grabitgoStack?.text}
                </Piece>

                <ul className="space-y-1 pl-4 sm:pl-5 text-[12px] sm:text-[13px] text-[#333]">
                  {grabitgoBullets.map((bullet) => (
                    <Piece
                      as="li"
                      mode={mode}
                      key={bullet.id}
                      className="list-disc"
                    >
                      {bullet.text}
                    </Piece>
                  ))}
                </ul>
              </div>
            </div>
            {/* TECH STACK */}
            <div className="hidden sm:block">
              <div className="mb-2 border-b border-[#555] pb-1">
                <Piece
                  as="h2"
                  mode={mode}
                  className="text-sm sm:text-base font-black tracking-wider text-[#222]"
                >
                  TECH STACK
                </Piece>
              </div>

              <div className="space-y-1.5 sm:space-y-1 text-[12px] sm:text-[13px] text-[#333]">
                {techGroups.map((group) => (
                  <Piece
                    as="div"
                    mode={mode}
                    key={group.label}
                    className="leading-relaxed"
                  >
                    <span className="font-semibold">{group.label}:</span>{" "}
                    {group.ids
                      .map((id) => skillById(id))
                      .filter(Boolean)
                      .join(", ")}
                  </Piece>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* -------------------- FOOTER --------------------- */}

      <div
        className="
          flex
          flex-col
          gap-3
          sm:gap-4
          border-t-4
          border-[#222]
          bg-[#ffeca1]
          px-3
          sm:px-6
          py-3
          sm:py-4
          lg:flex-row
          lg:items-center
          lg:justify-between
        "
      >
        <div className="grid grid-cols-3 gap-2 sm:flex sm:flex-wrap sm:gap-3">
          <button
            onClick={handleStop}
            disabled={disableDispel}
            className={`
              flex
              cursor-pointer
              items-center
              justify-center
              gap-1.5
              sm:gap-2
              rounded-lg
              border-4
              px-2
              sm:px-5
              py-2.5
              sm:py-3
              text-[10px]
              sm:text-sm
              font-black
              text-white
              shadow-[0_4px_0_#222]
              sm:shadow-[0_5px_0_#222]
              transition-all
              duration-200
              ${
                disableDispel
                  ? "cursor-not-allowed bg-blue-300 border-blue-300 text-white opacity-60 shadow-none"
                  : "cursor-pointer border-[#333] bg-linear-to-r from-[#60a5fa] via-[#3b82f6] to-[#2563eb] text-white hover:-translate-y-1 active:translate-y-1 active:shadow-none"
              }
            `}
          >
            <WandSparkles size={14} className="shrink-0 sm:size-4" />
            <span className="truncate">DISPEL</span>
          </button>

          <button
            onClick={handleDownload}
            className="
              flex
              cursor-pointer
              items-center
              justify-center
              gap-1.5
              sm:gap-2
              rounded-lg
              border-4
              border-[#333]
              bg-[#ff6b6b]
              px-2
              sm:px-5
              py-2.5
              sm:py-3
              text-[10px]
              sm:text-sm
              font-black
              text-white
              shadow-[0_4px_0_#222]
              sm:shadow-[0_5px_0_#222]
              transition-all
              duration-200
              hover:-translate-y-1
              active:translate-y-1
              active:shadow-none
            "
          >
            <Download size={14} className="shrink-0 sm:size-4" />
            <span className="truncate">DOWNLOAD CV</span>
          </button>

          <button
            onClick={handleScatter}
            disabled={disableCastSpell}
            className={`
              flex
              cursor-pointer
              items-center
              justify-center
              gap-1.5
              sm:gap-2
              rounded-lg
              border-4
              px-2
              sm:px-5
              py-2.5
              sm:py-3
              text-[10px]
              sm:text-sm
              font-black
              text-black
              shadow-[0_4px_0_#222]
              sm:shadow-[0_5px_0_#222]
              transition-all
              duration-200
              ${
                disableCastSpell
                  ? "cursor-not-allowed border-gray-300 bg-gray-200 text-gray-500 opacity-60 shadow-none"
                  : "cursor-pointer border-[#333] bg-white text-black hover:-translate-y-1 active:translate-y-1 active:shadow-none"
              }
            `}
          >
            <Shuffle size={14} className="shrink-0 sm:size-4" />
            <span className="truncate">CAST SPELL</span>
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
          className="hidden text-[10px] font-mono text-gray-600 lg:block"
        >
          Stop reconstructs • Download archives • Scatter restarts
        </motion.span>
      </div>
    </motion.div>
  );
}