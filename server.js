import express from "express";

const app = express();
const PORT = process.env.PORT || "8080";
const HOST = process.env.HOST || "192.168.1.5";

app.get("/", (req, res) => {
  res.send("server is running");
});

app.listen(PORT, HOST, () => {
  console.log(`Server is running on port ${HOST}${PORT}`);
});
