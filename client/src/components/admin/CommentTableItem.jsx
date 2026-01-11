import React from 'react'
import { assets } from '../../assets/assets'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const CommentTableItem = ({ comment, fetchComments }) => {

  const { blog, createdAt, _id, isApproved, name, content } = comment
  const BlogDate = new Date(createdAt)
  const { axios } = useAppContext()

  const approveComment = async () => {
    try {
      const { data } = await axios.post('/api/admin/approve-comment', { id: _id })
      if (data.success) {
        toast.success(data.message)
        fetchComments()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const deleteComment = async () => {
    const confirmDelete = window.confirm('Are you sure you want to delete this comment?')
    if (!confirmDelete) return

    try {
      const { data } = await axios.post('/api/admin/delete-comment', { id: _id })
      if (data.success) {
        toast.success(data.message)
        fetchComments()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  return (
    <tr className="border-y border-slate-200 hover:bg-indigo-50/40 transition">

      {/* Comment Info */}
      <td className="px-6 py-4 text-sm text-slate-700">
        <p className="mb-1">
          <span className="font-semibold text-slate-800">Post:</span>{' '}
          {blog.title}
        </p>

        <p className="mb-1">
          <span className="font-semibold text-slate-800">Name:</span>{' '}
          {name}
        </p>

        <p>
          <span className="font-semibold text-slate-800">Comments:</span>{' '}
          {content}
        </p>
      </td>

      {/* Date */}
      <td className="px-6 py-4 max-sm:hidden text-slate-600 text-sm">
        {BlogDate.toLocaleDateString()}
      </td>

      {/* Actions */}
      <td className="px-6 py-4">
        <div className="inline-flex items-center gap-4">

          {!isApproved ? (
            <img
              onClick={approveComment}
              src={assets.tick_icon}
              alt="approve"
              className="w-5 cursor-pointer hover:scale-110 transition"
              title="Approve comment"
            />
          ) : (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-100 text-indigo-700">
              Approved
            </span>
          )}

          <img
            onClick={deleteComment}
            src={assets.bin_icon}
            alt="delete"
            className="w-5 cursor-pointer hover:scale-110 transition"
            title="Delete comment"
          />
        </div>
      </td>

    </tr>
  )
}

export default CommentTableItem
