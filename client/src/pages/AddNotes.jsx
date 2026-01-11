// import { useState } from "react";
// import { useAppContext } from "../context/AppContext";
// import toast from "react-hot-toast";

// const AddNotes = () => {
//   const { axios } = useAppContext();

//   const [title, setTitle] = useState("");
//   const [subject, setSubject] = useState("");
//   const [semester, setSemester] = useState("");
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     const note = { title, subject, semester };

//     const formData = new FormData();
//     formData.append("note", JSON.stringify(note));
//     formData.append("file", file);

//     try {
//       setLoading(true);
//       const { data } = await axios.post("/api/notes/add", formData);

//       if (data.success) {
//         toast.success("Notes uploaded");
//         setTitle("");
//         setSubject("");
//         setSemester("");
//         setFile(null);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={submitHandler} className="max-w-xl mx-auto p-6">
//       <h2 className="text-2xl font-bold mb-4">Upload Notes</h2>

//       <input
//         placeholder="Title"
//         value={title}
//         onChange={(e) => setTitle(e.target.value)}
//         className="w-full border p-2 mb-3"
//         required
//       />

//       <input
//         placeholder="Subject"
//         value={subject}
//         onChange={(e) => setSubject(e.target.value)}
//         className="w-full border p-2 mb-3"
//         required
//       />

//       <input
//         placeholder="Semester"
//         value={semester}
//         onChange={(e) => setSemester(e.target.value)}
//         className="w-full border p-2 mb-3"
//       />

//       <input
//         type="file"
//         onChange={(e) => setFile(e.target.files[0])}
//         className="mb-4"
//         required
//       />

//       <button
//         disabled={loading}
//         className="bg-indigo-600 text-white px-6 py-2 rounded"
//       >
//         {loading ? "Uploading..." : "Upload"}
//       </button>
//     </form>
//   );
// };

// export default AddNotes;
import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import toast from "react-hot-toast";
import { FiUploadCloud, FiBookOpen, FiLayers } from "react-icons/fi";

const AddNotes = () => {
  const { axios } = useAppContext();

  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const note = { title, subject, semester };
    const formData = new FormData();
    formData.append("note", JSON.stringify(note));
    formData.append("file", file);

    try {
      setLoading(true);
      const { data } = await axios.post("/api/notes/add", formData);

      if (data.success) {
        toast.success("📚 Notes uploaded successfully");
        setTitle("");
        setSubject("");
        setSemester("");
        setFile(null);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center px-4">
      <form
        onSubmit={submitHandler}
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-3">
            <FiUploadCloud size={26} />
          </div>
          <h2 className="text-2xl font-bold text-indigo-700">
            Upload Study Notes
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Share notes with your campus peers
          </p>
        </div>

        {/* Title */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">
            Notes Title
          </label>
          <div className="flex items-center gap-2 mt-1 border rounded-lg px-3 py-2">
            <FiBookOpen className="text-gray-400" />
            <input
              value={title}
              className="w-full outline-none text-sm"
              placeholder="Eg: DBMS Unit 3 Notes"
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">
            Subject
          </label>
          <div className="flex items-center gap-2 mt-1 border rounded-lg px-3 py-2">
            <FiLayers className="text-gray-400" />
            <input
              value={subject}
              className="w-full outline-none text-sm"
              placeholder="Eg: Database Management Systems"
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Semester */}
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-600">
            Semester (optional)
          </label>
          <input
            value={semester}
            className="w-full mt-1 border rounded-lg px-3 py-2 text-sm outline-none"
            placeholder="Eg: 5"
            onChange={(e) => setSemester(e.target.value)}
          />
        </div>

        {/* File Upload */}
        <div className="mb-6">
          <label className="text-sm font-medium text-gray-600">
            Upload File
          </label>
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            required
            className="mt-2 block w-full text-sm file:mr-4 file:py-2
              file:px-4 file:rounded-full file:border-0
              file:text-sm file:font-semibold
              file:bg-indigo-50 file:text-indigo-700
              hover:file:bg-indigo-100 cursor-pointer"
          />
          <p className="text-xs text-gray-400 mt-1">
            PDF, PPT, DOC (max 10MB)
          </p>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600
                     text-white py-2.5 rounded-lg font-semibold
                     hover:opacity-90 transition shadow-lg disabled:opacity-60"
        >
          {loading ? "Uploading..." : "Upload Notes"}
        </button>
      </form>
    </div>
  );
};

export default AddNotes;
