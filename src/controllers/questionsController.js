import questions from "../model/questions.json" assert { type: "json" };

const getAll = (request, response) => {
  response.status(200).send(questions);
};

const getOneQuestion = async (request, response) => {
  const randomIndex = Math.floor(Math.random() * questions.length);
  const randomQuestion = questions[randomIndex];
  response.status(200).send(randomQuestion);
};

export default {
  getAll,
  getOneQuestion,
};
