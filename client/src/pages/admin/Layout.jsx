// // import React from 'react';
// // import { assets } from '../../assets/assets';
// // import { Outlet } from 'react-router-dom';
// // import Sidebar from '../../components/admin/Sidebar';
// // import { useAppContext } from '../../context/AppContext';

// // const Layout = () => {
// //   const { axios, setToken, navigate } = useAppContext();

// //   const logout = () => {
// //     localStorage.removeItem('token');
// //     axios.defaults.headers.common['Authorization'] = null;
// //     setToken(null);
// //     navigate('/');
// //   };

// //   return (
// //     <>
// //       {/* Top Navbar */}
// //       <div className='flex items-center justify-between h-[60px] px-6 sm:px-12 border-b border-gray-200 bg-[#f9fbfa]'>
// //         <img
// //           src={assets.healing}
// //           alt="healing-logo"
// //           className='w-20 sm:w-24 cursor-pointer mt-1'
// //           onClick={() => navigate('/')}
// //         />
// //         <button
// //           onClick={logout}
// //           className='text-sm px-6 py-2 text-white rounded-full transition duration-200 shadow mt-1'
// //           style={{
// //             background: 'linear-gradient(90deg, #10b981, #059669)',
// //             boxShadow: '0 6px 18px rgba(14,166,106,0.25)',
// //           }}
// //         >
// //           Logout
// //         </button>
// //       </div>

// //       {/* Main layout */}
// //       <div className='flex h-[calc(100vh-60px)] bg-[#f1fdfb] pt-5'>
// //         <Sidebar />
// //         <Outlet />
// //       </div>
// //     </>
// //   );
// // };

// // export default Layout;
// import React from 'react'
// import { assets } from '../../assets/assets'
// import { Outlet } from 'react-router-dom'
// import Sidebar from '../../components/admin/Sidebar'
// import { useAppContext } from '../../context/AppContext'

// const Layout = () => {
//   const { axios, setToken, navigate } = useAppContext()

//   const logout = () => {
//     localStorage.removeItem('token')
//     axios.defaults.headers.common['Authorization'] = null
//     setToken(null)
//     navigate('/')
//   }

//   return (
//     <>
//       {/* Top Navbar */}
//       <div className="flex items-center justify-between h-[60px] px-6 sm:px-12 border-b border-indigo-200 bg-indigo-50">
//         <img
//           src={assets.CampusHive}
//           alt="logo"
//           className="w-24 cursor-pointer"
//           onClick={() => navigate('/')}
//         />

//         <button
//           onClick={logout}
//           className="text-sm px-6 py-2 text-white rounded-full transition shadow cursor-pointer"
//           style={{
//             background: 'linear-gradient(90deg, #2563EB, #4F46E5)',
//             boxShadow: '0 6px 18px rgba(37,99,235,0.35)',
//           }}
//         >
//           Logout
//         </button>
//       </div>

//       {/* Main layout */}
//       <div className="flex h-[calc(100vh-60px)] bg-indigo-50 pt-5">
//         <Sidebar />
//         <Outlet />
//       </div>
//     </>
//   )
// }

// export default Layout
import React from 'react'
import { assets } from '../../assets/assets'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../components/admin/Sidebar'
import { useAppContext } from '../../context/AppContext'

const Layout = () => {
  const { axios, setToken, navigate } = useAppContext()

  const logout = () => {
    localStorage.removeItem('token')
    axios.defaults.headers.common['Authorization'] = null
    setToken(null)
    navigate('/')
  }

  return (
    <div className="h-screen flex flex-col bg-indigo-50">

      {/* ─────────── Top Navbar ─────────── */}
      <div className="flex items-center justify-between px-6 sm:px-12 py-4">

        {/* Left: Branding */}
        <div className="flex items-center gap-4">
          <img
            src={assets.CampusHive}
            alt="logo"
            onClick={() => navigate('/')}
            className="w-24 h-24 rounded-full object-cover cursor-pointer bg-white p-1 shadow-md"
          />

          <div>
            <h1 className="text-xl font-bold text-indigo-700">
              CampusHive
            </h1>
            <p className="text-md text-slate-500">
              Share ideas · Manage posts · Build community
            </p>
          </div>
        </div>

        {/* Center: Fancy Heading */}
        <div className="hidden md:flex items-center px-6 py-2 rounded-full
                        bg-gradient-to-r from-indigo-500/10 via-indigo-400/10 to-indigo-500/10
                        border border-indigo-200 shadow-sm mr-29">
          <span className="text-sm font-semibold tracking-wide
                           bg-gradient-to-r from-indigo-600 to-violet-600
                           bg-clip-text text-transparent">
            ✨ Express • Educate • Elevate
          </span>
        </div>

        {/* Right: Logout */}
        <button
          onClick={logout}
          className="text-sm px-6 py-2 text-white rounded-full transition shadow cursor-pointer hover:scale-[1.03]"
          style={{
            background: 'linear-gradient(90deg, #2563EB, #4F46E5)',
            boxShadow: '0 6px 18px rgba(37,99,235,0.35)',
          }}
        >
          Logout
        </button>
      </div>

      {/* ─────────── Main Section ─────────── */}
      <div className="flex flex-1 overflow-hidden px-6 pb-6">
        <div className="flex w-full bg-white rounded-2xl shadow-lg border border-indigo-100 overflow-hidden">

          {/* Sidebar */}
          <div className="w-64 shrink-0 bg-indigo-50 border-r border-indigo-100">
            <Sidebar />
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            <Outlet />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Layout

