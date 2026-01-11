// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// const BlogCard = ({blog}) => {

//     const {title, description, category, image, _id} = blog;
//     const navigate = useNavigate()

//   return (
//     <div onClick={()=> navigate(`/blog/${_id}`)} className='w-full rounded-lg overflow-hidden shadow hover:scale-102 hover:shadow-primary/25 duration-300 cursor-pointer'>
//       <img src={image} alt="" className='aspect-video'/>
//       <span className='ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs'>{category}</span>
//       <div className='p-5'>
//         <h5 className='mb-2 font-medium text-gray-900'>{title}</h5>
//         <p className='mb-3 text-xs text-gray-600 ' dangerouslySetInnerHTML={{"__html": description.slice(0,200)}}></p>
//       </div>
//     </div>
//   )
// }

// export default BlogCard


import React from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { title, description, category, image, _id } = blog;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/blog/${_id}`)}
      className="w-full rounded-lg overflow-hidden
                 shadow hover:shadow-primary/25
                 hover:-translate-y-1 transition-all
                 cursor-pointer bg-white"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="aspect-video w-full object-cover"
      />

      {/* Category */}
      <span
        className="ml-5 mt-4 px-3 py-1 inline-block
                   bg-primary/15 rounded-full
                   text-primary text-xs font-medium"
      >
        {category}
      </span>

      {/* Content */}
      <div className="p-5">
        <h5 className="mb-2 font-semibold text-gray-900 line-clamp-2">
          {title}
        </h5>

        {/* Description + Read more */}
        <p
          className="text-xs text-gray-600 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html:
              description.length > 200
                ? `${description.slice(0, 200)}... 
                   <span class="text-primary underline font-medium">
                     Read more
                   </span>`
                : description,
          }}
        />
      </div>
    </div>
  );
};

export default BlogCard;
