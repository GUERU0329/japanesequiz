import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage.jsx";
import QuizPage from "./pages/QuizPage.jsx";
import ReviewPage from "./pages/ReviewPage.jsx";
import ScenarioQuizPage from "./pages/ScenarioQuizPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/review/:sessionId" element={<ReviewPage />} />
        <Route path="/review/:sessionId/quiz" element={<QuizPage />} />
        <Route path="/scenario/:quizId" element={<ScenarioQuizPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
