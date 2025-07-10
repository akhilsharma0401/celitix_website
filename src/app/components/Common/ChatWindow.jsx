import { useState, useRef, useEffect } from "react";
import { FiSend, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { CELITIX_FAV_ICON } from "../../../../public/assets/images";


function TypingText({ text, onComplete }) {
  const [display, setDisplay] = useState("");
  useEffect(() => {
    let idx = 0;
    const interval = setInterval(() => {
      setDisplay(text.slice(0, ++idx));
      if (idx === text.length) {
        clearInterval(interval);
        onComplete?.();
      }
    }, 30);
    return () => clearInterval(interval);
  }, [text, onComplete]);
  return <span>{display}</span>;
}

export default function ChatWindow({ onClose }) {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Welcome to Celitix!", isTyping: false },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef();

  // auto-scroll
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    // add user message
    setMessages((m) => [...m, { from: "user", text: input }]);
    setInput("");

    // add typing indicator
    setMessages((m) => [...m, { from: "bot", text: "", isTyping: true }]);

    try {
      const res = await fetch("https://570ad9b9dac7.ngrok-free.app/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": "YmcD26P9FrIx",
        },
        body: JSON.stringify({ question: input }),
      });
      const { answer } = await res.json();

      // replace typing indicator with animated text
      setMessages((m) => {
        // remove typing placeholder
        const withoutTyping = m.filter((msg) => !msg.isTyping);
        return [...withoutTyping, { from: "bot", text: answer, isTyping: false }];
      });
    } catch (err) {
      console.error("Chat API error:", err);
      setMessages((m) => [
        ...m.filter((msg) => !msg.isTyping),
        { from: "bot", text: "Oops! Something went wrong.", isTyping: false },
      ]);
    }
  };

  return (
    <div className="flex h-full flex-col">
      {/* Header */}
      <header className="flex items-center justify-between bg-[#873AA0] px-4 py-2 rounded-t-2xl text-white">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full">
            <Image
              src={CELITIX_FAV_ICON}
              alt="Celitix"
              width={25}
              height={25}
              priority
            />
          </div>
          <div>
            <h2 className="font-semibold text-lg leading-tight heading">Celitix</h2>
            <p className="text-xs opacity-75 sub-heading">Online</p>
          </div>
        </div>
        <button onClick={onClose} aria-label="Close chat" className="p-1 hover:bg-white/20 rounded">
          <FiX size={20} />
        </button>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-auto bg-white p-4 space-y-3">
        <AnimatePresence initial={false}>
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.15 }}
              className={`flex ${msg.from === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[70%] px-4 py-2 text-sm leading-snug whitespace-pre-wrap break-words ${
                  msg.from === "user"
                    ? "bg-[#873bcae7] text-white rounded-l-lg rounded-tr-lg shadow-lg sub-heading"
                    : "bg-gray-100 text-gray-800 rounded-r-lg rounded-bl-lg shadow sub-heading text-wrap whitespace-pre-wrap"
                }`}
              >
               {msg.from === "user" ? (
                  msg.text
                ) : msg.isTyping ? (
                  <span className="italic text-gray-400 sub-heading">Typing...</span>
                ) : (
                  <TypingText text={msg.text} />
                )}
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div className="border-t bg-gray-50 px-4 py-3 flex items-center rounded-b-2xl">
        <textarea
          rows={1}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message…"
          className="flex-1 resize-none px-3 py-2 sub-heading rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#873AA0]"
          onKeyDown={(e) =>
            e.key === "Enter" &&
            !e.shiftKey &&
            (e.preventDefault(), sendMessage())
          }
        />
        <button
          onClick={sendMessage}
          className="ml-2 p-2 bg-[#873AA0] rounded-full text-white hover:bg-[#6b2d81] transition"
          aria-label="Send message"
        >
          <FiSend size={20} />
        </button>
      </div>
    </div>
  );
}
