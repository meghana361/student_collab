// import express from 'express'
// import 'dotenv/config'
// import cors from 'cors'

// import connectDB from './configs/db.js';
// import adminRouter from './routes/adminRoutes.js';
// import blogRouter from './routes/blogRoutes.js';
// import notesRoutes from "./routes/notesRoutes.js";

// const app = express();
// import { v2 as cloudinary } from "cloudinary";
// await connectDB()
// // import http from 'http';
// // const server = http.createServer(app);
// // Middlewares
// app.use(cors())
// app.use(express.json())
// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });
// // initSocket(server);

// // Routes
// app.get('/', (req, res)=> res.send("API is Working"))
// app.use('/api/admin', adminRouter)
// app.use('/api/blog', blogRouter)
// app.use("/api/notes", notesRoutes);


// // app.use("/api/chat", chatRoutes)
// console.log('Gemini key loaded:', process.env.GEMINI_API_KEY ? 'YES' : 'NO')
// const PORT = process.env.PORT || 3000;

// app.listen(PORT, ()=>{
//     console.log('Server is running on port ' + PORT)
// })

// export default app;
import express from "express";
import "dotenv/config";
import cors from "cors";
import { v2 as cloudinary } from "cloudinary";

import connectDB from "./configs/db.js";
import adminRouter from "./routes/adminRoutes.js";
import blogRouter from "./routes/blogRoutes.js";
import notesRoutes from "./routes/notesRoutes.js";

const app = express();

// 🔹 Connect DB
await connectDB();

// 🔹 Middlewares
app.use(cors());
app.use(express.json({ limit: "10mb" }));

// 🔹 Cloudinary config (USING .env — correct)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 🔹 Routes
app.get("/", (req, res) => res.send("API is Working"));
app.use("/api/admin", adminRouter);
app.use("/api/blog", blogRouter);
app.use("/api/notes", notesRoutes);

// 🔹 Server
const PORT = 5000;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});


export default app;
