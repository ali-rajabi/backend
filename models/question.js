const Question = (sequelize, DataTypes) => {
  const Question = sequelize.define(
    "Question",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      quest: {
        type: DataTypes.STRING,
      },
      answer: {
        type: DataTypes.STRING,
      },
      difficulty: {
        type: DataTypes.ENUM,
        values: ["hard", "medium", "easy"],
      },
    },
    {
      timestamps: true,
      freezeTableName: true,
    }
  );
  Question.sync();
  return Question;
};

module.exports = Question;
