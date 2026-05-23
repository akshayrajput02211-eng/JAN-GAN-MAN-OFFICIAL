"use client";

import { useState } from "react";

import ChatHeader from "./ChatHeader";
import BotMessage from "./BotMessage";
import UserMessage from "./UserMessage";
import ChatInput from "./ChatInput";

import TypingIndicator from "./TypingIndicator";

import RobotAssistant from "../robot/RobotAssistant";
import ButterflyField from "../butterflies/ButterflyField";

import { initialMessages } from "@/data/chatData";
import { Message } from "@/types/chat";

export default function AIChatPage() {

  const [messages, setMessages] =
    useState<Message[]>(initialMessages);

  const [input, setInput] = useState("");

  const [typing, setTyping] = useState(false);

  function getTime() {
    return new Date().toLocaleTimeString("hi-IN", {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  function sendMessage() {

    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      type: "user",
      text: input,
      time: getTime(),
    };

    setMessages((prev) => [...prev, userMsg]);

    setInput("");

    setTyping(true);

    setTimeout(() => {

      const botMsg: Message = {
        id: Date.now() + 1,
        type: "bot",
        text: "Main aapke liye answer dhundh raha hoon 🔍",
        time: getTime(),
      };

      setTyping(false);

      setMessages((prev) => [...prev, botMsg]);

    }, 1500);
  }

  return (
    <div className="relative flex h-screen flex-col overflow-hidden">

      {/* BACKGROUND EFFECTS */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          overflow-hidden
        "
      >

        {/* BUTTERFLIES */}
        <ButterflyField />

        {/* ROBOT */}
        <div
          className="
            absolute
            right-0
            top-24
            hidden
            xl:flex
            z-10
          "
        >
          <RobotAssistant />
        </div>

        {/* GLOW */}
        <div
          className="
            absolute
            left-1/2
            top-1/3
            h-[400px]
            w-[400px]
            -translate-x-1/2
            rounded-full
            bg-violet-500/10
            blur-3xl
          "
        />

      </div>

      {/* CHAT AREA */}
      <div
        className="
          relative
          z-20
          flex-1
          overflow-y-auto
          px-4
          pt-28
          pb-44
        "
      >

        <div className="mx-auto max-w-3xl space-y-5">

          {/* HEADER */}
          <ChatHeader />

          {/* MESSAGES */}
          {messages.map((msg) =>
            msg.type === "bot" ? (
              <BotMessage
                key={msg.id}
                msg={msg}
              />
            ) : (
              <UserMessage
                key={msg.id}
                msg={msg}
              />
            )
          )}

          {/* TYPING */}
          {typing && <TypingIndicator />}

        </div>
      </div>

      {/* INPUT */}
      <div className="relative z-30">
        <ChatInput
          input={input}
          setInput={setInput}
          sendMessage={sendMessage}
        />
      </div>

    </div>
  );
}