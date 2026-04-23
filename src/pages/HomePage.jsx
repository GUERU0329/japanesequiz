import { Link } from "react-router-dom";
import dailyLessons from "../data/dailyLessons.jsx";

function HomePage() {
  const lessons = [...dailyLessons].sort((a, b) => b.date.localeCompare(a.date));
  const latestLesson = lessons[0];

  return (
    <main className="review-app home-page">


      <section className="review-hero">
        <div>
          <p className="eyebrow">Avery's Japanese Learning App</p>
          <h1>にほんごがくしゅうちょう</h1>
          <p>レッスンごとの学習内容、間違い、クイズを一か所で確認できます。</p>
        </div>
        <div className="app-stat-grid" aria-label="学習状況">
          <div className="app-stat-card">
            <span>Lessons</span>
            <strong>{lessons.length}</strong>
          </div>
          <div className="app-stat-card">
            <span>Latest</span>
            <strong>{latestLesson?.dateLabel ?? "-"}</strong>
          </div>
        </div>
      </section>

      <section className="date-section" aria-label="復習する日付">
        <div className="section-heading">
          <span>Review Dates</span>
          <h2>復習するレッスンの日にち</h2>
        </div>

        <div className="date-grid">
          {lessons.map((lesson) => (
            <Link key={lesson.id} to={`/review/${lesson.id}`} className="date-card">
              <span className="date-card-date">{lesson.dateLabel}</span>
              <strong>{lesson.title}</strong>
              <span>{lesson.subtitle}</span>
              <span className="date-card-action">この日の内容を見る</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

export default HomePage;
