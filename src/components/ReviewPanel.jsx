function ReviewPanel({ questionBank, answers }) {
  return (
    <div className="card">
      <h2>Answer Review</h2>

      {questionBank.map((question) => {
        const userAnswer = answers[question.id];
        const isCorrect = userAnswer === question.correct;

        return (
          <div key={question.id} className={`review-item ${isCorrect ? "correct" : "incorrect"}`}>
            <h3>
              {question.id}. {question.text}
            </h3>
            <p>
              <strong>Your answer:</strong>{" "}
              {userAnswer !== undefined ? question.options[userAnswer] : "No answer"}
            </p>
            <p>
              <strong>Correct answer:</strong> {question.options[question.correct]}
            </p>
            <p>
              <strong>Explanation:</strong> {question.explanation}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ReviewPanel;