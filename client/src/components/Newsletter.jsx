// import React, { useState } from 'react'
// import toast from 'react-hot-toast'

// const Newsletter = () => {
//   const [email, setEmail] = useState('')

//   const handleSubscribe = (e) => {
//     e.preventDefault()

//     if (!email) {
//       toast.error('Please enter your email')
//       return
//     }

//     toast.success('Subscribed successfully 🎉')
//     setEmail('')
//   }

//   return (
//     <div
//       className="flex flex-col items-center justify-center text-center space-y-3 my-32 px-4"
//       style={{
//         ['--primary']: '#2563EB',
//         ['--secondary']: '#4F46E5',
//         ['--text']: '#0F172A',
//         ['--muted']: '#64748B'
//       }}
//     >
//       <h1 className="md:text-4xl text-2xl font-semibold text-[var(--text)]">
//         Stay Connected with College Events
//       </h1>

//       <p className="md:text-lg text-[var(--muted)] pb-6 max-w-xl">
//         Subscribe to receive updates about college events, workshops,
//         hackathons, internship drives, and important announcements.
//       </p>

//       <form
//         onSubmit={handleSubscribe}
//         className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12 shadow-md rounded-lg overflow-hidden bg-white/80 backdrop-blur"
//         style={{ border: '1px solid rgba(37,99,235,0.2)' }}
//       >
//         <input
//           className="outline-none w-full px-3 h-full text-[var(--text)] placeholder-[var(--muted)]"
//           type="email"
//           placeholder="Enter your college email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />

//         <button
//           type="submit"
//           className="md:px-14 px-10 h-full text-white font-medium transition-all cursor-pointer"
//           style={{
//             background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
//             boxShadow: '0 6px 18px rgba(37,99,235,0.25)'
//           }}
//         >
//           Subscribe
//         </button>
//       </form>
//     </div>
//   )
// }



import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubscribe = (e) => {
    e.preventDefault()

    if (!email) {
      toast.error('Please enter your email')
      return
    }

    toast.success('You’re now connected 🎉')
    setEmail('')
  }

  return (
    <div
      className="flex flex-col items-center justify-center text-center space-y-5 my-28 px-4"
      style={{
        ['--primary']: '#2563EB',
        ['--secondary']: '#4F46E5',
        ['--text']: '#0F172A',
        ['--muted']: '#64748B'
      }}
    >
      {/* Title */}
      <h1 className="md:text-4xl text-2xl font-semibold text-[var(--text)]">
        Stay Connected with Your Campus
      </h1>

      {/* Description */}
      <p className="md:text-lg text-[var(--muted)] max-w-xl">
        Get updates on college events, workshops, hackathons,
        internship drives, and important student announcements.
      </p>

      {/* ACTION BUTTONS (ABOVE FORM) */}
      <div className="flex gap-4 pt-2">
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2.5 rounded-lg text-sm font-medium text-white transition"
          style={{
            background: 'linear-gradient(90deg, var(--primary), var(--secondary))'
          }}
        >
          Explore Posts
        </button>

        <button
          onClick={() => navigate('/admin')}
          className="px-6 py-2.5 rounded-lg text-sm font-medium border transition hover:bg-indigo-50"
          style={{
            borderColor: 'var(--primary)',
            color: 'var(--primary)'
          }}
        >
          Create Post
        </button>
      </div>

      {/* Email Subscription Form */}
      <form
        onSubmit={handleSubscribe}
        className="flex items-center justify-between max-w-2xl w-full md:h-13 h-12 shadow-md rounded-lg overflow-hidden bg-white/80 backdrop-blur"
        style={{ border: '1px solid rgba(37,99,235,0.2)' }}
      >
        <input
          type="email"
          placeholder="Enter your college email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="outline-none w-full px-3 h-full text-[var(--text)] placeholder-[var(--muted)]"
        />

        <button
          type="submit"
          className="md:px-10 px-8 h-full text-white font-medium transition-all cursor-pointer"
          style={{
            background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
            boxShadow: '0 6px 18px rgba(37,99,235,0.25)'
          }}
        >
          Stay Connected
        </button>
      </form>
    </div>
  )
}

export default Newsletter




//  <div className="flex gap-4 pt-4">
//         <button
//           onClick={() => navigate('/')}
//           className="px-6 py-2.5 rounded-lg text-sm font-medium text-white transition"
//           style={{
//             background: 'linear-gradient(90deg, var(--primary), var(--secondary))'
//           }}
//         >
//           Explore Posts
//         </button>