import cafeQuiz from "./quiz/cafeQuiz.jsx";
import cakeShopQuiz from "./quiz/cakeShopQuiz.jsx";
import coloradoSnowQuiz from "./quiz/coloradoSnowQuiz.jsx";
import earthquakeQuiz from "./quiz/earthquake.jsx";

const quizMeta = [
  {
    id: cafeQuiz.id,
    title: cafeQuiz.title,
    description: cafeQuiz.description,
    quiz: cafeQuiz,
  },
  {
    id: cakeShopQuiz.id,
    title: cakeShopQuiz.title,
    description: cakeShopQuiz.description,
    quiz: cakeShopQuiz,
  },
    {
    id: coloradoSnowQuiz.id,
    title: coloradoSnowQuiz.title,
    description: coloradoSnowQuiz.description,
    quiz: coloradoSnowQuiz,
  },
      {
    id: earthquakeQuiz.id,
    title: earthquakeQuiz.title,
    description: earthquakeQuiz.description,
    quiz: earthquakeQuiz,
  },
];

export default quizMeta;
