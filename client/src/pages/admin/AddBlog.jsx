// import React, { useEffect, useRef, useState } from 'react';
// import { assets, blogCategories } from '../../assets/assets';
// import Quill from 'quill';
// import { useAppContext } from '../../context/AppContext';
// import toast from 'react-hot-toast';
// import { parse } from 'marked';

// const AddBlog = () => {
//   const { axios } = useAppContext();
//   const [isAdding, setIsAdding] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const editorRef = useRef(null);
//   const quillRef = useRef(null);

//   const [image, setImage] = useState(false);
//   const [title, setTitle] = useState('');
//   const [subTitle, setSubTitle] = useState('');
//   const [category, setCategory] = useState('Startup');
//   const [isPublished, setIsPublished] = useState(false);

//   const generateContent = async () => {
//     if (!title) return toast.error('Please enter a title');

//     try {
//       setLoading(true);
//       const { data } = await axios.post('/api/blog/generate', { prompt: title });
//       if (data.success) {
//         quillRef.current.root.innerHTML = parse(data.content);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const onSubmitHandler = async (e) => {
//     try {
//       e.preventDefault();
//       setIsAdding(true);

//       const blog = {
//         title,
//         subTitle,
//         description: quillRef.current.root.innerHTML,
//         category,
//         isPublished,
//       };

//       const formData = new FormData();
//       formData.append('blog', JSON.stringify(blog));
//       formData.append('image', image);

//       const { data } = await axios.post('/api/blog/add', formData);

//       if (data.success) {
//         toast.success(data.message);
//         setImage(false);
//         setTitle('');
//         setSubTitle('');
//         quillRef.current.root.innerHTML = '';
//         setCategory('Startup');
//         setIsPublished(false);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setIsAdding(false);
//     }
//   };

//   useEffect(() => {
//     if (!quillRef.current && editorRef.current) {
//       quillRef.current = new Quill(editorRef.current, { theme: 'snow' });
//     }
//   }, []);

//   return (
//     <form
//       onSubmit={onSubmitHandler}
//       className='flex-1 bg-[#f1fdfb] text-gray-700 h-full overflow-scroll'
//     >
//       <div className='bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow rounded'>

//         <p className='font-medium text-[#2f6654]'>Upload Thumbnail</p>
//         <label htmlFor="image">
//           <img
//             src={!image ? assets.upload_area : URL.createObjectURL(image)}
//             alt="upload"
//             className='mt-2 h-16 rounded cursor-pointer border border-gray-300'
//           />
//           <input
//             onChange={(e) => setImage(e.target.files[0])}
//             type="file"
//             id='image'
//             hidden
//             required
//           />
//         </label>

//         <p className='mt-4 font-medium text-[#2f6654]'>Blog Title</p>
//         <input
//           type="text"
//           placeholder='Type here'
//           required
//           className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded bg-white'
//           onChange={e => setTitle(e.target.value)}
//           value={title}
//         />

//         <p className='mt-4 font-medium text-[#2f6654]'>Sub Title</p>
//         <input
//           type="text"
//           placeholder='Type here'
//           required
//           className='w-full max-w-lg mt-2 p-2 border border-gray-300 outline-none rounded bg-white'
//           onChange={e => setSubTitle(e.target.value)}
//           value={subTitle}
//         />

//         <p className='mt-4 font-medium text-[#2f6654]'>Blog Description</p>
//         <div className='max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative border border-gray-300 rounded bg-white'>
//           <div ref={editorRef}></div>
//           {loading && (
//             <div className='absolute inset-0 flex items-center justify-center bg-black/10 mt-2 rounded'>
//               <div className='w-8 h-8 rounded-full border-2 border-t-white animate-spin'></div>
//             </div>
//           )}
//          <button
//   disabled={loading}
//   type='button'
//   onClick={generateContent}
//   className='absolute bottom-1 right-2 ml-2 text-xs text-white px-4 py-1.5 rounded transition duration-200 shadow'
//   style={{
//     background: 'linear-gradient(90deg, #10b981, #059669)',
//     boxShadow: '0 6px 18px rgba(14,166,106,0.25)',
//   }}
// >
//   Generate with AI
// </button>
//         </div>

//         <p className='mt-4 font-medium text-[#2f6654]'>Blog Category</p>
//         <select
//           onChange={e => setCategory(e.target.value)}
//           name="category"
//           className='mt-2 px-3 py-2 border border-gray-300 outline-none rounded text-gray-600 bg-white'
//         >
//           <option value="">Select category</option>
//           {blogCategories.map((item, index) => (
//             <option key={index} value={item}>{item}</option>
//           ))}
//         </select>

//         <div className='flex items-center gap-3 mt-4'>
//           <p className='font-medium text-[#2f6654]'>Publish Now</p>
//           <input
//             type="checkbox"
//             checked={isPublished}
//             className='scale-125 cursor-pointer accent-[#4caf50]'
//             onChange={e => setIsPublished(e.target.checked)}
//           />
//         </div>

//       <button
//   disabled={isAdding}
//   type="submit"
//   className='mt-8 w-40 h-10 text-white rounded cursor-pointer text-sm transition duration-200 shadow'
//   style={{
//     background: 'linear-gradient(90deg, #10b981, #059669)',
//     boxShadow: '0 6px 18px rgba(14,166,106,0.25)',
//   }}
// >
//   {isAdding ? 'Adding...' : 'Add Blog'}
// </button>


//       </div>
//     </form>
//   );
// };

// export default AddBlog;
import React, { useEffect, useRef, useState } from 'react'
import { assets, blogCategories } from '../../assets/assets'
import Quill from 'quill'
import { useAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'
import { parse } from 'marked'

const AddBlog = () => {
  const { axios,fetchBlogs
} = useAppContext()

  const [isAdding, setIsAdding] = useState(false)
  const [loading, setLoading] = useState(false)

  const editorRef = useRef(null)
  const quillRef = useRef(null)

  const [image, setImage] = useState(false)
  const [title, setTitle] = useState('')
  const [subTitle, setSubTitle] = useState('')
  const [category, setCategory] = useState('Startup')
  const [isPublished, setIsPublished] = useState(false)

  const generateContent = async () => {
    if (!title) return toast.error('Please enter a title')

    try {
      setLoading(true)
      const { data } = await axios.post('/api/blog/generate', { prompt: title })
      if (data.success) {
        quillRef.current.root.innerHTML = parse(data.content)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault()
      setIsAdding(true)

      const blog = {
        title,
        subTitle,
        description: quillRef.current.root.innerHTML,
        category,
        isPublished
      }

      const formData = new FormData()
      formData.append('blog', JSON.stringify(blog))
      formData.append('image', image)

      const { data } = await axios.post('/api/blog/add', formData)

      if (data.success) {
        toast.success(data.message)
        await fetchBlogs(); // 🔥
        setImage(false)
        setTitle('')
        setSubTitle('')
        quillRef.current.root.innerHTML = ''
        setCategory('Startup')
        setIsPublished(false)
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    } finally {
      setIsAdding(false)
    }
  }

  useEffect(() => {
    if (!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, { theme: 'snow' })
    }
  }, [])

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex-1 bg-indigo-50 text-slate-700 h-full overflow-scroll"
    >
      <div className="bg-white w-full max-w-3xl p-4 md:p-10 sm:m-10 shadow-lg rounded-xl">

        {/* Upload */}
        <p className="font-semibold text-indigo-700">Upload Thumbnail</p>
        <label htmlFor="image">
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt="upload"
            className="mt-2 h-16 rounded cursor-pointer border border-slate-300"
          />
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            id="image"
            hidden
            required
          />
        </label>

        {/* Title */}
        <p className="mt-4 font-semibold text-indigo-700">Post Title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-slate-300 outline-none rounded focus:ring-2 focus:ring-indigo-400"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />

        {/* Subtitle */}
        <p className="mt-4 font-semibold text-indigo-700">Sub Title</p>
        <input
          type="text"
          placeholder="Type here"
          required
          className="w-full max-w-lg mt-2 p-2 border border-slate-300 outline-none rounded focus:ring-2 focus:ring-indigo-400"
          onChange={(e) => setSubTitle(e.target.value)}
          value={subTitle}
        />

        {/* Editor */}
        <p className="mt-4 font-semibold text-indigo-700">Blog Description</p>
        <div className="max-w-lg h-74 pb-16 sm:pb-10 pt-2 relative border border-slate-300 rounded bg-white">
          <div ref={editorRef}></div>

          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/10 rounded">
              <div className="w-8 h-8 rounded-full border-2 border-t-indigo-600 animate-spin"></div>
            </div>
          )}

          <button
            disabled={loading}
            type="button"
            onClick={generateContent}
            className="absolute bottom-2 right-2 text-xs text-white px-4 py-1.5 rounded-lg transition shadow cursor-pointer"
            style={{
              background: 'linear-gradient(90deg, #2563EB, #4F46E5)',
              boxShadow: '0 6px 18px rgba(37,99,235,0.35)'
            }}
          >
            Generate with AI
          </button>
        </div>

        {/* Category */}
        <p className="mt-4 font-semibold text-indigo-700">Blog Category</p>
        <select
          onChange={(e) => setCategory(e.target.value)}
          className="mt-2 px-3 py-2 border border-slate-300 outline-none rounded text-slate-600 bg-white focus:ring-2 focus:ring-indigo-400"
        >
          <option value="">Select category</option>
          {blogCategories.map((item, index) => (
            <option key={index} value={item}>{item}</option>
          ))}
        </select>

        {/* Publish */}
        <div className="flex items-center gap-3 mt-4">
          <p className="font-semibold text-indigo-700">Publish Now</p>
          <input
            type="checkbox"
            checked={isPublished}
            className="scale-125 cursor-pointer accent-indigo-600"
            onChange={(e) => setIsPublished(e.target.checked)}
          />
        </div>

        {/* Submit */}
        <button
          disabled={isAdding}
          type="submit"
          className="mt-8 w-40 h-10 text-white rounded-lg cursor-pointer text-sm font-semibold transition shadow"
          style={{
            background: 'linear-gradient(90deg, #2563EB, #4F46E5)',
            boxShadow: '0 6px 18px rgba(37,99,235,0.35)'
          }}
        >
          {isAdding ? 'Adding...' : 'Add Blog'}
        </button>

      </div>
    </form>
  )
}

export default AddBlog
