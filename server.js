const express = require("express");
const userRoutes = require("./src/user/routes");
const groupRoutes = require("./src/group/routes");
const taskRoutes = require("./src/task/routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/groups", groupRoutes);
app.use("/api/v1/tasks", taskRoutes);

app.listen(port, () => console.log(`app listening on port ${port}`));
