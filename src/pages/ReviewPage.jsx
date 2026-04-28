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

  const renderExample = (example, exampleIndex) => (
    <div key={exampleIndex} className="learning-example">
      {example.label && <span className="learning-example-label">{example.label}</span>}
      {example.text ?? example}
      {example.meaning && (
        <span className="learning-example-meaning">= {example.meaning}</span>
      )}
    </div>
  );

  const renderLearningItem = (item) => (
    <article
      key={item.id}
      className={`learning-card learning-card-${item.id} ${item.featured ? "featured-learning-card" : ""} ${item.children ? "parent-learning-card" : ""}`.trim()}
    >
      <h3>{item.title}</h3>
      <p>{item.body}</p>
      {item.quickPoints && (
        <div className="quick-points-grid">
          {item.quickPoints.map((point) => (
            <div key={point.label} className="quick-point-card">
              <span className="quick-point-label">{point.label}</span>
              <div className="quick-point-value">{point.value}</div>
            </div>
          ))}
        </div>
      )}
      {item.summaryTable ? (
        renderSummaryTable(item.summaryTable)
      ) : item.examples ? (
        <div className="learning-example-list">
          {item.examples.map(renderExample)}
        </div>
      ) : (
        <div className="learning-example">{item.example}</div>
      )}
      {item.children && (
        <div className="child-learning-grid">
          {item.children.map((child) => (
            <article key={child.id} className="learning-card child-learning-card">
              <h3>{child.title}</h3>
              <p>{child.body}</p>
              {child.examples ? (
                <div className="learning-example-list">
                  {child.examples.map(renderExample)}
                </div>
              ) : (
                <div className="learning-example">{child.example}</div>
              )}
            </article>
          ))}
        </div>
      )}
    </article>
  );

  const renderSummaryTable = (table) => (
    <div className="learning-summary-table" role="table" aria-label={table.ariaLabel}>
      <div className="learning-summary-table-header" role="rowgroup">
        <div role="row" className="learning-summary-table-row learning-summary-table-row-header">
          {table.columns.map((column) => (
            <div key={column.key} role="columnheader" className="learning-summary-table-cell">
              {column.label}
            </div>
          ))}
        </div>
      </div>
      <div className="learning-summary-table-body" role="rowgroup">
        {table.rows.map((row, rowIndex) => (
          <div key={rowIndex} role="row" className="learning-summary-table-row">
            <div role="cell" className="learning-summary-table-cell learning-summary-table-parent">
              {row.parent}
            </div>
            <div role="cell" className="learning-summary-table-cell">
              {row.category}
            </div>
            <div role="cell" className="learning-summary-table-cell">
              {row.examples}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

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

        {session.learningSections ? (
          <div className="learning-section-list">
            {session.learningSections.map((learningSection) => (
              <section
                key={learningSection.id}
                className={`learning-section-card ${learningSection.layout ?? ""}`.trim()}
              >
                <div className="learning-section-header">
                  <div>
                    {learningSection.kicker && (
                      <span className="learning-section-kicker">{learningSection.kicker}</span>
                    )}
                    <h3>{learningSection.title}</h3>
                  </div>
                  {learningSection.description && (
                    <p className="learning-section-description">{learningSection.description}</p>
                  )}
                </div>

                {learningSection.highlight && (
                  <div className="learning-section-highlight">
                    {learningSection.highlight.label && (
                      <span className="learning-section-highlight-label">
                        {learningSection.highlight.label}
                      </span>
                    )}
                    <p>{learningSection.highlight.body}</p>
                  </div>
                )}

                <div className="learning-grid">
                  {learningSection.items.map(renderLearningItem)}
                </div>
              </section>
            ))}
          </div>
        ) : (
          <div className="learning-grid">
            {session.learningItems.map(renderLearningItem)}
          </div>
        )}

        {session.advancedLearning && (
          <aside className="advanced-learning-card">
            <div>
              <span className="advanced-learning-kicker">{session.advancedLearning.title}</span>
              <p>{session.advancedLearning.body}</p>
            </div>
            <div className="learning-example-list">
              {session.advancedLearning.examples.map(renderExample)}
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
