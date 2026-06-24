import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import dailyLessons from "../data/dailyLessons.jsx";
import quizMeta from "../data/quizMeta.jsx";

function ReviewPage() {
  const { sessionId } = useParams();
  const [selectedAnswers, setSelectedAnswers] = useState({});
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

  const TwoLevelPitchGraph = ({ pitchUnits, pitchLevels, movement, focusIndex, accent, tone }) => {
    if (!pitchUnits || !pitchLevels) return null;

    const count = Math.min(pitchUnits.length, pitchLevels.length);
    if (count === 0) return null;

    const safeUnits = pitchUnits.slice(0, count);
    const safeLevels = pitchLevels.slice(0, count);
    const safeFocusIndex =
      typeof focusIndex === "number" && focusIndex >= 0 && focusIndex < count
        ? focusIndex
        : null;

    if (pitchUnits.length !== pitchLevels.length) {
      console.warn("TwoLevelPitchGraph: pitchUnits and pitchLevels length mismatch", {
        pitchUnits,
        pitchLevels,
      });
    }

    const axisWidth = 56;
    const rightPadding = 44;
    const minPlotWidth = 160;
    const pointGap = 52;
    const axisX = 28;
    const plotStartX = axisWidth + 24;
    const plotWidth = Math.max((count - 1) * pointGap, minPlotWidth);
    const width = plotStartX + plotWidth + rightPadding;
    const plotEndX = width - rightPadding;
    const highY = 28;
    const lowY = 78;
    const labelY = 112;
    const height = 126;
    const getY = (level) => (level === "high" ? highY : lowY);
    const getX = (index) => {
      if (count <= 1) return plotStartX;
      return plotStartX + (index * (plotEndX - plotStartX)) / (count - 1);
    };
    const getLineClass = (currentLevel, nextLevel) => {
      if (currentLevel === nextLevel) return "level";
      return nextLevel === "high" ? "rising" : "falling";
    };
    const textFill = "rgba(255, 248, 232, 0.92)";
    const axisFill = "rgba(255, 248, 232, 0.82)";
    const axisStroke = "rgba(255, 248, 232, 0.22)";
    const guideStroke = "rgba(255, 248, 232, 0.08)";
    const axisPillFill = "rgba(255, 248, 232, 0.08)";
    const axisPillStroke = "rgba(255, 248, 232, 0.16)";
    const focusRingColor =
      tone === "confirm"
        ? "rgba(255, 180, 96, 0.95)"
        : tone === "question"
          ? "rgba(112, 224, 207, 0.95)"
          : tone === "statement"
            ? "rgba(166, 196, 255, 0.95)"
            : "rgba(255, 166, 102, 0.95)";

    return (
      <div className={`pitch-chart pitch-chart-${movement ?? "neutral"}`}>
        <div className="pitch-chart-scroll">
          <svg
            className="pitch-svg"
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            role="img"
            aria-label="二段階ピッチグラフ"
          >
            <line
              x1={axisX}
              y1={highY - 12}
              x2={axisX}
              y2={lowY + 12}
              className="pitch-axis-line"
              stroke={axisStroke}
              strokeWidth="1"
              opacity="1"
            />
            <line
              x1={plotStartX}
              y1={highY}
              x2={plotEndX}
              y2={highY}
              className="pitch-guide-line"
              stroke={guideStroke}
              strokeWidth="1"
              opacity="1"
            />
            <line
              x1={plotStartX}
              y1={lowY}
              x2={plotEndX}
              y2={lowY}
              className="pitch-guide-line"
              stroke={guideStroke}
              strokeWidth="1"
              opacity="1"
            />
            <g transform={`translate(${axisX - 18}, ${highY - 10})`}>
              <rect
                width="26"
                height="20"
                rx="10"
                className="pitch-axis-pill"
                fill={axisPillFill}
                stroke={axisPillStroke}
                opacity="1"
              />
              <text
                x="13"
                y="14"
                className="pitch-axis-label"
                textAnchor="middle"
                fill={axisFill}
                fontSize="11"
                fontWeight="700"
                opacity="1"
              >
                上
              </text>
            </g>
            <g transform={`translate(${axisX - 18}, ${lowY - 10})`}>
              <rect
                width="26"
                height="20"
                rx="10"
                className="pitch-axis-pill"
                fill={axisPillFill}
                stroke={axisPillStroke}
                opacity="1"
              />
              <text
                x="13"
                y="14"
                className="pitch-axis-label"
                textAnchor="middle"
                fill={axisFill}
                fontSize="11"
                fontWeight="700"
                opacity="1"
              >
                下
              </text>
            </g>
            {safeLevels.slice(0, -1).map((level, index) => {
              const nextLevel = safeLevels[index + 1];
              const x1 = getX(index);
              const x2 = getX(index + 1);
              return (
                <line
                  key={`${safeUnits[index]}-${safeUnits[index + 1]}-${index}`}
                  className={`pitch-svg-line ${getLineClass(level, nextLevel)}`}
                  x1={x1}
                  y1={getY(level)}
                  x2={x2}
                  y2={getY(nextLevel)}
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              );
            })}
            {safeLevels.map((level, index) => {
              const x = getX(index);
              const y = getY(level);
              const isFocused = safeFocusIndex === index;
              return (
                <g key={`${safeUnits[index]}-${index}`}>
                  {isFocused && (
                    <circle
                      cx={x}
                      cy={y}
                      r="11"
                      className="pitch-svg-focus-ring"
                      fill="none"
                      stroke={focusRingColor}
                      strokeWidth="3"
                    />
                  )}
                  <circle className={`pitch-svg-dot ${level}`} cx={x} cy={y} r="6.5" />
                  <text
                    x={x}
                    y={labelY}
                    className="pitch-unit-label"
                    textAnchor="middle"
                    fill={textFill}
                    fontSize="14"
                    fontWeight="700"
                    opacity="1"
                  >
                    {safeUnits[index]}
                  </text>
                </g>
              );
            })}
          </svg>
          {accent?.type === "no-drop" && (
            <span className="pitch-no-drop-marker">○ 下がらない</span>
          )}
        </div>
      </div>
    );
  };

  const renderPitchChart = (item) => (
    <TwoLevelPitchGraph
      pitchUnits={item.pitchUnits ?? item.pitchLabels}
      pitchLevels={item.pitchLevels ?? item.pitchPattern}
      movement={item.movement ?? item.sentenceFinal?.type}
      focusIndex={item.sentenceFinal?.focusIndex}
      accent={item.accent}
      tone={item.tone}
    />
  );

  const renderPitchMeta = (item) => {
    if (!item.accent && !item.sentenceFinal) return null;

    return (
      <div className="pitch-meta-list">
        {item.accent && (
          <span className="pitch-meta">
            {item.accent.type === "no-drop"
              ? `${item.accent.label} / ○ 下がらない`
              : `${item.accent.label} / 下がる`}
          </span>
        )}
        {item.sentenceFinal && (
          <span className="pitch-meta">
            {renderLessonLabel(item.sentenceFinal.label ?? item.sentenceFinal.type)} /{" "}
            {item.sentenceFinal.note}
          </span>
        )}
      </div>
    );
  };

  const renderLessonLabel = (label) => {
    if (label === "平叙文") {
      return (
        <ruby>
          平叙文<rt>へいじょぶん</rt>
        </ruby>
      );
    }
    if (label === "疑問文") {
      return (
        <ruby>
          疑問文<rt>ぎもんぶん</rt>
        </ruby>
      );
    }
    if (label === "納得・確認") {
      return (
        <>
          <ruby>
            納得<rt>なっとく</rt>
          </ruby>
          ・
          <ruby>
            確認<rt>かくにん</rt>
          </ruby>
        </>
      );
    }
    return label;
  };

  const renderExample = (example, exampleIndex) => {
    const isStructuredExample = typeof example === "object" && example !== null;

    return (
      <div
        key={exampleIndex}
        className={`learning-example ${
          isStructuredExample && example.tone === "danger" ? "danger-example" : ""
        } ${
          isStructuredExample && example.tone === "danger" && example.label !== "NG"
            ? "danger-auto-badge"
            : ""
        } ${isStructuredExample && example.tone === "success" ? "success-example" : ""}`.trim()}
      >
        {isStructuredExample && example.label && (
          <span className="learning-example-label">{example.label}</span>
        )}
        {isStructuredExample ? (example.text ?? example) : example}
        {isStructuredExample && renderPitchChart(example)}
        {isStructuredExample && renderPitchMeta(example)}
        {isStructuredExample && example.meaning && (
          <span className="learning-example-meaning">= {example.meaning}</span>
        )}
        {isStructuredExample && example.note && (
          <span className="learning-example-note">{example.note}</span>
        )}
      </div>
    );
  };

  const getToneFromLabel = (label) => {
    if (label === "平叙文") return "statement";
    if (label === "疑問文") return "question";
    if (label === "納得・確認") return "confirm";
    return "";
  };

  const getCategoryClassFromTone = (tone) => {
    if (tone === "statement") return "pitch-category-statement";
    if (tone === "question") return "pitch-category-question";
    if (tone === "confirm") return "pitch-category-confirmation";
    return "";
  };

  const renderComparison = (comparison, comparisonIndex) => {
    const tone = comparison.tone ?? getToneFromLabel(comparison.label);
    const comparisonWithTone = { ...comparison, tone };

    return (
      <div
        key={`${comparison.label}-${comparisonIndex}`}
        className={`pitch-comparison-card ${tone ? `${tone}-panel` : ""}`.trim()}
      >
        <span className={`pitch-category ${getCategoryClassFromTone(tone)}`.trim()}>
          {renderLessonLabel(comparison.label)}
        </span>
        <strong>{comparison.text}</strong>
        {renderPitchChart(comparisonWithTone)}
        {renderPitchMeta(comparisonWithTone)}
      </div>
    );
  };

  const renderFlowStep = (step, stepIndex) => (
    <article
      key={`${step.badge ?? step.label}-${stepIndex}`}
      className={`pitch-flow-step ${step.tone ? `pitch-flow-step-${step.tone}` : ""}`.trim()}
    >
      <span className="learning-example-label">{step.badge ?? step.label}</span>
      {step.heading && <h4>{step.heading}</h4>}
      {step.title && <strong>{step.title}</strong>}
      {step.description && <p>{step.description}</p>}
      {step.meaning && <span className="learning-example-meaning">= {step.meaning}</span>}
      {step.sections && (
        <div className="pitch-flow-section-list">
          {step.sections.map((section) => (
            <div key={section.label} className="pitch-flow-section">
              <span>{section.label}</span>
              <strong>{section.title}</strong>
              <p>= {section.description}</p>
            </div>
          ))}
        </div>
      )}
      {step.caution && (
        <div className="pitch-flow-caution">
          <span>{step.caution.label}</span>
          <strong>{step.caution.text}</strong>
          <p>{step.caution.description}</p>
        </div>
      )}
      {renderPitchChart(step)}
      {renderPitchMeta(step)}
      {step.note && <p className="pitch-flow-note">{step.note}</p>}
    </article>
  );

  const renderFlowSteps = (item) => (
    <div className="pitch-flow-list">
      {item.flowSteps.map(renderFlowStep)}
    </div>
  );

  const renderPitchMovement = (item) => {
    if (!item.pitchPattern && !item.pitchLevels && !item.comparisons) return null;

    return (
      <div className="pitch-movement-panel">
        {item.category && (
          <span
            className={`pitch-category ${
              item.category === "納得・確認"
                ? "pitch-category-confirmation"
                : item.category === "疑問文"
                  ? "pitch-category-question"
                  : item.category === "平叙文"
                    ? "pitch-category-statement"
                    : ""
            }`.trim()}
          >
            {renderLessonLabel(item.category)}
          </span>
        )}
        {item.reading && <span className="pitch-reading">{item.reading}</span>}
        {renderPitchChart(item)}
        {renderPitchMeta(item)}
        {item.comparisons && (
          <div className="pitch-comparison-grid intonation-comparison-panels">
            {item.comparisons.map(renderComparison)}
          </div>
        )}
      </div>
    );
  };

  const renderLearningExamples = (item) => {
    if (item.summaryTable) return renderSummaryTable(item.summaryTable);
    if (item.flowSteps) return renderFlowSteps(item);
    if (item.examples) {
      return (
        <div className="learning-example-list">
          {item.examples.map(renderExample)}
        </div>
      );
    }
    if (item.example) return <div className="learning-example">{item.example}</div>;
    return null;
  };

  const renderLearningLink = (link) => {
    if (!link?.href) return null;

    return (
      <a
        className="review-button reference-link-button"
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.label}
      </a>
    );
  };

  const renderChildExamples = (child) => {
    if (child.examples) {
      return (
        <div className="learning-example-list">
          {child.examples.map(renderExample)}
        </div>
      );
    }

    return <div className="learning-example">{child.example}</div>;
  };

  const getQuestionTypeLabel = (question) => {
    if (question.type === "fill-blank") return "空欄補充";
    return question.skill ?? "内容確認";
  };

  const renderPassageQuestions = (passageQuestions) => {
    if (!passageQuestions?.questions?.length) return null;

    return (
      <section className="reading-check-card">
        <div className="reading-check-header">
          <span>Reading Check</span>
          <h4>{passageQuestions.title}</h4>
        </div>
        <div className="reading-question-list">
          {passageQuestions.questions.map((question, questionIndex) => (
            (() => {
              const questionKey = `${passageQuestions.title}-${questionIndex}`;
              const selectedIndex = selectedAnswers[questionKey] ?? null;
              const answered = selectedIndex !== null;

              return (
                <article key={questionKey} className="reading-question-card">
                  <div className="reading-question-meta">
                    <span className="reading-question-number">{questionIndex + 1}</span>
                    <span className="reading-question-type">{getQuestionTypeLabel(question)}</span>
                  </div>
                  <p className="reading-question-prompt">{question.prompt}</p>
                  <div className="reading-choice-grid">
                    {question.choices.map((choice, choiceIndex) => {
                      const isCorrect = answered && choiceIndex === question.answerIndex;
                      const isIncorrect =
                        answered &&
                        choiceIndex === selectedIndex &&
                        selectedIndex !== question.answerIndex;

                      return (
                        <button
                          type="button"
                          key={`${questionIndex}-${choiceIndex}`}
                          className={`reading-choice ${isCorrect ? "is-correct" : ""} ${
                            isIncorrect ? "is-incorrect" : ""
                          } ${answered && choiceIndex === selectedIndex ? "is-selected" : ""}`.trim()}
                          onClick={() =>
                            setSelectedAnswers((current) => ({
                              ...current,
                              [questionKey]: choiceIndex,
                            }))
                          }
                        >
                          <span>{choiceIndex + 1}</span>
                          <p>{choice}</p>
                        </button>
                      );
                    })}
                  </div>
                  {answered && (
                    <div className="reading-explanation">
                      <strong>{selectedIndex === question.answerIndex ? "正解" : "解説"}</strong>
                      <p>{question.explanation}</p>
                    </div>
                  )}
                </article>
              );
            })()
          ))}
        </div>
      </section>
    );
  };

  const renderLearningItem = (item) => (
    <article
      key={item.id}
      className={`learning-card learning-card-${item.id} ${item.featured ? "featured-learning-card" : ""} ${item.children ? "parent-learning-card" : ""} ${item.comparisons ? "intonation-comparison-card" : ""} ${item.id === "kare-wa-gakusei-desu-pitch" || item.id === "kare-wa-gakusei-desu-ka-pitch" || item.id === "kare-wa-gakusei-desu-ka-realization" ? "intonation-stacked-card" : ""} ${item.tone === "statement" ? "statement-panel" : ""} ${item.tone === "question" ? "question-panel" : ""} ${item.tone === "confirm" ? "confirm-panel" : ""}`.trim()}
    >
      <h3>{item.title}</h3>
      {item.bodyAsBlock ? (
        <div className="learning-card-body">{item.body}</div>
      ) : (
        <p>{item.body}</p>
      )}
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
      {renderPitchMovement(item)}
      {renderLearningExamples(item)}
      {renderPassageQuestions(item.passageQuestions)}
      {item.summary && <div className="learning-card-summary">{item.summary}</div>}
      {renderLearningLink(item.link)}
      {item.children && (
        <div className="child-learning-grid">
          {item.children.map((child) => (
            <article key={child.id} className="learning-card child-learning-card">
              <h3>{child.title}</h3>
              <p>{child.body}</p>
              {renderPitchMovement(child)}
              {renderChildExamples(child)}
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

  const getOrderedLearningItems = (learningSection) => {
    if (learningSection.id !== "sentence-final-intonation") return learningSection.items;

    const comparisonItems = learningSection.items.filter((item) => item.comparisons);
    const normalItems = learningSection.items.filter((item) => !item.comparisons);
    return [...comparisonItems, ...normalItems];
  };

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
                className={`learning-section-card learning-section-${learningSection.id} ${learningSection.layout ?? ""}`.trim()}
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

                <div
                  className={`learning-grid ${
                    learningSection.id === "sentence-final-intonation"
                      ? "sentence-final-grid"
                      : learningSection.id === "pitch-core"
                        ? "pronunciation-core-grid"
                        : learningSection.id === "word-pitch"
                          ? "word-pitch-grid"
                      : ""
                  }`.trim()}
                >
                  {getOrderedLearningItems(learningSection).map(renderLearningItem)}
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
