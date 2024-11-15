import test from "../services/test.services.js"
const getStatus = (req, res) => {
  res.status(200).json({ success: true, message : "Your project is running..." });
};

export { getStatus }