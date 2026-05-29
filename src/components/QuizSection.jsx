import QuestionCard from "./QuestionCard";

function QuizSection({
  sectionTitle,
  questions,
  answers,
  onAnswerChange,
  currentSection,
  totalSections,
  onPrevious,
  onNext,
  onSubmit,
}) {
  const isLastSection = currentSection === totalSections - 1;
  const answeredCount = questions.filter((q) => answers[q.id] !== undefined).length;

  return (
    <div className="card">

      <div className="quiz-section-header">
        <div>
          <h2>{sectionTitle}</h2>
          <p className="quiz-section-meta">
            Section {currentSection + 1} of {totalSections}
            &nbsp;&middot;&nbsp;
            {answeredCount} of {questions.length} answered
          </p>
        </div>
        <span className="quiz-section-badge">
          {currentSection + 1} / {totalSections}
        </span>
      </div>

      <div className="quiz-progress-bar">
        <div
          className="quiz-progress-fill"
          style={{ width: `${((currentSection + 1) / totalSections) * 100}%` }}
        />
      </div>

      <div className="quiz-questions">
        {questions.map((question) => (
          <QuestionCard
            key={question.id}
            question={question}
            answer={answers[question.id]}
            onAnswerChange={onAnswerChange}
          />
        ))}
      </div>

      <div className="section-nav">
        <button
          className="secondary"
          onClick={onPrevious}
          disabled={currentSection === 0}
        >
          ← Previous
        </button>

        {!isLastSection ? (
          <button onClick={onNext}>Next Section →</button>
        ) : (
          <button onClick={onSubmit} disabled={answeredCount < questions.length}>
            Submit Assessment
          </button>
        )}
      </div>

    </div>
  );
}

export default QuizSection;
