// "use client";

// import { useState } from "react";

// import BackgroundScene from "./BackgroundScene";

// import RobotFloat from "../robot/RobotFloat";

// import TopicCard from "../shared/TopicCard";

// import SuggestionChips from "../chat/SuggestionChips";

// import ChatWindow from "../chat/ChatWindow";

// import ChatInput from "../chat/ChatInput";

// import BottomNav from "../shared/BottomNav";

// const topicCards = [
//   {
//     title: "Naukri",
//     desc: "Govt jobs help",
//   },

//   {
//     title: "Health",
//     desc: "Medical support",
//   },

//   {
//     title: "Krishi",
//     desc: "Mandi & farming",
//   },

//   {
//     title: "Yojana",
//     desc: "Govt schemes",
//   },
// ];

// export default function AiLayout() {
//   const [messages, setMessages] =
//     useState<any[]>([]);

//   const [typing, setTyping] =
//     useState(false);

//   const sendMessage = (
//     text: string
//   ) => {
//     if (!text.trim()) return;

//     const userMessage = {
//       role: "user",
//       text,
//     };

//     setMessages((prev) => [
//       ...prev,
//       userMessage,
//     ]);

//     setTyping(true);

//     setTimeout(() => {
//       setMessages((prev) => [
//         ...prev,
//         {
//           role: "ai",
//           text: `AI Sahayak: "${text}" ke liye help ready hai 🚀`,
//         },
//       ]);

//       setTyping(false);
//     }, 1500);
//   };

//   return (
//     <main
//       className="
//         relative

//         min-h-screen

//         overflow-hidden

//         bg-[#f8fafc]
//         dark:bg-slate-950
//       "
//     >

//       {/* BG */}

//       <div
//         className={`
//           absolute
//           inset-0

//           transition-all
//           duration-500

//           ${
//             messages.length > 0
//               ? "blur-sm scale-105"
//               : ""
//           }
//         `}
//       >
//         <BackgroundScene />
//       </div>

//       {/* CONTENT */}

//       <div
//         className="
//           relative
//           z-20

//           flex
//           min-h-screen
//           flex-col
//         "
//       >

//         {/* WELCOME */}

//         {messages.length === 0 ? (
//           <div
//             className="
//               flex-1

//               px-4
//               pt-16
//               pb-40
//             "
//           >

//             <RobotFloat />

//             <div className="mt-8 text-center">

//               <h1
//                 className="
//                   text-4xl
//                   md:text-5xl

//                   font-black

//                   text-slate-900
//                   dark:text-white
//                 "
//               >
//                 Kya poochna hai?
//               </h1>

//               <p
//                 className="
//                   mt-3

//                   text-slate-600
//                   dark:text-slate-300
//                 "
//               >
//                 AI Sahayak aapki madad ke liye ready hai.
//               </p>

//             </div>

//             {/* TOPICS */}

//             <div
//               className="
//                 mt-10

//                 grid
//                 grid-cols-2

//                 gap-4
//               "
//             >

//               {topicCards.map((item) => (
//                 <TopicCard
//                   key={item.title}
//                   title={item.title}
//                   desc={item.desc}
//                 />
//               ))}

//             </div>

//             {/* CHIPS */}

//             <SuggestionChips
//               onSelect={sendMessage}
//             />

//           </div>
//         ) : (
//           <ChatWindow
//             messages={messages}
//             typing={typing}
//           />
//         )}

//         {/* INPUT */}

//         <ChatInput
//           onSend={sendMessage}
//         />

//         {/* NAV */}

//         <BottomNav />

//       </div>

//     </main>
//   );
// }