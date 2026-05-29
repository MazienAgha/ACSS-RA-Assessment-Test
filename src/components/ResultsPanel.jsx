function ResultsPanel({
  score,
  percentage,
  passed,
  domainBreakdown,
  criticalFlags,
  onRevealReview,
  onPrintCertificate,
  onNewAttempt,
  onResetAll,
}) {
  return (
    <div className="card results-panel">
      <h2>Assessment Results</h2>

      <div className="results-summary">
        <p>
          <strong>Score:</strong> {score}/100
        </p>
        <p>
          <strong>Percentage:</strong> {percentage}%
        </p>
        <p>
          <strong>Result:</strong>{" "}
          <span className={passed ? "badge pass" : "badge fail"}>
            {passed ? "Pass" : "Fail"}
          </span>
        </p>
      </div>

      <div className="domain-breakdown">
        <h3>Domain Breakdown</h3>
        <ul>
          {domainBreakdown.map((domain) => (
            <li key={domain.domain}>
              {domain.domain}: {domain.earned}/{domain.possible} ({domain.percentage}%)
            </li>
          ))}
        </ul>
      </div>

      {criticalFlags.length > 0 && (
        <div className="critical-flags">
          <h3>Critical Protocol Risk Flags</h3>
          <ul>
            {criticalFlags.map((flag) => (
              <li key={flag.id}>
                <strong>{flag.domain}:</strong> {flag.message}
              </li>
            ))}
          </ul>
          <p>
            Supervisor review recommended even if passing score achieved.
          </p>
        </div>
      )}

      <div className="results-actions">
        <button onClick={onRevealReview}>Reveal Answer Review</button>
        <button onClick={onPrintCertificate}>Print Certificate</button>
        <button onClick={onNewAttempt}>New Attempt</button>
        <button className="danger" onClick={onResetAll}>
          Reset All Progress
        </button>
      </div>
    </div>
  );
}

export default ResultsPanel;