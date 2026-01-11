// import jwt from "jsonwebtoken";

// const auth = (req, res, next)=>{
//     const token = req.headers.authorization;

//     try {
//         jwt.verify(token, process.env.JWT_SECRET)
//         next();
//     } catch (error) {
//         res.json({success: false, message: "Invalid token"})
//     }
// }

// export default auth;
// import jwt from "jsonwebtoken";

// const auth = (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization;

//     if (!authHeader) {
//       return res
//         .status(401)
//         .json({ success: false, message: "No token provided" });
//     }

//     // ✅ Extract token correctly
//     const token = authHeader.startsWith("Bearer ")
//       ? authHeader.split(" ")[1]
//       : authHeader;

//     const decoded = jwt.verify(token, process.env.JWT_SECRET);

//     // (optional) attach admin info
//     req.admin = decoded;

//     next();
//   } catch (error) {
//     res
//       .status(401)
//       .json({ success: false, message: "Invalid token" });
//   }
// };

// export default auth;
import jwt from "jsonwebtoken";

const auth = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (decoded.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied",
      });
    }

    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }
};

export default auth;
