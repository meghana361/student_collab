// import {createContext, useContext, useEffect, useState} from 'react'
// import axios from "axios";
// import {useNavigate} from 'react-router-dom'
// import toast from 'react-hot-toast';


// axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

// const AppContext = createContext();

// export const AppProvider = ({ children })=>{

//     const navigate = useNavigate()

//     const [token, setToken] = useState(null)
//     const [blogs, setBlogs] = useState([])
//     const [input, setInput] = useState("")

//     const fetchBlogs = async ()=>{
//         try {
//            const {data} = await axios.get('/api/blog/all');
//            data.success ? setBlogs(data.blogs) : toast.error(data.message)
//         } catch (error) {
//             toast.error(error.message)
//         }
//     }

//     useEffect(()=>{
//         fetchBlogs();
//         const token = localStorage.getItem('token')
//         if(token){
//             setToken(token);
//             axios.defaults.headers.common['Authorization'] = `${token}`;
//         }
//     },[])

//     const value = {
//         axios, navigate, token, setToken, blogs, setBlogs, input, setInput
//     }

//     return (
//         <AppContext.Provider value={value}>
//             {children}
//         </AppContext.Provider>
//     )
// }

// export const useAppContext = ()=>{
//     return useContext(AppContext)
// };
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const navigate = useNavigate();

  // 🔥 INIT FROM LOCAL STORAGE
  const [token, setToken] = useState(
    localStorage.getItem("token")
  );
  const [blogs, setBlogs] = useState([]);
  const [input, setInput] = useState("");

  // 🔹 Attach token to axios whenever it changes
  useEffect(() => {
    if (token) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`; // ✅ FIXED
    } else {
      delete axios.defaults.headers.common["Authorization"];
    }
  }, [token]);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get("/api/blog/all");
      data.success ? setBlogs(data.blogs) : toast.error(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const value = {
    axios,
    navigate,
    token,
    setToken,
    blogs,
    setBlogs,
    input,
    setInput,
    fetchBlogs
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
