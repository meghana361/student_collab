import React, { useEffect, useState } from 'react'
import CommentTableItem from '../../components/admin/CommentTableItem'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const Comments = () => {
  const [comments, setComments] = useState([])
  const [filter, setFilter] = useState('Not Approved')

  const { axios } = useAppContext()

  const fetchComments = async () => {
    try {
      const { data } = await axios.get('/api/admin/comments')
      data.success ? setComments(data.comments) : toast.error(data.message)
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchComments()
  }, [])

  return (
    <div className="flex-1 pt-6 px-5 sm:pt-12 sm:pl-16 bg-indigo-50 min-h-screen">

      {/* Header */}
      <div className="flex justify-between items-center max-w-3xl">
        <h1 className="text-xl font-semibold text-indigo-700">
          Comments
        </h1>

        {/* Filters */}
        <div className="flex gap-4">
          <button
            onClick={() => setFilter('Approved')}
            className={`shadow-sm border rounded-full px-4 py-1 text-xs font-medium transition ${
              filter === 'Approved'
                ? 'bg-indigo-100 text-indigo-700 border-indigo-600'
                : 'text-slate-700 bg-white border-slate-300 hover:bg-slate-100'
            }`}
          >
            Approved
          </button>

          <button
            onClick={() => setFilter('Not Approved')}
            className={`shadow-sm border rounded-full px-4 py-1 text-xs font-medium transition ${
              filter === 'Not Approved'
                ? 'bg-indigo-100 text-indigo-700 border-indigo-600'
                : 'text-slate-700 bg-white border-slate-300 hover:bg-slate-100'
            }`}
          >
            Not Approved
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-white shadow-lg rounded-xl scrollbar-hide">
        <table className="w-full text-sm text-slate-700">
          <thead className="text-xs uppercase bg-indigo-100 text-indigo-800">
            <tr>
              <th scope="col" className="px-6 py-3 text-left">
                Post   Title   &   Comment
              </th>
              <th scope="col" className="px-6 py-3 max-sm:hidden text-left">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {comments
              .filter(comment =>
                filter === 'Approved'
                  ? comment.isApproved
                  : !comment.isApproved
              )
              .map((comment, index) => (
                <CommentTableItem
                  key={comment._id}
                  comment={comment}
                  index={index + 1}
                  fetchComments={fetchComments}
                />
              ))}
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Comments
