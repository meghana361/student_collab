// import { assets, footer_data } from '../assets/assets'

// const Footer = () => {
//   return (
//     <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-indigo-50'>
//       <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-12 border-b border-indigo-200/40 text-slate-600'>

//         {/* ─── Logo & Description ─── */}
//         <div>
//           <img
//             src={assets.CampusHive}
//             alt="CampusHive logo"
//             className='w-32 sm:w-44'
//           />
//           <p className='max-w-[420px] mt-6 text-sm leading-relaxed text-slate-600'>
//             CampusHive is a student-focused knowledge and collaboration platform
//             where learners share notes, projects, internship experiences, and
//             placement insights. Built to support peer learning, growth, and
//             meaningful academic collaboration.
//           </p>
//         </div>

//         {/* ─── Footer Links ─── */}
//         <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-8'>
//           {footer_data.map((section, index) => (
//             <div key={index}>
//               <h3 className='font-semibold text-base text-slate-900 mb-3'>
//                 {section.title}
//               </h3>
//               <ul className='text-sm space-y-2'>
//                 {section.links.map((link, i) => (
//                   <li key={i}>
//                     <a
//                       href="#"
//                       className='text-slate-600 hover:text-indigo-600 transition'
//                     >
//                       {link}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//       </div>

//       {/* ─── Copyright ─── */}
//       <p className='py-5 text-center text-sm md:text-base text-slate-500'>
//         © 2025 CampusHive. Built by students, for students.
//       </p>
//     </div>
//   )
// }

// export default Footer
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-slate-50'>
      <div className='flex flex-col items-center text-center py-10 border-t border-slate-200'>

        {/* Logo */}
        <img
          src={assets.CampusHive}
          alt="CampusHive logo"
          className='w-28 sm:w-32 mb-4'
        />

        {/* Short description */}
        <p className='max-w-md text-sm text-slate-600 leading-relaxed'>
          CampusHive is a student platform to share notes, projects,
          internships, and placement experiences.
        </p>

      </div>

      {/* Copyright */}
      <p className='py-4 text-center text-xs text-slate-500'>
        © 2025 CampusHive
      </p>
    </div>
  )
}

export default Footer
