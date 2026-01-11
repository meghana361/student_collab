
import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import NotesCard from "../components/NotesCard";
import { FiBookOpen, FiSearch } from "react-icons/fi";

const Notes = () => {
  const { axios } = useAppContext();
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

useEffect(() => {
  const token = localStorage.getItem("token");

  axios
    .get("/api/notes", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then(({ data }) => {
      if (data.success) {
        setNotes(data.notes);
        setFilteredNotes(data.notes);
      }
      setLoading(false);
    })
    .catch(() => setLoading(false));
}, []);


  // 🔍 SEARCH LOGIC
  useEffect(() => {
    const q = query.toLowerCase();
    const filtered = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(q) ||
        note.subject.toLowerCase().includes(q) ||
        (note.semester && note.semester.toLowerCase().includes(q))
    );
    setFilteredNotes(filtered);
  }, [query, notes]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50">

      {/* Header Section */}
      <div className="bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="flex flex-col gap-6">

            {/* Title */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-4xl font-extrabold text-indigo-700 flex items-center gap-3">
                  <FiBookOpen />
                  Student Notes
                </h1>
                <p className="text-gray-600 mt-2">
                  Browse and download notes shared by your campus
                </p>
              </div>

              {/* Count */}
              <div className="inline-flex items-center gap-2 bg-indigo-100
                              text-indigo-700 px-4 py-2 rounded-full
                              text-sm font-semibold">
                📄 {filteredNotes.length} Notes
              </div>
            </div>

            {/* 🔍 SEARCH BAR */}
          {/* 🔍 SEARCH BAR */}
{/* 🔍 SEARCH BAR */}
<div className="max-w-xl">
  <div
    className="
      flex items-center gap-3
      px-5 py-3 rounded-2xl
      bg-white/90
      border border-indigo-200
      shadow-[0_10px_28px_rgba(37,99,235,0.25)]
      focus-within:shadow-[0_14px_36px_rgba(37,99,235,0.35)]
      transition-all
    "
  >
    <FiSearch className="text-indigo-600" size={18} />

    <input
      type="text"
      placeholder="Search by title, subject or semester..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="
        w-full bg-transparent outline-none
        text-sm text-gray-900
        placeholder-gray-500
      "
    />
  </div>
</div>



          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        {loading ? (
          <p className="text-center text-gray-500">Loading notes...</p>
        ) : filteredNotes.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-5xl mb-4">🔍</p>
            <h2 className="text-xl font-semibold text-gray-700">
              No matching notes
            </h2>
            <p className="text-gray-500 mt-2">
              Try searching with a different keyword
            </p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {filteredNotes.map((note) => (
              <NotesCard key={note._id} note={note} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Notes;
