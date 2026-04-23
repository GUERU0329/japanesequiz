import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import confetti from "canvas-confetti";
import dailyLessons from "../data/dailyLessons.jsx";

function QuizPage() {
  const { sessionId } = useParams();
  const session = dailyLessons.find((item) => item.id === sessionId);
  const [answers, setAnswers] = useState({});

  const effectAudioRef = useRef(null);

  const score = useMemo(() => {
    if (!session) return 0;
    return session.quiz.questions.reduce((total, question, index) => {
      return answers[index] === question.answerIndex ? total + 1 : total;
    }, 0);
  }, [answers, session]);

  useEffect(() => {
    return () => {
      if (effectAudioRef.current) {
        effectAudioRef.current.pause();
        effectAudioRef.current.currentTime = 0;
      }
    };
  }, []);

  const playEffect = (src, volume = 0.85) => {
    try {
      if (effectAudioRef.current) {
        effectAudioRef.current.pause();
        effectAudioRef.current.currentTime = 0;
      }

      const audio = new Audio(src);
      audio.volume = volume;
      effectAudioRef.current = audio;
      audio.play().catch(() => {});
    } catch (error) {
      console.error(error);
    }
  };

  const fireCorrectConfetti = () => {
    const duration = 1600;
    const end = Date.now() + duration;

    confetti({
      particleCount: 100,
      spread: 75,
      startVelocity: 42,
      origin: { y: 0.58 },
    });

    const interval = window.setInterval(() => {
      if (Date.now() > end) {
        window.clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 26,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.72 },
      });

      confetti({
        particleCount: 26,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.72 },
      });
    }, 240);
  };

  const handleAnswerClick = (questionIndex, choiceIndex) => {
    if (!session) return;

    const question = session.quiz.questions[questionIndex];
    const previousAnswer = answers[questionIndex];
    const isFirstAnswer = previousAnswer === undefined;

    if (!isFirstAnswer) return;

    const isNewCorrect = choiceIndex === question.answerIndex;
    const wasAlreadyCorrect = previousAnswer === question.answerIndex;

    setAnswers((current) => ({
      ...current,
      [questionIndex]: choiceIndex,
    }));

    if (isNewCorrect && (isFirstAnswer || !wasAlreadyCorrect)) {
      playEffect("/audio/effects/correct.mp3", 0.9);
      fireCorrectConfetti();
    }
  };

  if (!session) {
    return (
      <main className="review-app quiz-page">
        <section className="empty-state">
          <p className="eyebrow">Not found</p>
          <h1>この日のクイズが見つかりません</h1>
          <Link to="/" className="review-button">
            ホームに戻る
          </Link>
        </section>
      </main>
    );
  }

  const answeredCount = Object.keys(answers).length;
  const isComplete = answeredCount === session.quiz.questions.length;

  return (
    <main className="review-app quiz-page">
      <nav className="review-nav">
        <Link to="/">ホーム</Link>
        <span>/</span>
        <Link to={`/review/${session.id}`}>{session.dateLabel}</Link>
        <span>/</span>
        <span>クイズ</span>
      </nav>

      <header className="review-header quiz-header">
        <div>
          <p className="eyebrow">{session.dateLabel}</p>
          <h1>{session.quiz.title}</h1>
          <p>{session.quiz.description}</p>
        </div>
        <div className="score-card">
          <span>Score</span>
          <strong>
            {score}/{session.quiz.questions.length}
          </strong>
        </div>
      </header>

      <section className="quiz-list">
        {session.quiz.questions.map((question, questionIndex) => {
          const selectedAnswer = answers[questionIndex];
          const hasAnswered = selectedAnswer !== undefined;

          return (
            <article key={questionIndex} className="daily-quiz-card">
              <p className="question-number">Question {questionIndex + 1}</p>

              <h2 className="daily-quiz-prompt">{question.prompt}</h2>

              <div className="daily-choice-list">
                {question.choices.map((choice, choiceIndex) => {
                  const isSelected = selectedAnswer === choiceIndex;
                  const isCorrect = question.answerIndex === choiceIndex;
                  const resultClass =
                    hasAnswered && isCorrect
                      ? "correct"
                      : hasAnswered && isSelected
                        ? "wrong"
                        : "";

                  return (
                    <button
                      key={choiceIndex}
                      type="button"
                      className={`daily-choice ${isSelected ? "selected" : ""} ${resultClass}`}
                      disabled={hasAnswered}
                      onClick={() => handleAnswerClick(questionIndex, choiceIndex)}
                    >
                      <span>{choiceIndex + 1}</span>
                      {choice}
                    </button>
                  );
                })}
              </div>

              {hasAnswered && (
                <p className="quiz-explanation">
                  {selectedAnswer === question.answerIndex ? "正解です。 " : "もう少し。 "}
                  {question.explanation}
                </p>
              )}
            </article>
          );
        })}
      </section>

      {isComplete && (
        <section className="quiz-finish-card">
          <p className="eyebrow">Finished</p>
          <h2>
            {score}/{session.quiz.questions.length} 問正解
          </h2>
          <Link to={`/review/${session.id}`} className="review-button primary">
            復習ページへ戻る
          </Link>
        </section>
      )}
    </main>
  );
}

export default QuizPage;
