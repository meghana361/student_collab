import { FiFileText, FiDownload } from "react-icons/fi";

const NotesCard = ({ note }) => {
  return (
    <div
      className="group bg-white rounded-2xl shadow-md hover:shadow-xl
                 transition-all duration-300 border border-gray-100
                 overflow-hidden"
    >
      {/* Top Accent */}
      <div className="h-2 bg-gradient-to-r from-indigo-500 to-purple-500" />

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h3 className="font-semibold text-lg text-gray-800 line-clamp-2">
          {note.title}
        </h3>

        {/* Subject */}
        <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
          <FiFileText className="text-indigo-500" />
          <span>{note.subject}</span>
        </div>

        {/* Semester */}
        {note.semester && (
          <span
            className="inline-block mt-3 px-3 py-1 rounded-full text-xs
                       bg-indigo-50 text-indigo-700 font-medium"
          >
            Semester {note.semester}
          </span>
        )}

        {/* Divider */}
        <div className="my-4 border-t" />

        {/* Download */}
        <a
          href={note.fileUrl}
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 w-full
                     bg-gradient-to-r from-indigo-600 to-purple-600
                     text-white py-2 rounded-lg font-semibold
                     hover:opacity-90 transition"
        >
          <FiDownload size={16} />
          Download Notes
        </a>
      </div>
    </div>
  );
};

export default NotesCard;
