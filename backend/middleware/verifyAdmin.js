// middleware/verifyAdmin.js
import jwt from "jsonwebtoken";

const verifyAdmin = (req, res, next) => {
  const authHeader = req.headers["authorization"]; // "Bearer <token>"
  if (!authHeader) return res.status(401).json({ error: "No token provided" });

  const token = authHeader.split(" ")[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(403).json({ error: "Invalid token" });
    req.adminId = decoded.id;
    next();
  });
};

export default verifyAdmin; // ✅ ES module export
