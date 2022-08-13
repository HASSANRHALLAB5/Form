const express = require("express");
const path = require("path");
const app = express();

const PORT = 5000;

app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

app.post("/signup", (req, res) => {
  const signupData = req.body;
  console.log("@@@@@@", signupData);
  return res
    .status(201)
    .json({ success: true, messgae: "your form was recicved" });
});

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, () => console.log(`listining on port ${PORT}`));
