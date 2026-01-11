import React from 'react'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const BlogTableItem = ({ blog, fetchBlogs, index }) => {

  const { title, createdAt, isPublished } = blog
  const BlogDate = new Date(createdAt)
  const { axios } = useAppContext()

  const deleteBlog = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this post?')
    if (!confirmDelete) return

    try {
      const { data } = await axios.post('/api/blog/delete', { id: blog._id })
      if (data.success) {
        toast.success(data.message)
        await fetchBlogs()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const togglePublish = async () => {
    try {
      const { data } = await axios.post('/api/blog/toggle-publish', { id: blog._id })
      if (data.success) {
        toast.success(data.message)
        await fetchBlogs()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <tr className="border-y border-slate-200 hover:bg-indigo-50/40 transition">
      {/* Index */}
      <th className="px-3 py-4 text-slate-600 font-medium">
        {index}
      </th>

      {/* Title */}
      <td className="px-3 py-4 font-medium text-slate-800">
        {title}
      </td>

      {/* Date */}
      <td className="px-3 py-4 max-sm:hidden text-slate-600">
        {BlogDate.toDateString()}
      </td>

      {/* Status */}
      <td className="px-3 py-4 max-sm:hidden">
        <span
          className={`px-3 py-1 rounded-full text-xs font-semibold ${
            isPublished
              ? 'bg-indigo-100 text-indigo-700'
              : 'bg-amber-100 text-amber-700'
          }`}
        >
          {isPublished ? 'Published' : 'Unpublished'}
        </span>
      </td>

      {/* Actions */}
      <td className="px-3 py-4 flex items-center gap-3 text-xs">
        <button
          onClick={togglePublish}
          className={`px-3 py-1 rounded-md border font-medium transition cursor-pointer ${
            isPublished
              ? 'border-amber-300 text-amber-700 hover:bg-amber-50'
              : 'border-indigo-300 text-indigo-700 hover:bg-indigo-50'
          }`}
        >
          {isPublished ? 'Unpublish' : 'Publish'}
        </button>

        <img
          src={assets.cross_icon}
          alt="delete"
          onClick={deleteBlog}
          className="w-7 cursor-pointer hover:scale-110 transition"
        />
      </td>
    </tr>
  )
}

export default BlogTableItem
