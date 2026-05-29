import React, { useState } from "react";

export default function StudyGuide({
  sections,
  hasConfirmedReading,
  setHasConfirmedReading,
  onProceed,
}) {
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (id) => {
    setExpandedSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const expandAll = () => {
    const all = {};
    sections.forEach((s) => (all[s.id] = true));
    setExpandedSections(all);
  };

  const collapseAll = () => setExpandedSections({});

  if (!sections || sections.length === 0) {
    return <p style={{ color: "var(--text-muted)" }}>No study guide sections available.</p>;
  }

  return (
    <div className="study-guide-wrapper">
      <div className="guide-controls">
        <span className="guide-count">{sections.length} sections</span>
        <div className="guide-controls-btns">
          <button className="secondary" onClick={expandAll}>Expand all</button>
          <button className="secondary" onClick={collapseAll}>Collapse all</button>
        </div>
      </div>

      <div className="guide-accordion">
        {sections.map((section) => {
          const isOpen = !!expandedSections[section.id];
          return (
            <div key={section.id} className={`guide-section${isOpen ? " is-open" : ""}`}>
              <button
                className="guide-section-header"
                onClick={() => toggleSection(section.id)}
                aria-expanded={isOpen}
              >
                <span className="guide-section-num">{section.sectionNumber}</span>
                <div className="guide-section-meta">
                  <span className="guide-section-title">{section.title}</span>
                  {section.summary && (
                    <span className="guide-section-summary">{section.summary}</span>
                  )}
                </div>
                <span className="guide-chevron" aria-hidden="true">
                  {isOpen ? "▲" : "▼"}
                </span>
              </button>

              {isOpen && (
                <div className="guide-section-body">
                  {typeof section.content === "string" ? (
                    <div dangerouslySetInnerHTML={{ __html: section.content }} />
                  ) : Array.isArray(section.content) ? (
                    <ul>
                      {section.content.map((line, idx) => (
                        <li key={idx}>{line}</li>
                      ))}
                    </ul>
                  ) : null}

                  {section.keyRules && (
                    <div className="guide-box key-rules">
                      <strong>Key Rules:</strong>
                      <ul>
                        {section.keyRules.map((rule, idx) => (
                          <li key={idx}>{rule}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {section.warnings && (
                    <div className="guide-box warnings">
                      <strong>Warnings:</strong>
                      <ul>
                        {section.warnings.map((w, idx) => (
                          <li key={idx}>{w}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="guide-confirm">
        <label className="checkbox-label">
          <input
            type="checkbox"
            checked={hasConfirmedReading ?? false}
            onChange={(e) => setHasConfirmedReading?.(e.target.checked)}
          />
          <span>
            I confirm that I have reviewed all study guide sections and am ready
            to take the assessment.
          </span>
        </label>
        {onProceed && (
          <button onClick={onProceed} disabled={!hasConfirmedReading}>
            Continue to Assessment →
          </button>
        )}
      </div>
    </div>
  );
}