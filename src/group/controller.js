const db = require("../../db");

const getGroups = async (req, res) => {
  const groups = await db.Group.findAll();
  console.log(groups.every((group) => group instanceof db.Group)); // true
  console.log("All groups:", JSON.stringify(groups, null, 2));
  return res.json({ data: groups });
};

const createGroups = async (req, res) => {
  const { name, description } = req.body;
  const groupA = await db.Group.create({ name, description });
  // console.log("Jane's auto-generated ID:", jane.id);
  return res.json({ data: groupA });
};

const updateGroups = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  await db.Group.update(
    { name, description },
    {
      where: {
        id,
      },
    }
  );
  return res.send("Updated");
};

const deleteGroups = async (req, res) => {
  const { id } = req.params;
  await db.Group.destroy({
    where: {
      id,
    },
  });
  return res.send("OK");
};

module.exports = {
  getGroups,
  createGroups,
  updateGroups,
  deleteGroups,
};
