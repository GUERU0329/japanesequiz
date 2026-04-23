import { Link, useParams } from "react-router-dom";
import dailyLessons from "../data/dailyLessons.jsx";
import quizMeta from "../data/quizMeta.jsx";

function ReviewPage() {
  const { sessionId } = useParams();
  const session = dailyLessons.find((item) => item.id === sessionId);

  if (!session) {
    return (
      <main className="review-app review-page">
        <section className="empty-state">
          <p className="eyebrow">Not found</p>
          <h1>この日の復習ページが見つかりません</h1>
          <Link to="/" className="review-button">
            ホームに戻る
          </Link>
        </section>
      </main>
    );
  }

  const scenarioQuiz = session.scenarioQuizId
    ? quizMeta.find((quiz) => quiz.id === session.scenarioQuizId)
    : null;

  return (
    <main className="review-app review-page">
      <header className="app-topbar">
        <div className="app-brand">

          <div>
            <strong>Avery's Japanese Learning App</strong>
            <span>{session.dateLabel}</span>
          </div>
        </div>
        <nav className="review-nav">
          <Link to="/">ホーム</Link>
          <span>/</span>
          <span>{session.dateLabel}</span>
        </nav>
      </header>

      <header className="review-header">
        <div>
          <p className="eyebrow">レッスンの内容</p>
          <h1>{session.title}</h1>
          <p>{session.subtitle}</p>
        </div>
        <div className="quiz-link-group">
          <Link to={`/review/${session.id}/quiz`} className="review-button primary">
            今日のクイズ
          </Link>
          {scenarioQuiz && (
            <Link to={`/scenario/${scenarioQuiz.id}`} className="review-button">
              場面別クイズ
            </Link>
          )}
        </div>
      </header>

      <section className="review-section">
        <div className="section-heading">
          <span>Today's Lesson</span>
          <h2><ruby>学習内容<rt>がくしゅうないよう</rt></ruby></h2>
        </div>

        <div className="learning-grid">
          {session.learningItems.map((item) => (
            <article key={item.id} className="learning-card">
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              {item.examples ? (
                <div className="learning-example-list">
                  {item.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="learning-example">
                      {example.label && <span className="learning-example-label">{example.label}</span>}
                      {example.text ?? example}
                      {example.meaning && (
                        <span className="learning-example-meaning">= {example.meaning}</span>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="learning-example">{item.example}</div>
              )}
            </article>
          ))}
        </div>

        {session.advancedLearning && (
          <aside className="advanced-learning-card">
            <div>
              <span className="advanced-learning-kicker">{session.advancedLearning.title}</span>
              <p>{session.advancedLearning.body}</p>
            </div>
            <div className="learning-example-list">
              {session.advancedLearning.examples.map((example, exampleIndex) => (
                <div key={exampleIndex} className="learning-example">
                  {example.label && <span className="learning-example-label">{example.label}</span>}
                  {example.text}
                  {example.meaning && (
                    <span className="learning-example-meaning">= {example.meaning}</span>
                  )}
                </div>
              ))}
            </div>
          </aside>
        )}
      </section>

      <section className="review-section">
        <div className="section-heading">
          <span>Mistakes</span>
          <h2>間違えていたところ</h2>
        </div>

        <div className="mistake-list">
          {session.mistakes.map((mistake) => (
            <article key={mistake.id} className="mistake-card">
              <p className="mistake-label">{mistake.label}</p>
              <p className="mistake-point">{mistake.point}</p>
              <div className="phrase-pair">
                <div>
                  <span>{mistake.saidLabel ?? "言っていた文"}</span>
                  <p>{mistake.said}</p>
                </div>
                <div>
                  <span>{mistake.naturalLabel ?? "自然な文"}</span>
                  <p>{mistake.natural}</p>
                </div>
              </div>
              {mistake.advancedExample && (
                <div className="mistake-advanced-example">
                  <span>{mistake.advancedExample.label}</span>
                  <p>{mistake.advancedExample.text}</p>
                  {mistake.advancedExample.meaning && (
                    <small>{mistake.advancedExample.meaning}</small>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="ryuta-note">
        <div className="section-heading">
          <span>From Ryuta</span>
          <h2><ruby>隆太<rt>りゅうた</rt></ruby>からひとこと</h2>
        </div>
        <p>{session.messageFromRyuta}</p>
      </section>

      <section className="quiz-launch-card">
        <div>
          <p className="eyebrow">Quiz</p>
          <h2>クイズへ</h2>
          <p>
            今日の内容だけを確認するミニクイズと、会話の流れで練習する場面別クイズがあります。
          </p>
        </div>
        <div className="quiz-link-group">
          <Link to={`/review/${session.id}/quiz`} className="review-button primary">
            今日のクイズを始める
          </Link>
          {scenarioQuiz && (
            <Link to={`/scenario/${scenarioQuiz.id}`} className="review-button">
              場面別クイズへ
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}

export default ReviewPage;
