import React, { useState } from "react";
import { useAppContext } from "../../context/AppContext";
import { auth } from "../../firebase/firebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendEmailVerification,
  sendPasswordResetEmail,
} from "firebase/auth";
import toast from "react-hot-toast";
import { motion, AnimatePresence } from "framer-motion";

const Login = () => {
  const { axios, setToken } = useAppContext();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [showVerifyMessage, setShowVerifyMessage] = useState(false);

  // ---------------- LOGIN ----------------
  const handleLogin = async (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    try {
      const userCred = await signInWithEmailAndPassword(auth, email, password);
      await userCred.user.reload();

      if (!userCred.user.emailVerified) {
        toast.error("Please verify your email first");
        return;
      }

      // 🔥 FORCE FRESH FIREBASE TOKEN
      const idToken = await userCred.user.getIdToken(true);

      // 🔥 SEND FIREBASE TOKEN TO BACKEND
   const { data } = await axios.post(
  "/api/admin/login",
  {},
  {
    headers: {
      Authorization: `Bearer ${idToken}`,
    },
  }
);


      if (!data.success) {
        toast.error(data.message);
        return;
      }

      // 🔥 STORE BACKEND JWT ONLY
      localStorage.setItem("token", data.token);
      setToken(data.token);

      toast.success("Login successful");
    } catch (error) {
      toast.error(error?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- SIGNUP ----------------
  const handleSignup = async (e) => {
    e.preventDefault();
    if (loading) return;

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    setLoading(true);

    try {
      const userCred = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await sendEmailVerification(userCred.user);

      toast.success("Verification email sent");
      setShowVerifyMessage(true);
      setIsSignup(false);

      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      toast.error(error?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  // ---------------- RESET PASSWORD ----------------
  const handleResetPassword = async () => {
    if (!email) {
      toast.error("Enter your email first");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent");
    } catch (error) {
      toast.error(error?.message || "Failed to send reset email");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen bg-gradient-to-br from-indigo-100 via-blue-100 to-indigo-200 flex items-center justify-center px-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-6xl w-full">

        {/* LEFT SECTION */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          <h1 className="text-6xl font-extrabold text-indigo-900 underline decoration-indigo-400 decoration-4 mb-4">
            CampusHive
          </h1>
          <h1 className="text-4xl font-extrabold text-indigo-900">
            Student Knowledge Platform
          </h1>
          <p className="text-lg text-slate-700 mt-4 max-w-md">
            Discover notes, projects, internship journeys, and placement
            experiences shared by students.
          </p>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div className="flex justify-center">
          <motion.div className="bg-white/80 backdrop-blur-xl shadow-2xl rounded-2xl w-[380px] p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={isSignup ? "signup" : "login"}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >

                {showVerifyMessage && (
                  <div className="bg-indigo-100 border border-indigo-300 text-indigo-800 text-sm p-3 rounded-lg mb-4 text-center">
                    📧 Verification email sent. Please verify and login again.
                  </div>
                )}

                <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
                  {isSignup ? "Create Account" : "Welcome Back"}
                </h2>

                <form onSubmit={isSignup ? handleSignup : handleLogin}>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full mb-4 px-4 py-2 border rounded-lg"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <input
                    type="password"
                    placeholder="Password"
                    className="w-full mb-4 px-4 py-2 border rounded-lg"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  {isSignup && (
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="w-full mb-4 px-4 py-2 border rounded-lg"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  )}

                  {!isSignup && (
                    <button
                      type="button"
                      onClick={handleResetPassword}
                      className="text-sm text-indigo-700 mb-4"
                    >
                      Forgot password?
                    </button>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold"
                  >
                    {loading ? "Please wait..." : isSignup ? "Sign Up" : "Login"}
                  </button>
                </form>

                <p className="text-center text-sm mt-6">
                  {isSignup ? "Already have an account?" : "New user?"}{" "}
                  <span
                    className="text-indigo-700 cursor-pointer"
                    onClick={() => {
                      setIsSignup(!isSignup);
                      setShowVerifyMessage(false);
                    }}
                  >
                    {isSignup ? "Login" : "Create account"}
                  </span>
                </p>

              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>

      </div>
    </motion.div>
  );
};

export default Login;
