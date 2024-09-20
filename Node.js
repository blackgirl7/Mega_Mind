const express = require("express");
const app = express();
app.use(express.json());

app.post("/api/save-progress", (req, res) => {
  const { userId, progress } = req.body;
  // Save progress to database (e.g., MongoDB)
  res.send({ message: "Progress saved!" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
