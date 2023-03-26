import jwt from "jsonwebtoken";

export const verifyToken = (req, res) => {
  const token = req.cookies.accessToken;
  if (!token) return res.status(401).send("You are not authenticated");

  jwt.verify(token, process.env.JWT_KEY, async (err, payload) => {
    if (!token) return res.status(403).send("Token Not Valid");
    req.userId = payload.id;
    req.isSeller = payload.isSeller;
  });
};