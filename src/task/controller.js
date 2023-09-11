const { Task } = require("../../db");

const getTasks = async (req, res) => {
  const tasks = await Task.findAll();
  console.log(tasks.every((task) => task instanceof Task)); // true
  console.log("All tasks:", JSON.stringify(tasks, null, 2));
  return res.json({ data: tasks });
};

const createTasks = async (req, res) => {
  const { name, deadline, user_id } = req.body;
  const taskA = await Task.create({ name, deadline, user_id });
  // console.log("Jane's auto-generated ID:", jane.id);
  return res.json({ data: taskA });
};

const updateTasks = async (req, res) => {
  const { id } = req.params;
  const { name, deadline, user_id } = req.body;
  await Task.update(
    { name, deadline, user_id },
    {
      where: {
        id,
      },
    }
  );
  return res.send("Updated");
};

const deleteTasks = async (req, res) => {
  const { id } = req.params;
  await Task.destroy({
    where: {
      id,
    },
  });
  return res.send("OK");
};

module.exports = {
  getTasks,
  createTasks,
  updateTasks,
  deleteTasks,
};
