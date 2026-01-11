import { useState } from "react";
import { FiUpload, FiBookOpen, FiLayers } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const UploadNotes = () => {
  const [title, setTitle] = useState("");
  const [subject, setSubject] = useState("");
  const [semester, setSemester] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
  e.preventDefault();

  const token = localStorage.getItem("token");

  if (!token) {
    alert("Login required");
    return;
  }

  const formData = new FormData();
  formData.append("title", title);
  formData.append("subject", subject);
  formData.append("semester", semester);
  formData.append("file", file);

  const res = await fetch(
    "http://localhost:5000/api/notes/upload",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );

  const data = await res.json();

  if (!res.ok) {
    alert(data.message);
    return;
  }

  alert("Notes uploaded successfully");
};



  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8"
      >
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-indigo-100 text-indigo-600 mb-3">
            <FiUpload size={26} />
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
            accept=".pdf,.ppt,.pptx,.doc,.docx"
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

export default UploadNotes;
