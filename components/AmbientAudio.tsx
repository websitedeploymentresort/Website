// "use client";

// import { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Volume2, VolumeX } from "lucide-react";
// import FloatingLeaf from "./FloatingLeaf";

// export default function AmbientAudio() {
//   const audioRef = useRef<HTMLAudioElement>(null);

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [showLeaf, setShowLeaf] = useState(false);
//   const [showTooltip, setShowTooltip] = useState(false);

//   useEffect(() => {
//     if (localStorage.getItem("heardForest")) return;

//     setShowLeaf(true);

//     const leafTimer = setTimeout(() => {
//       setShowLeaf(false);
//       setShowTooltip(true);
//     }, 6000);

//     return () => clearTimeout(leafTimer);
//   }, []);

//   async function toggleAudio() {
//     if (!audioRef.current) return;

//     const audio = audioRef.current;

//     if (isPlaying) {
//       audio.pause();
//       setIsPlaying(false);
//       return;
//     }

//     try {
//       audio.volume = 1;

//       await audio.play();

//       setIsPlaying(true);

//       setShowTooltip(false);

//       localStorage.setItem("heardForest", "true");
//     } catch (err) {
//       console.error(err);
//       setIsPlaying(false);
//     }
//   }

//   return (
//     <>
//       {/* Background Audio */}
//       <audio
//         ref={audioRef}
//         loop
//         preload="auto"
//         onPause={() => setIsPlaying(false)}
//         onPlay={() => setIsPlaying(true)}
//       >
//         <source src="/audio/ambience.mp3" type="audio/mpeg" />
//       </audio>

//       {/* Animated Leaf */}
//       <AnimatePresence>
//         {showLeaf && <FloatingLeaf />}
//       </AnimatePresence>

//       {/* Tooltip */}
//       <AnimatePresence>
//         {showTooltip && (
//           <motion.div
//             initial={{
//               opacity: 0,
//               y: 20,
//               scale: 0.9,
//             }}
//             animate={{
//               opacity: 1,
//               y: 0,
//               scale: 1,
//             }}
//             exit={{
//               opacity: 0,
//               y: 10,
//               scale: 0.9,
//             }}
//             transition={{
//               duration: 0.4,
//             }}
//             className="
//               fixed
//               bottom-24
//               right-8
//               z-[9998]
//               max-w-[250px]
//               rounded-xl
//               bg-coffee/90
//               backdrop-blur-md
//               px-5
//               py-4
//               shadow-2xl
//             "
//           >
//             <p className="text-sm font-medium text-vanilla">
//               🍃 Enable Nature Sounds
//             </p>

//             <p className="mt-1 text-xs leading-relaxed text-vanilla/70">
//               Experience La Damai with the gentle sounds of nature.
//             </p>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       {/* Sound Button */}
//       <motion.button
//         type="button"
//         onClick={toggleAudio}
//         aria-label={
//           isPlaying
//             ? "Pause ambient audio"
//             : "Play ambient audio"
//         }
//         aria-pressed={isPlaying}
//         whileHover={{
//           scale: 1.12,
//         }}
//         whileTap={{
//           scale: 0.95,
//         }}
//         animate={{
//           scale: showTooltip ? [1, 1.12, 1] : 1,
//           boxShadow: showTooltip
//             ? [
//                 "0 0 0px rgba(0,0,0,0)",
//                 "0 0 25px rgba(194,161,92,0.6)",
//                 "0 0 0px rgba(0,0,0,0)",
//               ]
//             : "0 10px 25px rgba(0,0,0,.25)",
//         }}
//         transition={{
//           duration: 1.5,
//           repeat: showTooltip ? Infinity : 0,
//         }}
//         className="
//           fixed
//           bottom-6
//           right-6
//           z-[10000]
//           flex
//           h-12
//           w-12
//           items-center
//           justify-center
//           rounded-full
//           bg-palm
//           text-vanilla
//           shadow-xl
//         "
//       >
//         {isPlaying ? (
//           <Volume2 size={20} />
//         ) : (
//           <VolumeX size={20} />
//         )}
//       </motion.button>
//     </>
//   );
// }

"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

export default function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show the tooltip on every page load/refresh, regardless of past visits
    setShowTooltip(true);
  }, []);

  async function toggleAudio() {
    if (!audioRef.current) return;
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
      return;
    }

    try {
      audio.volume = 1;
      await audio.play();
      setIsPlaying(true);
      setShowTooltip(false); // hide only once they actually unmute
    } catch (err) {
      console.error(err);
      setIsPlaying(false);
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
        <source src="/audio/ambience.mp3" type="audio/mpeg" />
      </audio>

      <AnimatePresence>
  {showTooltip && (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.92 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 8, scale: 0.92 }}
      transition={{ duration: 0.4 }}
      className="
        fixed bottom-24 right-8 z-[9998]
        max-w-[250px] rounded-xl
        border border-gold/40
        bg-coffee/90 backdrop-blur-md
        px-5 py-4 shadow-2xl
      "
    >
      <div className="flex items-start gap-2">
        <span className="text-lg leading-none">🍃</span>
        <div>
          <p className="text-sm font-medium text-vanilla">
            Experience the Serenity of La Damai
          </p>
          <p className="mt-1 text-xs leading-relaxed text-vanilla/70">
            Turn on the gentle sounds of the forest.
          </p>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>

      <motion.button
        ref={buttonRef}
        type="button"
        onClick={toggleAudio}
        aria-label={isPlaying ? "Pause ambient audio" : "Play ambient audio"}
        aria-pressed={isPlaying}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.95 }}
        animate={{
          scale: showTooltip ? [1, 1.12, 1] : 1,
          boxShadow: showTooltip
            ? ["0 0 0px rgba(0,0,0,0)", "0 0 25px rgba(194,161,92,0.6)", "0 0 0px rgba(0,0,0,0)"]
            : "0 10px 25px rgba(0,0,0,.25)",
        }}
        transition={{ duration: 1.5, repeat: showTooltip ? Infinity : 0 }}
        className="
          fixed bottom-6 right-6 z-[10000]
          flex h-12 w-12 items-center justify-center
          rounded-full bg-palm text-vanilla shadow-xl
        "
      >
        {isPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </motion.button>
    </>
  );
}