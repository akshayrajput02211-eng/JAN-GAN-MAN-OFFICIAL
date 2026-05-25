"use client";

import { motion } from "framer-motion";

import { chatData } from "./chatData";

import ChatMessage from "./ChatMessage";

import { useParallax } from "@/hooks/aiuseParallax";

export default function ScrollParallax() {
  const { y } = useParallax();

  return (
    <motion.div
      style={{ y }}
      className="space-y-1 overflow-y-auto px-20 pb-40 pt-8"
    >
      {chatData.map((msg) => (
        <ChatMessage key={msg.id} {...msg} />
      ))}
    </motion.div>
  );
}