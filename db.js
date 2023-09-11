const { Sequelize, DataTypes, Deferrable } = require("sequelize");

const sequelize = new Sequelize("users", "postgres", "test", {
  host: "localhost",
  dialect: "postgres",
});

async function connect() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

connect();

const User = sequelize.define(
  "user",
  {
    // Model attributes are defined here
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

const Group = sequelize.define(
  "group",
  {
    // Model attributes are defined here
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

const Task = sequelize.define(
  "task",
  {
    // Model attributes are defined here
    // id: {
    //   type: DataTypes.INTEGER,
    //   primaryKey: true,
    // },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    deadline: {
      type: DataTypes.DATE,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
        deferrable: Deferrable.INITIALLY_IMMEDIATE,
      },
    },
  },
  {
    timestamps: false,
  }
);

module.exports = {
  User,
  Group,
  Task,
};

// `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true

// const Pool = require("pg").Pool;

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "users",
//   password: "test",
//   port: 5432,
// });

// module.exports = pool;
