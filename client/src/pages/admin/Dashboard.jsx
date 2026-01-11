// import React, { useEffect, useState } from 'react'
// import { assets, dashboard_data } from '../../assets/assets'
// import BlogTableItem from '../../components/admin/BlogTableItem'
// import { useAppContext } from '../../context/AppContext'
// import toast from 'react-hot-toast'

// const Dashboard = () => {

//     const [dashboardData, setDashboardData] = useState({
//         blogs: 0,
//         comments: 0,
//         drafts: 0,
//         recentBlogs: []
//     })

//     const { axios } = useAppContext()

//      const fetchDashboard = async ()=>{
//        try {
//          const {data} = await axios.get('/api/admin/dashboard')
//          data.success ? setDashboardData(data.dashboardData) : toast.error(data.message)
//        } catch (error) {
//             toast.error(error.message)
//        }
//      }

//      useEffect(()=>{
//         fetchDashboard()
//      },[])

//   return (
//     <div className='flex-1 p-4 md:p-10 bg-blue-50/50'>

//         <div className='flex flex-wrap gap-4'>

//             <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
//                 <img src={assets.dashboard_icon_1} alt="" />
//                 <div>
//                     <p className='text-xl font-semibold text-gray-600'>{dashboardData.blogs}</p>
//                     <p className='text-gray-400 font-light'>Blogs</p>
//                 </div>
//             </div>

//             <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
//                 <img src={assets.dashboard_icon_2} alt="" />
//                 <div>
//                     <p className='text-xl font-semibold text-gray-600'>{dashboardData.comments}</p>
//                     <p className='text-gray-400 font-light'>Comments</p>
//                 </div>
//             </div>

//             <div className='flex items-center gap-4 bg-white p-4 min-w-58 rounded shadow cursor-pointer hover:scale-105 transition-all'>
//                 <img src={assets.dashboard_icon_3} alt="" />
//                 <div>
//                     <p className='text-xl font-semibold text-gray-600'>{dashboardData.drafts}</p>
//                     <p className='text-gray-400 font-light'>Drafts</p>
//                 </div>
//             </div>
//         </div>

//         <div>
//             <div className='flex items-center gap-3 m-4 mt-6 text-gray-600'>
//                 <img src={assets.dashboard_icon_4} alt="" />
//                 <p>Latest Blogs</p>
//             </div>

//             <div className='relative max-w-4xl overflow-x-auto shadow rounded-lg scrollbar-hide bg-white'>
//                 <table className='w-full text-sm text-gray-500'>
//                     <thead className='text-xs text-gray-600 text-left uppercase'>
//                         <tr>
//                             <th scope='col' className='px-2 py-4 xl:px-6'> # </th>
//                             <th scope='col' className='px-2 py-4'> Blog Title </th>
//                             <th scope='col' className='px-2 py-4 max-sm:hidden'> Date </th>
//                             <th scope='col' className='px-2 py-4 max-sm:hidden'> Status </th>
//                             <th scope='col' className='px-2 py-4'> Actions </th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {dashboardData.recentBlogs.map((blog, index)=>{
//                             return <BlogTableItem key={blog._id} blog={blog} fetchBlogs={fetchDashboard} index={index + 1}/>
//                         })}
//                     </tbody>
//                 </table>
//             </div>
//         </div>
      
//     </div>
//   )
// }

// export default Dashboard
// import React, { useEffect, useState } from 'react'
// import BlogTableItem from '../../components/admin/BlogTableItem'
// import { useAppContext } from '../../context/AppContext'
// import toast from 'react-hot-toast'

// const Dashboard = () => {
//   const [dashboardData, setDashboardData] = useState({
//     blogs: 0,
//     comments: 0,
//     drafts: 0,
//     recentBlogs: []
//   })

//   const { axios } = useAppContext()

//   const fetchDashboard = async () => {
//     try {
//       const { data } = await axios.get('/api/admin/dashboard')
//       data.success
//         ? setDashboardData(data.dashboardData)
//         : toast.error(data.message)
//     } catch (error) {
//       toast.error(error.message)
//     }
//   }

//   useEffect(() => {
//     fetchDashboard()
//   }, [])

//   return (
//     <div className="flex-1 p-4 md:p-10 bg-indigo-50">

//       {/* ───── Summary Cards ───── */}
//       <div className="flex flex-wrap gap-6 mb-8">

//         {/* Blogs */}
//         <div className="flex items-center gap-4 p-5 min-w-[180px]
//                         bg-white rounded-xl cursor-pointer transition
//                         border border-indigo-100 shadow-sm hover:shadow-md">
//           <div>
//             <p className="text-2xl font-semibold text-indigo-700">
//               {dashboardData.blogs}
//             </p>
//             <p className="text-sm text-slate-500">Blogs</p>
//           </div>
//         </div>

//         {/* Comments */}
//         <div className="flex items-center gap-4 p-5 min-w-[180px]
//                         bg-white rounded-xl cursor-pointer transition
//                         border border-indigo-100 shadow-sm hover:shadow-md">
//           <div>
//             <p className="text-2xl font-semibold text-indigo-700">
//               {dashboardData.comments}
//             </p>
//             <p className="text-sm text-slate-500">Comments</p>
//           </div>
//         </div>

//         {/* Drafts */}
//         <div className="flex items-center gap-4 p-5 min-w-[180px]
//                         bg-white rounded-xl cursor-pointer transition
//                         border border-indigo-100 shadow-sm hover:shadow-md">
//           <div>
//             <p className="text-2xl font-semibold text-indigo-700">
//               {dashboardData.drafts}
//             </p>
//             <p className="text-sm text-slate-500">Drafts</p>
//           </div>
//         </div>

//       </div>

//       {/* ───── Latest Blogs ───── */}
//       <div>
//         <div className="flex items-center gap-3 mb-4">
//           <h2 className="font-semibold text-indigo-700">
//             Latest Blogs
//           </h2>
//         </div>

//         <div className="relative max-w-5xl overflow-x-auto
//                         bg-white rounded-xl shadow-sm
//                         border border-indigo-100">
//           <table className="w-full text-sm text-slate-600">

//             <thead className="text-xs uppercase bg-indigo-50
//                               border-b border-indigo-100 text-indigo-800">
//               <tr>
//                 <th className="px-4 py-3 text-left">#</th>
//                 <th className="px-4 py-3 text-left">e</th>
//                 <th className="px-4 py-3 max-sm:hidden text-left">Date</th>
//                 <th className="px-4 py-3 max-sm:hidden text-left">Status</th>
//                 <th className="px-4 py-3 text-left">Actions</th>
//               </tr>
//             </thead>

//             <tbody className="divide-y divide-indigo-100">
//               {dashboardData.recentBlogs.map((blog, index) => (
//                 <BlogTableItem
//                   key={blog._id}
//                   blog={blog}
//                   fetchBlogs={fetchDashboard}
//                   index={index + 1}
//                 />
//               ))}
//             </tbody>

//           </table>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Dashboard
















import React, { useEffect, useState } from 'react'
import BlogTableItem from '../../components/admin/BlogTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    blogs: 0,
    comments: 0,
    drafts: 0,
    recentBlogs: []
  })

  const { axios } = useAppContext()

  const fetchDashboard = async () => {
    try {
      const { data } = await axios.get('/api/admin/dashboard')
      data.success
        ? setDashboardData(data.dashboardData)
        : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchDashboard()
  }, [])

  return (
    <div className="flex-1 p-4 md:p-10 bg-indigo-50">

      {/* ───────── Summary Cards ───────── */}
      <div className="flex flex-wrap gap-6 mb-10">

        {/* Blogs */}
        <div className="flex items-center gap-4 p-5 min-w-[180px]
                        bg-white rounded-2xl cursor-pointer transition
                        border border-indigo-100
                        shadow-sm hover:shadow-md hover:-translate-y-0.5">
          <div>
            <p className="text-2xl font-semibold text-indigo-700">
              {dashboardData.blogs}
            </p>
            <p className="text-sm text-slate-500">Posts</p>
          </div>
        </div>

        {/* Comments */}
        <div className="flex items-center gap-4 p-5 min-w-[180px]
                        bg-white rounded-2xl cursor-pointer transition
                        border border-indigo-100
                        shadow-sm hover:shadow-md hover:-translate-y-0.5">
          <div>
            <p className="text-2xl font-semibold text-indigo-700">
              {dashboardData.comments}
            </p>
            <p className="text-sm text-slate-500">Comments</p>
          </div>
        </div>

        {/* Drafts
        <div className="flex items-center gap-4 p-5 min-w-[180px]
                        bg-white rounded-2xl cursor-pointer transition
                        border border-indigo-100
                        shadow-sm hover:shadow-md hover:-translate-y-0.5">
          <div>
            <p className="text-2xl font-semibold text-indigo-700">
              {dashboardData.drafts}
            </p>
            <p className="text-sm text-slate-500">Drafts</p>
          </div>
        </div> */}

      </div>

      {/* ───────── Latest Blogs ───────── */}
      <div>
        <div className="flex items-center gap-3 mb-4">
          <h2 className="text-base font-semibold text-indigo-700">
            Latest Blogs
          </h2>
        </div>

        <div className="relative max-w-5xl overflow-x-auto
                        bg-white rounded-2xl
                        border border-indigo-100
                        shadow-sm">

          <table className="w-full text-sm text-slate-600">

            <thead className="text-xs uppercase
                              bg-indigo-50
                              border-b border-indigo-100
                              text-indigo-800">
              <tr>
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Post Title</th>
                <th className="px-4 py-3 max-sm:hidden text-left">Date</th>
                <th className="px-4 py-3 max-sm:hidden text-left">Status</th>
                <th className="px-4 py-3 text-left">Actions</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-indigo-100">
              {dashboardData.recentBlogs.map((blog, index) => (
                <BlogTableItem
                  key={blog._id}
                  blog={blog}
                  fetchBlogs={fetchDashboard}
                  index={index + 1}
                />
              ))}
            </tbody>

          </table>
        </div>
      </div>

    </div>
  )
}

export default Dashboard
