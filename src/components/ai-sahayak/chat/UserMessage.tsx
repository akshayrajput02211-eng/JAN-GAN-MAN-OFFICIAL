"use client";

import { motion } from "framer-motion";

import UserAvatar from "../shared/UserAvatar";

import { Message } from "@/types/chat";

export default function UserMessage({
  msg,
}: {
  msg: Message;
}) {

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
        scale: 0.98,
      }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{
        duration: 0.25,
      }}
      className="flex items-end justify-end gap-3"
    >

      {/* MESSAGE */}
      <div className="max-w-[80%] sm:max-w-[65%]">

        <div
          className="
            rounded-3xl rounded-br-md
            bg-gradient-to-r
            from-violet-600
            to-indigo-500
            px-5 py-4
            shadow-lg shadow-violet-500/20
          "
        >
          <p
            className="
              text-sm
              leading-relaxed
              text-white
              break-words
            "
          >
            {msg.text}
          </p>
        </div>

        {/* TIME */}
        <p
          className="
            mt-1
            mr-2
            text-right
            text-[10px]
            font-medium
            text-slate-400
            dark:text-slate-500
          "
        >
          {msg.time}
        </p>

      </div>

      {/* AVATAR */}
      <UserAvatar />

    </motion.div>
  );
}