import cafeQuiz from "./quiz/cafeQuiz.jsx";
import cakeShopQuiz from "./quiz/cakeShopQuiz.jsx";
import coloradoSnowQuiz from "./quiz/coloradoSnowQuiz.jsx";

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
];

export default quizMeta;