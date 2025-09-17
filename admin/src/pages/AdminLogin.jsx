import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); // <-- rename error -> message
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/admin/login", { username, password });
      localStorage.setItem("token", res.data.token);
      setMessage("Login successful! Redirecting...");
      setTimeout(() => navigate("/admin/dashboard"), 500); // optional delay for user feedback
    } catch (err) {
      setMessage(err.response?.data?.error || "Login failed");
    }
  };

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/bav.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0"></div>

      <div className="relative z-10 w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Admin Login</h2>

        {message && (
          <div
            className={`mb-4 text-center ${
              message.includes("successful") ? "text-green-500" : "text-red-500"
            }`}
          >
            {message}
          </div>
        )}

        <form
  onSubmit={handleLogin}
  className="space-y-4"
  autoComplete="off"
>
 
  <input type="text" name="fakeusernameremembered" style={{ display: 'none' }} />
  <input type="password" name="fakepasswordremembered" style={{ display: 'none' }} />

  <input
    type="text"
    placeholder="Username"
    value={username}
    onChange={(e) => setUsername(e.target.value)}
    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
    autoComplete="off"
  />
  <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    required
    autoComplete="new-password"
  />
  <button
    type="submit"
    className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
  >
    Login
  </button>
</form>

      </div>
    </section>
  );
};

export default AdminLogin;
