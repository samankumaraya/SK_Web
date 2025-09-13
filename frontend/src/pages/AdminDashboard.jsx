import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminDashboard = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/admin/dashboard", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage(res.data.message);
    };
    fetchData();
  }, []);

  return <div><h2>Admin Dashboard</h2><p>{message}</p></div>;
};

export default AdminDashboard;
