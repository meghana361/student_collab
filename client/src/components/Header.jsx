// import React, { useRef, useEffect, useState } from 'react'
// import { assets } from '../assets/assets'
// import { useAppContext } from '../context/AppContext'

// const Header = () => {
//   const { setInput, input } = useAppContext()
//   const inputRef = useRef()

//   const placeholders = [
//     "Search notes...",
//     "Search projects...",
//     "Search internships...",
//     "Search placement experiences..."
//   ]

//   const [placeholderText, setPlaceholderText] = useState(placeholders[0])

//   const phraseIndexRef = useRef(0)
//   const charIndexRef = useRef(0)
//   const deletingRef = useRef(false)
//   const timeoutRef = useRef(null)

//   useEffect(() => {
//     const typeSpeed = 55
//     const deleteSpeed = 35
//     const pauseAfterType = 1200

//     const scheduleNext = () => {
//       if (inputRef.current?.value) return

//       const phrase = placeholders[phraseIndexRef.current]

//       if (!deletingRef.current) {
//         charIndexRef.current++
//         setPlaceholderText(phrase.slice(0, charIndexRef.current))

//         if (charIndexRef.current === phrase.length) {
//           timeoutRef.current = setTimeout(() => {
//             deletingRef.current = true
//           }, pauseAfterType)
//         }
//       } else {
//         charIndexRef.current--
//         setPlaceholderText(phrase.slice(0, charIndexRef.current))

//         if (charIndexRef.current === 0) {
//           deletingRef.current = false
//           phraseIndexRef.current =
//             (phraseIndexRef.current + 1) % placeholders.length
//         }
//       }

//       timeoutRef.current = setTimeout(
//         scheduleNext,
//         deletingRef.current ? deleteSpeed : typeSpeed
//       )
//     }

//     timeoutRef.current = setTimeout(scheduleNext, 400)
//     return () => clearTimeout(timeoutRef.current)
//   }, [])

//   const onSubmitHandler = (e) => {
//     e.preventDefault()
//     setInput(inputRef.current.value)
//   }

//   const onClear = () => {
//     setInput('')
//     if (inputRef.current) inputRef.current.value = ''
//   }

//   return (
//     <div
//       className="mx-4 sm:mx-10 xl:mx-10 relative px-6 py-6 text-center
//                  rounded-2xl shadow-[0_18px_40px_rgba(37,99,235,0.18)]"
//       style={{
//         ['--primary']: '#2563EB',
//         ['--secondary']: '#4F46E5',
//         ['--text']: '#0F172A',
//         ['--muted']: '#475569',
//         background: 'linear-gradient(180deg, #F7F9FF, #EEF2FF)'
//       }}
//     >
//       {/* Badge */}
//       <div
//         className="inline-flex items-center justify-center gap-2 px-5 py-1 mb-6
//                    rounded-full text-xs font-medium mx-auto"
//         style={{
//           border: '1px solid rgba(37,99,235,0.25)',
//           backgroundColor: 'rgba(37,99,235,0.06)',
//           color: 'var(--primary)'
//         }}
//       >
//         🚀 Notes · Projects · Internships
//       </div>

//       {/* Title */}
//       <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-[var(--text)]">
//         Collaboration{" "}
//         <span className="text-indigo-600">Platform</span>
//       </h1>

//       {/* Subtitle */}
//       <p
//         className="mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
//         style={{ color: 'var(--muted)' }}
//       >
//         Explore peer-written notes, real-world projects, internship journeys,
//         placement experiences, and collaborative learning.
//       </p>

//       {/* Search */}
//       <form
//         onSubmit={onSubmitHandler}
//         className="flex max-w-2xl mx-auto mt-6 mb-3 rounded-xl
//                    overflow-hidden bg-white border"
//         style={{
//           borderColor: 'rgba(37,99,235,0.22)',
//           boxShadow: '0 10px 30px rgba(37,99,235,0.18)'
//         }}
//       >
//         <input
//           ref={inputRef}
//           type="text"
//           placeholder={placeholderText}
//           className="w-full px-5 py-3 text-sm outline-none"
//           style={{ color: 'var(--text)' }}
//         />
//         <button
//           type="submit"
//           className="px-6 m-1 rounded-lg font-semibold text-sm
//                      transition-colors"
//           style={{
//             background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
//             color: '#fff'
//           }}
//         >
//           Search
//         </button>
//       </form>

//       {/* Helper */}
//       <p className="text-xs text-[var(--muted)] mb-6">
//         Search by topic, skill, internship, project, or experience
//       </p>

//       {input && (
//         <button
//           onClick={onClear}
//           className="text-xs px-4 py-1.5 rounded-full border
//                      hover:bg-indigo-50 transition"
//           style={{
//             borderColor: 'rgba(15,23,42,0.12)',
//             color: 'var(--text)',
//             backgroundColor: '#fff'
//           }}
//         >
//           Clear Search
//         </button>
//       )}

//       {/* Divider */}
//       <div className="mt-8 h-px w-24 mx-auto
//                       bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />

//       {/* Background Decoration */}
//       <img
//         src={assets.gradientBackground}
//         alt=""
//         className="absolute -top-40 left-0 right-0 w-full opacity-30 -z-10"
//       />
//     </div>
//   )
// }

// export default Header















import React, { useRef, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";

const Header = () => {
  const { setInput, input } = useAppContext();
  const inputRef = useRef();

  const placeholders = [
    "Search notes...",
    "Search projects...",
    "Search internships...",
    "Search placement experiences...",
  ];

  const [placeholderText, setPlaceholderText] = useState(placeholders[0]);

  const phraseIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const deletingRef = useRef(false);
  const timeoutRef = useRef(null);

  // 🔤 Typing placeholder animation
  useEffect(() => {
    const typeSpeed = 55;
    const deleteSpeed = 35;
    const pauseAfterType = 1200;

    const scheduleNext = () => {
      if (inputRef.current?.value) return;

      const phrase = placeholders[phraseIndexRef.current];

      if (!deletingRef.current) {
        charIndexRef.current++;
        setPlaceholderText(phrase.slice(0, charIndexRef.current));

        if (charIndexRef.current === phrase.length) {
          timeoutRef.current = setTimeout(
            () => (deletingRef.current = true),
            pauseAfterType
          );
        }
      } else {
        charIndexRef.current--;
        setPlaceholderText(phrase.slice(0, charIndexRef.current));

        if (charIndexRef.current === 0) {
          deletingRef.current = false;
          phraseIndexRef.current =
            (phraseIndexRef.current + 1) % placeholders.length;
        }
      }

      timeoutRef.current = setTimeout(
        scheduleNext,
        deletingRef.current ? deleteSpeed : typeSpeed
      );
    };

    timeoutRef.current = setTimeout(scheduleNext, 400);
    return () => clearTimeout(timeoutRef.current);
  }, []);

  const onClear = () => {
    setInput("");
    if (inputRef.current) inputRef.current.value = "";
  };

  return (
    <div
      className="mx-4 sm:mx-10 xl:mx-10 relative px-6 py-6 text-center
                 rounded-2xl shadow-[0_18px_40px_rgba(37,99,235,0.18)]"
      style={{
        ["--primary"]: "#2563EB",
        ["--secondary"]: "#4F46E5",
        ["--text"]: "#0F172A",
        ["--muted"]: "#475569",
        background: "linear-gradient(180deg, #F7F9FF, #EEF2FF)",
      }}
    >
      {/* Badge */}
      <div
        className="inline-flex items-center justify-center gap-2 px-5 py-1 mb-6
                   rounded-full text-xs font-medium mx-auto"
        style={{
          border: "1px solid rgba(37,99,235,0.25)",
          backgroundColor: "rgba(37,99,235,0.06)",
          color: "var(--primary)",
        }}
      >
        🚀 Notes · Projects · Internships
      </div>

      {/* Title */}
      <h1 className="text-3xl sm:text-5xl font-extrabold leading-tight text-[var(--text)]">
        Collaboration <span className="text-indigo-600">Platform</span>
      </h1>

      {/* Subtitle */}
      <p
        className="mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
        style={{ color: "var(--muted)" }}
      >
        Explore peer-written notes, real-world projects, internship journeys,
        placement experiences, and collaborative learning.
      </p>

      {/* 🔍 SEARCH (FIXED) */}
      <div
        className="flex max-w-2xl mx-auto mt-6 mb-3 rounded-xl
                   overflow-hidden bg-white border"
        style={{
          borderColor: "rgba(37,99,235,0.22)",
          boxShadow: "0 10px 30px rgba(37,99,235,0.18)",
        }}
      >
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholderText}
          value={input}                       
          onChange={(e) => setInput(e.target.value)} 
          className="w-full px-5 py-3 text-sm outline-none"
          style={{ color: "var(--text)" }}
        />

        <button
          type="button"
          className="px-6 m-1 rounded-lg font-semibold text-sm cursor-pointer"
          
          style={{
            background:
              "linear-gradient(90deg, var(--primary), var(--secondary))",
            color: "#fff",
          }}
        >
          Search
        </button>
      </div>

      {/* Helper */}
      <p className="text-xs text-[var(--muted)] mb-6">
        Search by topic, skill, internship, project, or experience
      </p>

      {/* Clear */}
      {input && (
        <button
          onClick={onClear}
          className="text-xs px-4 py-1.5 rounded-full border
                     hover:bg-indigo-50 transition"
          style={{
            borderColor: "rgba(15,23,42,0.12)",
            color: "var(--text)",
            backgroundColor: "#fff",
          }}
        >
          Clear Search
        </button>
      )}

      {/* Divider */}
      <div className="mt-8 h-px w-24 mx-auto
                      bg-gradient-to-r from-transparent via-indigo-300 to-transparent" />

      {/* Background */}
      <img
        src={assets.gradientBackground}
        alt=""
        className="absolute -top-40 left-0 right-0 w-full opacity-30 -z-10"
      />
    </div>
  );
};

export default Header;

