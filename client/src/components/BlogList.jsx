import React, { useState } from 'react'
import { blogCategories } from '../assets/assets'
import { motion } from "motion/react"
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'

const BlogList = () => {

  const [menu, setMenu] = useState("All")
  const { blogs, input } = useAppContext()

  const filteredBlogs = () => {
    if (input === '') return blogs

    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(input.toLowerCase()) ||
      blog.category.toLowerCase().includes(input.toLowerCase())
    )
  }

  return (
    <div
      style={{
        ['--primary']: '#2563EB',     // Blue
        ['--secondary']: '#4F46E5',   // Indigo
        ['--accent']: '#38BDF8',      // Sky
        ['--text']: '#0F172A',
        ['--muted']: '#64748B',
        ['--bg']: '#F5F7FF'
      }}
    >
      {/* ─── Category Menu ─── */}
      <div className='flex flex-wrap justify-center gap-4 sm:gap-6 my-12 relative px-4'>
        {blogCategories.map((item) => (
          <div key={item} className='relative'>
            <button
              onClick={() => setMenu(item)}
              className={`cursor-pointer transition-all font-medium text-sm sm:text-base
                ${menu === item
                  ? 'text-white px-6 py-2 rounded-full shadow-lg'
                  : 'text-[var(--muted)] hover:text-[var(--text)] px-4 py-2'
                }`}
              style={{ position: "relative", zIndex: 2 }}
            >
              {item}

              {menu === item && (
                <motion.div
                  layoutId='underline'
                  transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                  className='absolute inset-0 -z-10 rounded-full'
                  style={{
                    background: 'linear-gradient(90deg, var(--primary), var(--secondary))',
                    boxShadow: '0 10px 30px rgba(37,99,235,0.35)'
                  }}
                />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* ─── Blog Cards Grid ─── */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 mb-24 mx-6 sm:mx-12 xl:mx-32'>
        {filteredBlogs()
          .filter((blog) => menu === "All" ? true : blog.category === menu)
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))
        }
      </div>
    </div>
  )
}

export default BlogList
