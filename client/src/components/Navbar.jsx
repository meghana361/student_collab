import React from "react";
import { assets } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import {
  FiHome,
  FiBookOpen,
  FiEdit,
  FiLogIn,
  FiUpload
} from "react-icons/fi";

const Navbar = () => {
  const { navigate, token } = useAppContext();

  const handleUploadNotes = () => {
    if (!token) {
      navigate("/admin"); // redirect to login
    } else {
      navigate("/notes/add"); // ✅ correct route
    }
  };

  return (
    <div
      className="sticky top-0 z-50 bg-white/80 backdrop-blur
                 flex justify-between items-center
                 mx-4 sm:mx-20 xl:mx-18"
      style={{
        ["--primary"]: "#6485cdff",
        ["--secondary"]: "#1d13d4ff",
        ["--text"]: "#0F172A",
      }}
    >
      {/* Logo */}
      <img
        onClick={() => navigate("/")}
        src={assets.CampusHive}
        alt="logo"
        className="w-32 cursor-pointer"
      />

      {/* Navigation Actions */}
      <div className="flex items-center gap-3 text-sm">

        {/* Home */}
        <button
          onClick={() => navigate("/")}
          className="flex items-center gap-2 px-4 py-2 rounded-full
                     hover:bg-indigo-50 transition cursor-pointer"
          style={{ color: "var(--text)" }}
        >
          <FiHome size={16} />
          Home
        </button>

        {/* Notes */}
        <button
          onClick={() => navigate("/notes")}
          className="flex items-center gap-2 px-4 py-2 rounded-full
                     hover:bg-indigo-50 transition cursor-pointer"
          style={{ color: "var(--text)" }}
        >
          <FiBookOpen size={16} />
          Notes & Resources
        </button>

        {/* Upload Notes */}
        <button
          onClick={handleUploadNotes}
          className="flex items-center gap-2 px-4 py-2 rounded-full
                     hover:bg-indigo-50 transition cursor-pointer" 
          style={{ color: "var(--text)" }}
        >
          <FiUpload size={16} />
          Upload Notes
        </button>

        {/* Create Blog */}
        <button
          onClick={() => navigate("/admin")}
          className="flex items-center gap-2 px-4 py-2 rounded-full
                     hover:bg-indigo-50 transition cursor-pointer "
          style={{ color: "var(--text)" }}
        >
          <FiEdit size={16} />
          Create Post
        </button>

        {/* Login / Dashboard */}
        <button
          onClick={() => navigate("/admin")}
          className="flex items-center gap-2 rounded-full px-6 py-2.5
                     text-white font-medium transition-all cursor-pointer"
          style={{
            background: "linear-gradient(90deg, var(--primary), var(--secondary))",
            boxShadow: "0 8px 22px rgba(88, 133, 229, 0.35)",
          }}
        >
          <FiLogIn size={16} />
          {token ? "Dashboard" : "Login"}
        </button>

      </div>
    </div>
  );
};

export default Navbar;





