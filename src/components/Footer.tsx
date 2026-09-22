"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { playClickSound } from "../utils/sound";

export default function Footer({
  musicEnabled = false,
}: {
  musicEnabled?: boolean;
}) {
  const scrollToTop = () => {
    if (musicEnabled) playClickSound();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t-4 mx-3 px-6 py-8 font-sans font-black text-[#111]">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Copyright */}
        <div className="text-sm tracking-widest text-center md:text-left text-[#444]">
          © 2026 VINAYAK SHARMA. <br className="md:hidden" /> ALL RIGHTS RESERVED.
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/vinayaksharma4777"
            target="_blank"
            rel="noopener noreferrer"
            onClick={()=>{
                if(musicEnabled) playClickSound();
            }}
            className="flex h-12 w-12 items-center justify-center rounded-xl border-4 border-[#222] bg-[#efe9b5] shadow-[4px_4px_0_#222] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_#222] active:translate-y-1 active:shadow-none"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/vinayak-sharma4777/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={()=>{
                if(musicEnabled) playClickSound();
            }}
            className="flex h-12 w-12 items-center justify-center rounded-xl border-4 border-[#222] bg-[#efe9b5] shadow-[4px_4px_0_#222] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_#222] active:translate-y-1 active:shadow-none"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:vinayaksharma4777@gmail.com"
            onClick={()=>{
                if(musicEnabled) playClickSound();
            }}
            className="flex h-12 w-12 items-center justify-center rounded-xl border-4 border-[#222] bg-[#efe9b5] shadow-[4px_4px_0_#222] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_#222] active:translate-y-1 active:shadow-none"
            aria-label="Email"
          >
            <Mail size={22} />
          </a>
        </div>

        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 rounded-xl border-4 border-[#222] bg-linear-to-r from-[#ff8300] to-[#ff6b00] px-6 py-3 text-sm text-white shadow-[4px_4px_0_#222] transition-all hover:-translate-y-1 hover:shadow-[6px_6px_0_#222] active:translate-y-1 active:shadow-none cursor-pointer"
        >
          TOP <ArrowUp size={18} strokeWidth={3} />
        </button>
      </div>
    </footer>
  );
}
