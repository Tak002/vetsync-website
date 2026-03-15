"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  id?: string;
  className?: string;
  bg?: "white" | "gray" | "primary";
}

const bgMap = {
  white: "bg-white",
  gray: "bg-gray-50",
  primary: "bg-primary-900 text-white",
};

export default function SectionWrapper({
  children,
  id,
  className = "",
  bg = "white",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 md:py-28 ${bgMap[bg]} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-7xl px-6 md:px-8"
      >
        {children}
      </motion.div>
    </section>
  );
}
