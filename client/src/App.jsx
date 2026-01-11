import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Notes from "./pages/Notes";
import AddNotes from "./pages/AddNotes"; // ✅ ADD THIS

import Layout from "./pages/admin/Layout";
import Dashboard from "./pages/admin/Dashboard";
import AddBlog from "./pages/admin/AddBlog";
import ListBlog from "./pages/admin/ListBlog";
import Comments from "./pages/admin/Comments";
import Login from "./components/admin/Login";

import MainLayout from "./layouts/MainLayout";
import { Toaster } from "react-hot-toast";
import { useAppContext } from "./context/AppContext";
import "quill/dist/quill.snow.css";

const App = () => {
  const { token } = useAppContext();

  return (
    <div>
      <Toaster />

      <Routes>
        {/* 🌐 PUBLIC + MAIN LAYOUT */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/notes" element={<Notes />} />

          {/* 🔒 PROTECTED NOTES UPLOAD PAGE */}
          <Route
            path="/notes/add"
            element={token ? <AddNotes /> : <Navigate to="/admin" />}
          />
        </Route>

        {/* BLOG DETAILS */}
        <Route path="/blog/:id" element={<Blog />} />

        {/* 🔐 ADMIN ROUTES */}
        <Route path="/admin" element={token ? <Layout /> : <Login />}>
          <Route index element={<Dashboard />} />
          <Route path="addBlog" element={<AddBlog />} />
          <Route path="listBlog" element={<ListBlog />} />
          <Route path="comments" element={<Comments />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
