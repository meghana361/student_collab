import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className="flex flex-col border-r border-indigo-200 min-h-full pt-6 bg-indigo-50">

      {/* Dashboard */}
      <NavLink
        end={true}
        to="/admin"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer transition duration-200 rounded-l-lg ${
            isActive
              ? 'bg-indigo-100 border-r-4 border-indigo-600 text-indigo-700'
              : 'hover:bg-indigo-100 text-slate-700'
          }`
        }
      >
        <img src={assets.home_icon} alt="home" className="min-w-4 w-5" />
        <p className="hidden md:inline-block font-medium">Dashboard</p>
      </NavLink>

      {/* Add Blog */}
      <NavLink
        to="/admin/addBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer transition duration-200 rounded-l-lg ${
            isActive
              ? 'bg-indigo-100 border-r-4 border-indigo-600 text-indigo-700'
              : 'hover:bg-indigo-100 text-slate-700'
          }`
        }
      >
        <img src={assets.add_icon} alt="add" className="min-w-4 w-5" />
        <p className="hidden md:inline-block font-medium">Add Posts/Stories</p>
      </NavLink>

      {/* Blog List */}
      <NavLink
        to="/admin/listBlog"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer transition duration-200 rounded-l-lg ${
            isActive
              ? 'bg-indigo-100 border-r-4 border-indigo-600 text-indigo-700'
              : 'hover:bg-indigo-100 text-slate-700'
          }`
        }
      >
        <img src={assets.list_icon} alt="list" className="min-w-4 w-5" />
        <p className="hidden md:inline-block font-medium">Your Posts</p>
      </NavLink>

      {/* Comments */}
      <NavLink
        to="/admin/comments"
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer transition duration-200 rounded-l-lg ${
            isActive
              ? 'bg-indigo-100 border-r-4 border-indigo-600 text-indigo-700'
              : 'hover:bg-indigo-100 text-slate-700'
          }`
        }
      >
        <img src={assets.comment_icon} alt="comments" className="min-w-4 w-5" />
        <p className="hidden md:inline-block font-medium">Comments</p>
      </NavLink>

    </div>
  )
}

export default Sidebar
