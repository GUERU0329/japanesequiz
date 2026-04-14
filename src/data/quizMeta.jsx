import cafeQuiz from "./quiz/cafeQuiz.jsx";
import cakeShopQuiz from "./quiz/cakeShopQuiz.jsx";

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
];

export default quizMeta;