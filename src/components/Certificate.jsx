import { APP_CONFIG } from "../data/config";

function Certificate({ setup, score, percentage, passed }) {
  const formattedDate = setup.date
    ? new Date(setup.date).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : setup.date;

  const s = {
    wrap: { background: "white", border: "2px solid #0b2341", borderRadius: "12px", padding: "32px", marginTop: "24px", fontFamily: "Arial, Helvetica, sans-serif" },
    inner: { border: "3px solid #f4c542", borderRadius: "6px", padding: "48px 40px", textAlign: "center" },
    eyebrow: { fontSize: "11px", letterSpacing: "0.15em", textTransform: "uppercase", color: "#667085", margin: "0 0 12px" },
    title: { fontSize: "30px", fontWeight: "700", color: "#0b2341", margin: "0 0 4px", lineHeight: "1.2" },
    rule: { width: "60px", height: "3px", background: "#f4c542", margin: "16px auto" },
    issuedBy: { fontSize: "13px", color: "#667085", margin: "0 0 4px" },
    institution: { fontSize: "14px", fontWeight: "600", color: "#1e2a36", margin: "0 0 28px", lineHeight: "1.4" },
    certifies: { fontSize: "14px", color: "#667085", margin: "0 0 8px" },
    raName: { fontSize: "28px", fontWeight: "700", color: "#0b2341", margin: "0 0 12px", letterSpacing: "0.01em" },
    body: { fontSize: "14px", color: "#667085", maxWidth: "460px", margin: "0 auto 32px", lineHeight: "1.65" },
    detailsBox: { display: "inline-grid", gridTemplateColumns: "auto auto", gap: "10px 32px", background: "#f7f8fb", borderRadius: "8px", padding: "16px 28px", margin: "0 0 40px", textAlign: "left" },
    detailLabel: { fontSize: "13px", fontWeight: "600", color: "#667085" },
    detailValue: { fontSize: "13px", color: "#1e2a36" },
    resultBadge: (pass) => ({ fontSize: "12px", fontWeight: "700", padding: "3px 14px", borderRadius: "999px", color: "white", background: pass ? "#027a48" : "#b42318", display: "inline-block" }),
    sigs: { display: "flex", justifyContent: "space-around", gap: "32px" },
    sig: { flex: 1, maxWidth: "220px", textAlign: "center" },
    sigLine: { width: "100%", height: "1px", background: "#1e2a36", marginBottom: "8px" },
    sigName: { fontSize: "13px", fontWeight: "600", color: "#1e2a36", margin: "0 0 3px" },
    sigTitle: { fontSize: "12px", color: "#667085", margin: "0" },
  };

  return (
    <div style={s.wrap}>
      <div style={s.inner}>

        <p style={s.eyebrow}>Alexandria Comparative Stroke Study</p>
        <h1 style={s.title}>Certificate of Completion</h1>
        <div style={s.rule} />

        <p style={s.issuedBy}>Issued by</p>
        <p style={s.institution}>{APP_CONFIG.institution}</p>

        <p style={s.certifies}>This certifies that</p>
        <h2 style={s.raName}>{setup.raName}</h2>

        <p style={s.body}>
          has successfully completed the Research Assistant Competency Assessment
          for the Alexandria Comparative Stroke Study and is hereby recognized
          for their achievement.
        </p>

        <div style={s.detailsBox}>
          <span style={s.detailLabel}>Site</span>
          <span style={s.detailValue}>{setup.site}</span>

          <span style={s.detailLabel}>Date</span>
          <span style={s.detailValue}>{formattedDate}</span>

          <span style={s.detailLabel}>Score</span>
          <span style={s.detailValue}>{score} / 100 ({percentage}%)</span>

          <span style={s.detailLabel}>Result</span>
          <span style={s.resultBadge(passed)}>{passed ? "PASS" : "FAIL"}</span>
        </div>

        <div style={s.sigs}>
          <div style={s.sig}>
            <div style={s.sigLine} />
            <p style={s.sigName}>{APP_CONFIG.leadResearcher}</p>
            <p style={s.sigTitle}>Lead Researcher, ACSS</p>
          </div>
          <div style={s.sig}>
            <div style={s.sigLine} />
            <p style={s.sigName}>[Supervisor Name]</p>
            <p style={s.sigTitle}>Principal Investigator of Record</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Certificate;
