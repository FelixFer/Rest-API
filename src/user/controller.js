const { User } = require("../../db");

const getUsers = async (req, res) => {
  const users = await User.findAll();
  console.log(users.every((user) => user instanceof User)); // true
  console.log("All users:", JSON.stringify(users, null, 2));
  return res.json({ data: users });
};

const createUsers = async (req, res) => {
  const { name, email, phone, address } = req.body;
  const jane = await User.create({ name, email, phone, address });
  console.log("Jane's auto-generated ID:", jane.id);
  return res.json({ data: jane });
};

const updateUsers = async (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address } = req.body;
  await User.update(
    { name, email, phone, address },
    {
      where: {
        id,
      },
    }
  );
  return res.send("Updated");
};

const deleteUsers = async (req, res) => {
  const { id } = req.params;
  await User.destroy({
    where: {
      id,
    },
  });
  return res.send("Deleted");
};

module.exports = {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
};
