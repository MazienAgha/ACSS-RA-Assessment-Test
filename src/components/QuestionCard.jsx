function QuestionCard({ question, answer, onAnswerChange }) {
  return (
    <div className="question-card">

      <div className="question-header">
        <span className="question-domain">{question.domain}</span>
        <span className="question-marks">{question.marks} marks</span>
      </div>

      <p className="question-text">
        <strong>Q{question.id}.</strong> {question.question}
      </p>

      <div className="options-list">
        {question.options.map((option, index) => (
          <label
            key={index}
            className={`option-item${answer === index ? " option-selected" : ""}`}
          >
            <input
              type="radio"
              name={`question-${question.id}`}
              value={index}
              checked={answer === index}
              onChange={() => onAnswerChange(question.id, index)}
            />
            <span>{option}</span>
          </label>
        ))}
      </div>

    </div>
  );
}

export default QuestionCard;
