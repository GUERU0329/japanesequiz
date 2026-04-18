import { useEffect, useMemo, useRef, useState } from "react";
import confetti from "canvas-confetti";
import "./App.css";
import quizMeta from "./data/quizMeta.jsx";

function App() {
  const [phase, setPhase] = useState("intro");
  const [introMode, setIntroMode] = useState("home");
  const [selectedQuizIndex, setSelectedQuizIndex] = useState(0);
  const [countdown, setCountdown] = useState(3);
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [questionTimeLeft, setQuestionTimeLeft] = useState(30);

  const audioRef = useRef(null);
  const effectAudioRef = useRef(null);
  const progressTimerRef = useRef(null);
  const timeoutRef = useRef(null);
  const sceneStartRef = useRef(null);
  const remainingTimeRef = useRef(null);
  const audioUnlockedRef = useRef(false);

  const currentQuizMeta = quizMeta[selectedQuizIndex];
  const quizData = currentQuizMeta.quiz;
  const totalSteps = quizData.steps.length;
  const stepData = quizData.steps[currentStep];

  const clearTimers = () => {
    if (progressTimerRef.current) {
      window.clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  const stopAudio = () => {
    clearTimers();

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.onended = null;
      audioRef.current = null;
    }

    setIsPlaying(false);
    setIsPaused(false);
    setSceneProgress(0);
    sceneStartRef.current = null;
    remainingTimeRef.current = null;
  };

  const stopEffectAudio = () => {
    if (effectAudioRef.current) {
      effectAudioRef.current.pause();
      effectAudioRef.current.currentTime = 0;
      effectAudioRef.current = null;
    }
  };

  const playEffect = (src, volume = 0.8) => {
    if (isMuted) return;

    try {
      stopEffectAudio();
      const audio = new Audio(src);
      audio.volume = volume;
      audio.muted = isMuted;
      effectAudioRef.current = audio;
      audio.play().catch((error) => {
        console.error("Effect audio play blocked:", error);
      });
    } catch (error) {
      console.error(error);
    }
  };

  const fireCorrectConfetti = () => {
    const duration = 1800;
    const end = Date.now() + duration;

    confetti({
      particleCount: 100,
      spread: 75,
      startVelocity: 45,
      origin: { y: 0.6 },
    });

    const interval = window.setInterval(() => {
      if (Date.now() > end) {
        window.clearInterval(interval);
        return;
      }

      confetti({
        particleCount: 36,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.72 },
      });

      confetti({
        particleCount: 36,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.72 },
      });
    }, 250);
  };

  const unlockAudio = async () => {
    if (audioUnlockedRef.current) return true;

    try {
      const audio = new Audio();
      audio.muted = true;
      audio.volume = 0;
      audio.src =
        "data:audio/mp3;base64,//uQxAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAAGhgBVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVU=";

      await audio.play();
      audio.pause();
      audio.currentTime = 0;

      audioUnlockedRef.current = true;
      return true;
    } catch (error) {
      console.error("Audio unlock failed:", error);
      return false;
    }
  };

  useEffect(() => {
    if (phase !== "countdown") return;

    if (countdown === 3) {
      playEffect("/audio/effects/countdown.mp3", 0.7);
    }

    if (countdown <= 0) {
      setPhase("scene");
      return;
    }

    const timer = window.setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [phase, countdown]); // eslint-disable-line react-hooks/exhaustive-deps

  const startProgressTracking = (audio) => {
    clearTimers();

    progressTimerRef.current = window.setInterval(() => {
      if (!audio.duration || Number.isNaN(audio.duration)) return;
      const nextProgress = Math.min(audio.currentTime / audio.duration, 1);
      setSceneProgress(nextProgress);
    }, 100);
  };

  const getGoNext = () => {
    return () => {
      if (currentStep < totalSteps - 1) {
        setCurrentStep((prev) => prev + 1);
      } else {
        setPhase("question");
      }
    };
  };

  const playAudioAndAdvance = (audioSrc, onEndedCallback) => {
    stopAudio();

    const audio = new Audio(audioSrc);
    audio.muted = isMuted;
    audioRef.current = audio;

    audio.onplay = () => {
      setIsPlaying(true);
      setIsPaused(false);
      startProgressTracking(audio);
    };

    audio.onended = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setSceneProgress(1);
      clearTimers();

      window.setTimeout(() => {
        setSceneProgress(0);
        onEndedCallback();
      }, 350);
    };

    audio.play().catch((error) => {
      console.error("Scene audio play blocked:", error);
      setIsPlaying(false);
      setIsPaused(false);
    });
  };

  const playAudioAndStay = (audioSrc) => {
    stopAudio();

    const audio = new Audio(audioSrc);
    audio.muted = isMuted;
    audioRef.current = audio;

    audio.onplay = () => {
      setIsPlaying(true);
      setIsPaused(false);
      startProgressTracking(audio);
    };

    audio.onended = () => {
      setIsPlaying(false);
      setIsPaused(false);
      setSceneProgress(1);
      clearTimers();
    };

    audio.play().catch((error) => {
      console.error("Stay audio play blocked:", error);
      setIsPlaying(false);
      setIsPaused(false);
    });
  };

  useEffect(() => {
    if (phase !== "scene") return;

    const goNext = getGoNext();

    if (stepData?.audio) {
      playAudioAndAdvance(stepData.audio, goNext);
      return stopAudio;
    }

    if (stepData?.duration) {
      stopAudio();
      setIsPlaying(true);
      setIsPaused(false);
      setSceneProgress(0);

      sceneStartRef.current = Date.now();
      remainingTimeRef.current = stepData.duration;

      progressTimerRef.current = window.setInterval(() => {
        const elapsed = Date.now() - sceneStartRef.current;
        const nextProgress = Math.min(elapsed / stepData.duration, 1);
        setSceneProgress(nextProgress);
      }, 100);

      timeoutRef.current = window.setTimeout(() => {
        setIsPlaying(false);
        setIsPaused(false);
        setSceneProgress(1);
        clearTimers();

        window.setTimeout(() => {
          setSceneProgress(0);
          goNext();
        }, 350);
      }, stepData.duration);

      return () => {
        clearTimers();
        setIsPlaying(false);
      };
    }
  }, [phase, currentStep, selectedQuizIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (phase !== "question") return;

    setQuestionTimeLeft(30);

    playEffect("/audio/effects/question.mp3", 0.2);

    const timerSound = window.setTimeout(() => {
      playEffect("/audio/effects/timer.mp3", 0.75);
    }, 500);

    if (quizData.question.audio) {
      playAudioAndStay(quizData.question.audio);
    }

    return () => {
      window.clearTimeout(timerSound);
      stopAudio();
    };
  }, [phase, isMuted, selectedQuizIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (phase !== "question") return;

    setQuestionTimeLeft(30);

    const interval = window.setInterval(() => {
      setQuestionTimeLeft((prev) => {
        if (prev <= 1) {
          window.clearInterval(interval);
          setPhase("explanation");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => window.clearInterval(interval);
  }, [phase, selectedQuizIndex, currentStep]);

  useEffect(() => {
    if (phase !== "reaction") return;
    if (!selectedChoice?.reaction?.audio) return;

    playAudioAndStay(selectedChoice.reaction.audio);

    return stopAudio;
  }, [phase, selectedChoice, isMuted]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }

    if (effectAudioRef.current) {
      effectAudioRef.current.muted = isMuted;
      if (isMuted) {
        effectAudioRef.current.pause();
      }
    }
  }, [isMuted]);

  const resetQuizState = () => {
    stopAudio();
    stopEffectAudio();
    setCurrentStep(0);
    setSelectedChoice(null);
    setCountdown(3);
    setSceneProgress(0);
    setIsPaused(false);
    setIsPlaying(false);
    setQuestionTimeLeft(30);
  };

  const startQuiz = async (quizIndex) => {
    await unlockAudio();
    resetQuizState();
    setSelectedQuizIndex(quizIndex);
    setPhase("countdown");
  };

  const startRandomQuiz = async () => {
    const randomIndex = Math.floor(Math.random() * quizMeta.length);
    setIntroMode("home");
    await startQuiz(randomIndex);
  };

  const handleChoiceClick = (choice) => {
    if (selectedChoice) return;

    setSelectedChoice(choice);
    setPhase("reaction");

    if (choice.isCorrect) {
      playEffect("/audio/effects/correct.mp3", 0.9);
      fireCorrectConfetti();
    }
  };

  const restartQuiz = () => {
    resetQuizState();
    setPhase("scene");
  };

  const backToHome = () => {
    resetQuizState();
    setIntroMode("home");
    setPhase("intro");
  };

  const replayCurrentAudio = () => {
    if (phase === "scene" && stepData?.audio) {
      playAudioAndAdvance(stepData.audio, getGoNext());
      return;
    }

    if (phase === "scene" && stepData?.duration) {
      stopAudio();
      setIsPlaying(true);
      setIsPaused(false);
      setSceneProgress(0);

      sceneStartRef.current = Date.now();
      remainingTimeRef.current = stepData.duration;

      progressTimerRef.current = window.setInterval(() => {
        const elapsed = Date.now() - sceneStartRef.current;
        const nextProgress = Math.min(elapsed / stepData.duration, 1);
        setSceneProgress(nextProgress);
      }, 100);

      timeoutRef.current = window.setTimeout(() => {
        setIsPlaying(false);
        setIsPaused(false);
        setSceneProgress(1);
        clearTimers();

        window.setTimeout(() => {
          setSceneProgress(0);
          if (currentStep < totalSteps - 1) {
            setCurrentStep((prev) => prev + 1);
          } else {
            setPhase("question");
          }
        }, 350);
      }, stepData.duration);

      return;
    }

    if (phase === "question" && quizData.question.audio) {
      playAudioAndStay(quizData.question.audio);
      return;
    }

    if (phase === "reaction" && selectedChoice?.reaction?.audio) {
      playAudioAndStay(selectedChoice.reaction.audio);
    }
  };

  const togglePause = () => {
    if (
      phase !== "scene" &&
      phase !== "question" &&
      phase !== "reaction"
    ) {
      return;
    }

    if (audioRef.current && isPlaying && !isPaused) {
      audioRef.current.pause();
      clearTimers();
      setIsPlaying(false);
      setIsPaused(true);
      return;
    }

    if (audioRef.current && isPaused) {
      audioRef.current.play().catch(() => {});
      setIsPlaying(true);
      setIsPaused(false);
      startProgressTracking(audioRef.current);
      return;
    }

    if (
      !audioRef.current &&
      phase === "scene" &&
      stepData?.duration &&
      isPlaying &&
      !isPaused
    ) {
      const elapsed = Date.now() - sceneStartRef.current;
      remainingTimeRef.current = Math.max(stepData.duration - elapsed, 0);

      clearTimers();
      setIsPlaying(false);
      setIsPaused(true);
      return;
    }

    if (
      !audioRef.current &&
      phase === "scene" &&
      stepData?.duration &&
      isPaused
    ) {
      sceneStartRef.current =
        Date.now() - (stepData.duration - remainingTimeRef.current);

      progressTimerRef.current = window.setInterval(() => {
        const elapsed = Date.now() - sceneStartRef.current;
        const nextProgress = Math.min(elapsed / stepData.duration, 1);
        setSceneProgress(nextProgress);
      }, 100);

      timeoutRef.current = window.setTimeout(() => {
        setIsPlaying(false);
        setIsPaused(false);
        setSceneProgress(1);
        clearTimers();

        window.setTimeout(() => {
          setSceneProgress(0);
          if (currentStep < totalSteps - 1) {
            setCurrentStep((prev) => prev + 1);
          } else {
            setPhase("question");
          }
        }, 350);
      }, remainingTimeRef.current);

      setIsPlaying(true);
      setIsPaused(false);
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  const progressLabel = useMemo(() => {
    if (phase === "scene") {
      return `Scene ${currentStep + 1} / ${totalSteps}`;
    }
    if (phase === "question") {
      return "Question";
    }
    if (phase === "reaction") {
      return "Reaction";
    }
    if (phase === "explanation") {
      return "Explanation";
    }
    return "準備完了";
  }, [phase, currentStep, totalSteps]);

  const renderSceneBar = () => {
    return (
      <div className="video-bar">
        {quizData.steps.map((_, index) => {
          const isDone =
            phase === "question" ||
            phase === "reaction" ||
            phase === "explanation" ||
            index < currentStep;

          const isActive = phase === "scene" && index === currentStep;

          return (
            <div key={index} className="video-segment">
              <div
                className={`video-segment-fill ${isDone ? "done" : ""} ${
                  isActive ? "active" : ""
                }`}
                style={{
                  width: isDone
                    ? "100%"
                    : isActive
                    ? `${sceneProgress * 100}%`
                    : "0%",
                }}
              />
            </div>
          );
        })}
      </div>
    );
  };

  const renderOverlayControls = () => (
    <>
      <button className="pause-button" onClick={togglePause}>
        {isPaused ? "▶" : "⏸"}
      </button>
      <button className="mute-button" onClick={toggleMute}>
        {isMuted ? "🔇" : "🔊"}
      </button>
      {isPlaying && <div className="now-playing">Now Playing</div>}
    </>
  );

  return (
    <div className="app">
      <div className="quiz-shell">
        <div className="top-bar">
          <div className="title-block">
            <div className="show-label">
              <ruby>日本語<rt>にほんご</rt></ruby>
              <ruby>会話<rt>かいわ</rt></ruby>クイズ
            </div>
            <h1>
              {phase === "intro" ? (
                <>
                  <ruby>場面別<rt>ばめんべつ</rt></ruby>
                  <ruby>日本語<rt>にほんご</rt></ruby>
                  <ruby>会話<rt>かいわ</rt></ruby>クイズ
                </>
              ) : (
                quizData.title
              )}
            </h1>
          </div>
          <div className="status-chip">{progressLabel}</div>
        </div>

        {(phase === "scene" ||
          phase === "question" ||
          phase === "reaction" ||
          phase === "explanation") &&
          renderSceneBar()}

        {phase === "intro" && introMode === "home" && (
          <div className="intro-screen">
            <div className="hero-card">
              <div className="hero-badge">
                <ruby>会話<rt>かいわ</rt></ruby>シーン
                クイズ
              </div>

              <h2>
                <ruby>場面別<rt>ばめんべつ</rt></ruby>
                <ruby>日本語<rt>にほんご</rt></ruby>
                <ruby>会話<rt>かいわ</rt></ruby>クイズ
              </h2>

              <p>
                いろいろな
                <ruby>場面<rt>ばめん</rt></ruby>の
                <ruby>会話<rt>かいわ</rt></ruby>を
                <ruby>見<rt>み</rt></ruby>ながら、
                いちばん
                <ruby>自然<rt>しぜん</rt></ruby>な
                <ruby>返答<rt>へんとう</rt></ruby>を
                <ruby>選<rt>えら</rt></ruby>びます。
              </p>

              <div className="reaction-buttons">
                <button
                  className="primary-button"
                  onClick={() => setIntroMode("select")}
                >
                  <ruby>問題<rt>もんだい</rt></ruby>を
                  <ruby>選<rt>えら</rt></ruby>ぶ
                </button>
                <button className="sub-button" onClick={startRandomQuiz}>
                  ランダムではじめる
                </button>
              </div>
            </div>
          </div>
        )}

        {phase === "intro" && introMode === "select" && (
          <div className="question-screen">
            <div className="question-card">
              <div className="question-header">選</div>
              <h2>
                <ruby>問題<rt>もんだい</rt></ruby>を
                <ruby>選<rt>えら</rt></ruby>んでください
              </h2>

              <div className="explanation-list">
                {quizMeta.map((item, index) => (
                  <button
                    key={item.id}
                    className="choice-button"
                    onClick={() => startQuiz(index)}
                  >
                    <span className="choice-index">{index + 1}</span>
                    <span>
                      <strong>{item.title}</strong>
                      {item.description ? (
                        <>
                          <br />
                          <span>{item.description}</span>
                        </>
                      ) : null}
                    </span>
                  </button>
                ))}
              </div>

              <div className="scene-actions auto-actions">
                <div className="reaction-buttons">
                  <button
                    className="sub-button"
                    onClick={() => setIntroMode("home")}
                  >
                    <ruby>戻<rt>もど</rt></ruby>る
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {phase === "countdown" && (
          <div className="countdown-screen">
            <div className="countdown-ring">
              {countdown > 0 ? countdown : "START"}
            </div>
          </div>
        )}

        {phase === "scene" && (
          <div className="scene-screen">
            <div className="scene-card">
              <div className="image-frame">
                <img src={stepData.image} alt={`scene-${currentStep + 1}`} />
                <div className="speaker-tag">{stepData.speaker}</div>
                {renderOverlayControls()}
              </div>

              <div className="telop-box">
                <p>{stepData.text}</p>
              </div>

              <div className="scene-actions auto-actions">
                <div className="reaction-buttons">
                  <button className="sub-button" onClick={replayCurrentAudio}>
                    {stepData.audio ? (
                      <>
                        もう<ruby>一度<rt>いちど</rt></ruby>
                        <ruby>聞<rt>き</rt></ruby>く
                      </>
                    ) : (
                      <>
                        もう<ruby>一度<rt>いちど</rt></ruby>
                        <ruby>見<rt>み</rt></ruby>る
                      </>
                    )}
                  </button>
                  <button className="primary-button" onClick={restartQuiz}>
                    <ruby>最初<rt>さいしょ</rt></ruby>からもう
                    <ruby>一度<rt>いちど</rt></ruby>
                  </button>
                  <button className="sub-button" onClick={backToHome}>
                    <ruby>問題一覧<rt>もんだいいちらん</rt></ruby>へ
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {phase === "question" && (
          <div className="question-screen">
            <div className="question-card">
<div className="question-top">
  <div className="question-header">Q</div>

  <div className="question-top-right">
    <div className="question-timer-inline">
      <span className="question-timer-inline-label">
        <ruby>残<rt>のこ</rt></ruby>り
        <ruby>時間<rt>じかん</rt></ruby>
      </span>

      <div className="question-timer-bar">
        <div
          className="question-timer-bar-fill"
          style={{ width: `${(questionTimeLeft / 30) * 100}%` }}
        />
      </div>

      <span className="question-timer-inline-seconds">
        {questionTimeLeft}s
      </span>
    </div>

    {isPlaying && (
      <div className="now-playing question-playing">
        Now Playing
      </div>
    )}
  </div>
</div>

              <h2>{quizData.question.prompt}</h2>


              <div className="question-actions">
                <div className="reaction-buttons">
                  <button className="sub-button" onClick={togglePause}>
                    {isPaused ? "▶" : "⏸"}
                  </button>
                  <button className="sub-button" onClick={toggleMute}>
                    {isMuted ? "🔇" : "🔊"}
                  </button>
                  <button className="sub-button" onClick={replayCurrentAudio}>
                    もういちどきく
                  </button>
                </div>
              </div>

              <div className="choices-grid">
                {quizData.question.choices.map((choice, index) => (
                  <button
                    key={index}
                    className="choice-button"
                    onClick={() => handleChoiceClick(choice)}
                  >
                    <span className="choice-index">{index + 1}</span>
                    <span>{choice.text}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {phase === "reaction" && selectedChoice && (
          <div className="scene-screen">
            <div className="scene-card">
              <div className="image-frame">
                <img src={selectedChoice.reaction.image} alt="reaction-scene" />
                <div className="speaker-tag">
                  {selectedChoice.reaction.speaker}
                </div>
                {renderOverlayControls()}
              </div>

              <div className="reaction-section">
                <div className="reaction-label">
                  <ruby>相手<rt>あいて</rt></ruby>が
                  <ruby>実際<rt>じっさい</rt></ruby>に
                  <ruby>言<rt>い</rt></ruby>ったこと
                </div>
                <div className="telop-box">
                  <p>{selectedChoice.reaction.text}</p>
                </div>
              </div>

              {selectedChoice.reaction.thought && (
                <div className="thought-section">
                  <div className="thought-label">
                    <ruby>受<rt>う</rt></ruby>け
                    <ruby>手<rt>て</rt></ruby>の
                    <ruby>内心<rt>ないしん</rt></ruby>
                  </div>
                  <div className="thought-box">
                    <p>{selectedChoice.reaction.thought}</p>
                  </div>
                </div>
              )}

              <div className="scene-actions reaction-actions">
                <div className="discussion-hint">
                  なんで
                  <ruby>受<rt>う</rt></ruby>け
                  <ruby>手<rt>て</rt></ruby>は
                  そう
                  <ruby>感<rt>かん</rt></ruby>じたのか
                  <ruby>考<rt>かんが</rt></ruby>えてみよう！
                </div>
                <div className="reaction-buttons">
                  <button className="sub-button" onClick={replayCurrentAudio}>
                    もう一度聞く
                  </button>
                  <button
                    className="sub-button"
                    onClick={() => setPhase("explanation")}
                  >
                    <ruby>解説<rt>かいせつ</rt></ruby>へ
                  </button>
                  <button className="primary-button" onClick={restartQuiz}>
                    もう一度
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {phase === "explanation" && (
          <div className="question-screen">
            <div className="question-card explanation-card">
              <div className="question-header">解</div>
              <h2>{quizData.explanation.title}</h2>

              <div className="explanation-intro">
                <p>{quizData.explanation.intro}</p>
              </div>

              {selectedChoice ? (
                <div className="selected-answer-box">
                  <div className="selected-answer-label">
                    あなたが
                    <ruby>選<rt>えら</rt></ruby>んだ
                    <ruby>返答<rt>へんとう</rt></ruby>
                  </div>
                  <p>{selectedChoice.text}</p>
                </div>
              ) : (
                <div className="selected-answer-box">
                  <div className="selected-answer-label">
                    <ruby>回答<rt>かいとう</rt></ruby>なし
                  </div>
                  <p>
                    30<ruby>秒<rt>びょう</rt></ruby>
                    <ruby>以内<rt>いない</rt></ruby>に
                    <ruby>選択<rt>せんたく</rt></ruby>がなかったため、
                    <ruby>自動<rt>じどう</rt></ruby>で
                    <ruby>解説<rt>かいせつ</rt></ruby>へ
                    <ruby>進<rt>すす</rt></ruby>みました。
                  </p>
                </div>
              )}

              <div className="explanation-list">
                {quizData.explanation.blocks.map((block, index) => (
                  <div key={index} className="explanation-block">
                    <div className="explanation-label">{block.label}</div>
                    <p>{block.text}</p>
                  </div>
                ))}
              </div>

              <div className="explanation-summary">
                <p>{quizData.explanation.summary}</p>
              </div>

              {quizData.explanation.note && (
                <div className="explanation-note">
                  <p>{quizData.explanation.note}</p>
                </div>
              )}

              <div className="scene-actions reaction-actions">
                <button
                  className="sub-button"
                  onClick={() => setPhase("reaction")}
                  disabled={!selectedChoice}
                >
                  リアクションに
                  <ruby>戻<rt>もど</rt></ruby>る
                </button>
                <div className="reaction-buttons">
                  <button className="sub-button" onClick={backToHome}>
                    <ruby>問題一覧<rt>もんだいいちらん</rt></ruby>へ
                  </button>
                  <button className="primary-button" onClick={restartQuiz}>
                    <ruby>最初<rt>さいしょ</rt></ruby>からもう
                    <ruby>一度<rt>いちど</rt></ruby>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;