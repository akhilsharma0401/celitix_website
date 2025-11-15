// components/ChatLauncher.jsx
"use client";

import { useEffect, useState } from "react";
import { FiMessageCircle, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import ChatWindow from "./ChatWindow";
import { CELITIX_FAV_ICON, chat } from "../../../../public/assets/images";
import Image from 'next/image';
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
export default function ChatLauncher() {
  const [open, setOpen] = useState(false);


  const [showBubble, setShowBubble] = useState(true);

  async function generateSessionId() {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_CHAT_URL}/generateSession`)
      console.log("res", res)
      Cookies.set('session_id', res?.data?.sessionId, { expires: 1 })
      return res?.data?.sessionId
    }
    catch (e) {
      toast.error("Error generating session id. Please try again later.");
    }
  }
  useEffect(() => {
    if (!open) return
    generateSessionId()
  }, [open])

  // Toggle bubble visibility every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setShowBubble(prev => !prev);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const buttonVariants = {
    idle: { scale: 1 },
    hover: { scale: 1.1 },
    tap: { scale: 0.95 },
    pulse: { scale: [1, 1.05, 1], transition: { repeat: Infinity, duration: 2 } }
  };

  const toggleOpen = () => {
    setOpen(v => !v);
    // Hide bubble when chat opens
    if (!open) setShowBubble(false);
  };

  return (
    <>
      <AnimatePresence>
        {!open && showBubble && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-24 right-3 z-[60]  flex flex-col items-center"
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-500 rounded-full px-3 py-1 text-xs font-semibold text-white uppercase tracking-wide">
              Need help?
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mt-2 h-1 w-6 bg-gradient-to-r from-purple-600 to-pink-500 rounded"
            />
          </motion.div>
        )}
      </AnimatePresence>
      {/* Floating toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 flex bg-[#9B44B6] items-center justify-center rounded-full  text-white shadow-xl  transition-transform"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          <FiX size={28} />
        ) : (
          // Option A: Next.js Image
          <Image
            src={chat}
            alt="Celitix"
            width={65}
            height={65}
            priority
          />

          /* Option B: plain <img>
          <img
            src={CELITIX_FAV_ICON_SRC}
            alt="Celitix"
            className="w-7 h-7 object-contain"
          />
          */
        )}
      </button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="chat-panel"
            className="fixed bottom-6 right-6 z-50 flex w-75 md:w-80 h-[400px] flex-col rounded-2xl bg-white shadow-2xl border border-gray-200 "
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <ChatWindow onClose={() => {
              setOpen(false)

              generateSessionId()
            }} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
