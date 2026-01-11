import jwt from 'jsonwebtoken'
import Blog from '../models/Blog.js';
import Comment from '../models/Comment.js';
import firebaseAdmin from '../configs/firebaseAdmin.js';


export const adminLogin = async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.json({
        success: false,
        message: "Firebase token missing",
      });
    }

    const firebaseToken = authHeader.split(" ")[1];

    // ✅ VERIFY FIREBASE TOKEN
    const decodedFirebase = await firebaseAdmin
      .auth()
      .verifyIdToken(firebaseToken);

    // ✅ ISSUE BACKEND JWT
    const backendToken = jwt.sign(
      {
        uid: decodedFirebase.uid,
        email: decodedFirebase.email,
        role: "admin",
      },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    return res.json({
      success: true,
      token: backendToken,
    });

  } catch (error) {
    console.error("Admin login error:", error.message);
    return res.status(401).json({
      success: false,
      message: "Login failed",
    });
  }
};



// export const adminLogin = async (req, res) => {
//   try {
//     const { idToken } = req.body;

//     if (!idToken) {
//       return res.json({ success: false, message: "Token missing" });
//     }

//     // Verify Firebase ID token
//     const decoded = await firebaseAdmin.auth().verifyIdToken(idToken);

//     const { email, email_verified } = decoded;

//     // Admin email check
//     // if (email !== process.env.ADMIN_EMAIL) {
//     //   return res.json({ success: false, message: "Not an admin" });
//     // }

//     // Email verification check
//     if (!email_verified) {
//       return res.json({ success: false, message: "Email not verified" });
//     }

//     // Generate JWT
//     const token = jwt.sign(
//       { email, role: "admin" },
//       process.env.JWT_SECRET,
//       { expiresIn: "1d" }
//     );

//     res.json({ success: true, token });

//   } catch (error) {
//     res.json({ success: false, message: error.message });
//   }
// };

export const getAllBlogsAdmin = async (req, res) =>{
    try {
        const blogs = await Blog.find({}).sort({createdAt: -1});
        res.json({success: true, blogs})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const getAllComments = async (req, res) =>{
    try {
        const comments = await Comment.find({}).populate("blog").sort({createdAt: -1})
        res.json({success: true, comments})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const getDashboard = async (req, res) =>{
    try {
        const recentBlogs = await Blog.find({}).sort({ createdAt: -1 }).limit(5);
        const blogs = await Blog.countDocuments();
        const comments = await Comment.countDocuments()
        const drafts = await Blog.countDocuments({isPublished: false})

        const dashboardData = {
            blogs, comments, drafts, recentBlogs
        }
        res.json({success: true, dashboardData})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const deleteCommentById = async (req, res) =>{
    try {
        const {id} = req.body;
        await Comment.findByIdAndDelete(id);
        res.json({success: true, message:"Comment deleted successfully" })
    } catch (error) {
       res.json({success: false, message: error.message}) 
    }
}

export const approveCommentById = async (req, res) =>{
    try {
        const {id} = req.body;
        await Comment.findByIdAndUpdate(id, {isApproved: true});
        res.json({success: true, message:"Comment approved successfully" })
    } catch (error) {
       res.json({success: false, message: error.message}) 
    }
}