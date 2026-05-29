// questionBank.js
// Alexandria Comparative Stroke Study (ACSS)
// RA Competency Assessment — Question Bank v2.0
// 50 questions | 100 marks | 2 marks each
// Source documents: Protocol v1.0, CRF (English), CRF with Instructions,
//   Informed Consent Form, Witness Interview Script, Telephone mRS Script,
//   RA Competency Assessment
//
// Domain breakdown:
//   General Study Basics:             5 Q  | 10 marks
//   Stroke Terminology and Subtypes:  5 Q  | 10 marks
//   RES-Q 3.0 Indicators:            10 Q  | 20 marks
//   CRF Completion and Source Docs:  10 Q  | 20 marks
//   Consent Procedures:               8 Q  | 16 marks
//   Data Security and Entry:          7 Q  | 14 marks
//   Protocol Deviations:              5 Q  | 10 marks
// Generated: 2026-05-29

export const TOTAL_MARKS = 100;
export const PASS_PERCENTAGE = 85;
export const PASS_MARKS = 85;

export const DOMAINS = [
  { id: 'basics',      label: 'General Study Basics',             questions: 5,  marks: 10 },
  { id: 'stroke',      label: 'Stroke Terminology and Subtypes',  questions: 5,  marks: 10 },
  { id: 'resq',        label: 'RES-Q 3.0 Indicators',            questions: 10, marks: 20 },
  { id: 'crf',         label: 'CRF Completion and Source Docs',   questions: 10, marks: 20 },
  { id: 'consent',     label: 'Consent Procedures',               questions: 8,  marks: 16 },
  { id: 'security',    label: 'Data Security and Entry',          questions: 7,  marks: 14 },
  { id: 'deviations',  label: 'Protocol Deviations',              questions: 5,  marks: 10 },
];

export const questionBank = [
  {
    "id": 1,
    "domain": "General Study Basics",
    "marks": 2,
    "question": "What does ACSS stand for?",
    "options": [
      "Alexandria Clinical Stroke Study",
      "Alexandria Comparative Stroke Study",
      "Arab Community Stroke Survey",
      "Alexandria Cohort Stroke Study"
    ],
    "correct": 1,
    "explanation": "ACSS = Alexandria Comparative Stroke Study. It is a two-phase prospective sequential cohort study comparing stroke protocol adherence between private and public hospitals in Alexandria, Egypt."
  },
  {
    "id": 2,
    "domain": "General Study Basics",
    "marks": 2,
    "question": "Which three feasibility thresholds must ALL be met before Phase 2 can begin?",
    "options": [
      "Data completeness ≥80%, consent rate ≥70%, kappa ≥0.80",
      "Data completeness ≥70%, consent rate ≥80%, kappa ≥0.75",
      "Data completeness ≥80%, consent rate ≥80%, kappa ≥0.70",
      "Data completeness ≥75%, consent rate ≥75%, kappa ≥0.85"
    ],
    "correct": 0,
    "explanation": "All three Phase 1 feasibility thresholds must be met: data completeness ≥80%, consent rate ≥70%, and inter-rater reliability kappa ≥0.80. Missing any one of them means Phase 2 cannot proceed without a protocol amendment."
  },
  {
    "id": 3,
    "domain": "General Study Basics",
    "marks": 2,
    "question": "The Phase 2 adaptive rule states that the sample size must be recalculated if:",
    "options": [
      "Phase 1 consent rate falls below 70%",
      "Phase 1 Louran composite adherence is below 50%",
      "Phase 1 kappa falls below 0.80",
      "Phase 1 data completeness falls below 80%"
    ],
    "correct": 1,
    "explanation": "If Phase 1 Louran adherence is below 50%, the assumed 60% private-sector baseline for the Phase 2 power calculation is invalid. Sample size must be recalculated using Phase 1 observed adherence before Phase 2 begins."
  },
  {
    "id": 4,
    "domain": "General Study Basics",
    "marks": 2,
    "question": "How many hospitals participate in Phase 2, and what is the sector breakdown?",
    "options": [
      "6 hospitals: 5 private, 1 public",
      "7 hospitals: 6 private, 1 public",
      "7 hospitals: 4 private, 3 public",
      "8 hospitals: 6 private, 2 public"
    ],
    "correct": 1,
    "explanation": "Phase 2 includes all 7 participating hospitals: 6 private (Louran, Elnozha, Mabaret Elasafra, Elandalusia, Elite, Semoha) and 1 public (Al Miri). Al Miri is the only public sector site."
  },
  {
    "id": 5,
    "domain": "General Study Basics",
    "marks": 2,
    "question": "RES-Q was selected over GWTG-Stroke for this study. Which of the following correctly states ALL three reasons?",
    "options": [
      "RES-Q is more accurate, easier to use, and endorsed by the Egyptian Ministry of Health",
      "GWTG-Stroke is only for ischemic stroke; RES-Q covers all subtypes; RES-Q is cheaper",
      "GWTG-Stroke requires paid membership, was designed for the US system, and lacks WHO/ESO/WSO endorsement for international use",
      "RES-Q is the only registry validated in Arabic; GWTG-Stroke is not available outside the US"
    ],
    "correct": 2,
    "explanation": "GWTG-Stroke was rejected for three specific reasons: (1) paid institutional membership required, prohibitive for Egyptian public hospitals; (2) designed for the US healthcare system, not validated for LMICs; (3) no WHO, ESO, or WSO endorsement for international use. RES-Q addresses all three."
  },
  {
    "id": 6,
    "domain": "Stroke Terminology and Subtypes",
    "marks": 2,
    "question": "A patient is already admitted to the cardiology ward for an acute myocardial infarction when they develop right-sided weakness and aphasia. A neurologist confirms acute ischemic stroke. How should this patient be classified?",
    "options": [
      "Eligible — Enroll and complete the full CRF",
      "Eligible — Enroll but exclude from time calculations only",
      "Excluded — in-hospital strokes are not eligible for Enrollment",
      "Eligible — Enroll and note in-hospital status as a covariate in Section A"
    ],
    "correct": 2,
    "explanation": "In-hospital strokes are excluded from the study entirely. A patient who was already admitted for another condition when the stroke occurred does not meet the inclusion criteria. Record as screen failure in the screening log."
  },
  {
    "id": 7,
    "domain": "Stroke Terminology and Subtypes",
    "marks": 2,
    "question": "A patient is transferred to Louran CSC from a smaller private clinic where initial assessment was performed. The door time at the transferring clinic is not available. Which statement is correct?",
    "options": [
      "The patient is ineligible and must be excluded from the study",
      "The patient is eligible but must be excluded from onset-to-door and door-to-needle time calculations",
      "The patient is eligible and the transfer time can be used as a substitute for the original door time",
      "The patient is eligible and the family's estimated arrival time at the first clinic can be used"
    ],
    "correct": 1,
    "explanation": "Transfer patients are eligible for Enrollment but must be excluded from onset-to-door and door-to-needle time calculations, because the door time at the receiving hospital does not represent first medical contact. Mark Section A: \"First hospital — No (Transfer).\""
  },
  {
    "id": 8,
    "domain": "Stroke Terminology and Subtypes",
    "marks": 2,
    "question": "A patient wakes up with stroke symptoms. The family confirms they were completely normal when they went to bed at 23:00. Symptoms were discovered at 07:00. How should this patient be handled?",
    "options": [
      "Excluded — wake-up strokes cannot be enrolled because onset time is unknown",
      "Enrolled; use 07:00 (discovery time) as the onset time",
      "Enrolled; classify as wake-up stroke in Section A, record last-known-well time (23:00), flag for sensitivity analysis",
      "Enrolled; exclude from primary analysis but include in descriptive tables only"
    ],
    "correct": 2,
    "explanation": "Wake-up strokes are eligible for Enrollment. Section A is marked \"Wake-up stroke — Yes.\" The last-known-well time (23:00) is recorded as the onset proxy. The case is flagged for sensitivity analysis. It is not excluded from the study."
  },
  {
    "id": 9,
    "domain": "Stroke Terminology and Subtypes",
    "marks": 2,
    "question": "A final neurologist diagnosis confirms the presenting symptoms were caused by a conversion disorder, not a true stroke. The patient was enrolled based on suspected stroke at admission. What happens now?",
    "options": [
      "Withdraw the patient immediately and destroy all collected data",
      "Retain Enrollment; record \"stroke mimic\" and the final diagnosis in Section D of the CRF",
      "Exclude from primary analysis but retain in the screening log as a failed case",
      "Leave Section D blank as no stroke diagnosis was confirmed"
    ],
    "correct": 1,
    "explanation": "Patients presenting with suspected stroke are eligible at the point of Enrollment. If the final neurologist diagnosis is a stroke mimic, retain Enrollment and record \"stroke mimic\" plus the final diagnosis in Section D. These cases contribute to the descriptive analysis."
  },
  {
    "id": 10,
    "domain": "Stroke Terminology and Subtypes",
    "marks": 2,
    "question": "The attending neurologist's consultation note contains the text: \"Partial NIHSS: 8 — patient uncooperative with full assessment.\" What should be recorded in the NIHSS field?",
    "options": [
      "8 — record the partial score as documented by the neurologist",
      "Not performed — a partial score is not a valid NIHSS",
      "8, with a notation: \"partial assessment — patient uncooperative\"",
      "Estimate the full score from clinical descriptions elsewhere in the notes"
    ],
    "correct": 2,
    "explanation": "Record the partial score (8) with a notation explaining that it was a partial assessment due to patient non-cooperation. This documents what the neurologist actually recorded and flags the limitation. Never leave blank and never estimate independently."
  },
  {
    "id": 11,
    "domain": "RES-Q 3.0 Indicators",
    "marks": 2,
    "question": "What is the AHA/ASA benchmark for door-to-imaging time?",
    "options": [
      "15 minutes",
      "20 minutes",
      "25 minutes",
      "30 minutes"
    ],
    "correct": 2,
    "explanation": "The AHA/ASA benchmark for door-to-imaging time is ≤25 minutes. This is calculated from the ED electronic triage timestamp to the radiology system initiation timestamp. It is a secondary tracked metric, not one of the 7 RES-Q core indicators, but it is captured in Section C of the CRF."
  },
  {
    "id": 12,
    "domain": "RES-Q 3.0 Indicators",
    "marks": 2,
    "question": "Which RES-Q 3.0 core indicators apply to ALL stroke subtypes, including ICH and SAH?",
    "options": [
      "Indicators 3 and 4 only (stroke unit Day 1 and dysphagia screening)",
      "Indicators 3, 4, and 6 (stroke unit, dysphagia, and AF anticoagulation)",
      "Indicators 1, 3, and 4",
      "All 7 indicators apply to all subtypes"
    ],
    "correct": 0,
    "explanation": "Only indicators 3 (stroke unit admission on Day 1) and 4 (dysphagia screening before oral intake) apply to ALL subtypes. Indicators 1 and 2 apply to eligible AIS only. Indicators 5 and 7 apply to AIS only. Indicator 6 applies to any patient with confirmed AF."
  },
  {
    "id": 13,
    "domain": "RES-Q 3.0 Indicators",
    "marks": 2,
    "question": "An AIS patient eligible for tPA was not treated because the drug was unavailable at the hospital. How should indicator 1 be coded, and why does this matter?",
    "options": [
      "Not applicable — drug unavailability removes the eligibility criterion",
      "Not met — an eligible patient did not receive tPA, regardless of the reason",
      "Missing data (MD-1) — the information cannot be determined without the drug being available",
      "Met — the clinical team followed the correct decision-making process"
    ],
    "correct": 1,
    "explanation": "Indicator 1 is NOT MET. The patient was eligible; the standard was not achieved. \"Drug not available\" is the reason for non-administration, captured separately in Section E. This is a KEY VARIABLE for the private vs public comparison — it is one of the most important data points in the study."
  },
  {
    "id": 14,
    "domain": "RES-Q 3.0 Indicators",
    "marks": 2,
    "question": "An ICH patient has confirmed atrial fibrillation. They are discharged without an anticoagulant. How should indicator 6 be coded?",
    "options": [
      "Not applicable — ICH patients never receive anticoagulants",
      "Not met — the patient had confirmed AF and the standard was not reached",
      "Met — anticoagulation is contraindicated in ICH so the indicator is automatically satisfied",
      "Missing data — the clinical team's decision is not documented"
    ],
    "correct": 1,
    "explanation": "Indicator 6 applies to any patient with confirmed AF, regardless of stroke subtype. The clinical team may or may not have had good reasons not to prescribe anticoagulation in an ICH patient. Your job is to record what was prescribed at discharge. It was not prescribed — therefore the indicator is NOT MET."
  },
  {
    "id": 15,
    "domain": "RES-Q 3.0 Indicators",
    "marks": 2,
    "question": "A patient has AIS. The discharge summary confirms antithrombotic therapy and a statin were prescribed. The patient was admitted to a stroke unit on Day 1. Dysphagia screening was performed before breakfast on Day 1. No AF was documented. tPA was given with a DTN of 52 minutes. How many of the 7 indicators are MET?",
    "options": [
      "5",
      "6",
      "7",
      "Cannot be determined without additional information"
    ],
    "correct": 1,
    "explanation": "Met: (1) IV tPA — yes; (2) DTN ≤60 min — 52 min, yes; (3) Stroke unit Day 1 — yes; (4) Dysphagia screening — yes; (5) Antithrombotic at discharge — yes; (6) Anticoagulation for AF — not applicable (no AF); (7) Statin at discharge — yes. 6 of 6 applicable indicators met (indicator 6 is not applicable)."
  },
  {
    "id": 16,
    "domain": "RES-Q 3.0 Indicators",
    "marks": 2,
    "question": "The DTN time indicator (indicator 2) applies to which group?",
    "options": [
      "All AIS patients regardless of treatment",
      "All AIS patients who were eligible for tPA",
      "Only AIS patients who actually received tPA",
      "All patients with onset-to-door time within 180 minutes"
    ],
    "correct": 2,
    "explanation": "The DTN indicator applies ONLY to AIS patients who actually received tPA. If a patient was eligible but did not receive tPA, there is no needle time to measure, so indicator 2 is not applicable. Only when tPA was administered can you calculate and assess DTN."
  },
  {
    "id": 17,
    "domain": "RES-Q 3.0 Indicators",
    "marks": 2,
    "question": "What is the minimum number of applicable RES-Q indicators that must be determinable for a patient to be included in the primary analysis?",
    "options": [
      "3",
      "4",
      "5",
      "All applicable indicators"
    ],
    "correct": 1,
    "explanation": "A patient must have at least 4 of the 7 indicators determinable from available records to contribute to the primary analysis. The practical rule: if fewer than half of the applicable indicators can be extracted, classify the patient as incomplete data and exclude from primary analysis."
  },
  {
    "id": 18,
    "domain": "RES-Q 3.0 Indicators",
    "marks": 2,
    "question": "Why are \"cost of treatment\" and \"drug not available at this hospital\" marked as KEY VARIABLES in Section E of the CRF?",
    "options": [
      "They are required by the RES-Q 3.0 platform for all participating countries",
      "They are required by the IRB for adverse event reporting",
      "They directly test the private vs public sector quality gap hypothesis — cost and drug availability are the mechanisms most likely to differ between sectors",
      "They are required by AHA/ASA for international stroke registry benchmarking"
    ],
    "correct": 2,
    "explanation": "Cost and drug unavailability are the specific barriers most likely to explain a private vs public adherence gap in Egypt. A public hospital patient who does not receive tPA because the drug is unavailable or unaffordable is the central finding this study is designed to detect and quantify."
  },
  {
    "id": 19,
    "domain": "RES-Q 3.0 Indicators",
    "marks": 2,
    "question": "Dysphagia screening (indicator 4) is documented as having been performed AFTER the patient received their morning oral medications on Day 1. How should indicator 4 be coded?",
    "options": [
      "Met — the screening was performed on Day 1",
      "Not met — screening must occur before any oral intake, including medications",
      "Not applicable — the patient received medications before screening",
      "Missing data (MD-3) — contradictory timing information"
    ],
    "correct": 1,
    "explanation": "Indicator 4 requires dysphagia screening BEFORE any oral intake — food, drink, or medication. If medications were given before the screening, the indicator is NOT MET. This is a strict rule: the word \"before\" is absolute."
  },
  {
    "id": 20,
    "domain": "RES-Q 3.0 Indicators",
    "marks": 2,
    "question": "What is the onset-to-door time benchmark indicating a patient is within the thrombolysis treatment window?",
    "options": [
      "≤120 minutes",
      "≤180 minutes",
      "≤240 minutes",
      "≤270 minutes"
    ],
    "correct": 1,
    "explanation": "The benchmark for onset-to-door time is ≤180 minutes, indicating the patient is within the standard thrombolysis eligibility window. This is calculated by subtracting the symptom onset time from the ED arrival (door) time. Patients arriving after 180 minutes may still be eligible under extended criteria but the 180-minute mark is the primary benchmark."
  },
  {
    "id": 21,
    "domain": "CRF Completion and Source Documents",
    "marks": 2,
    "question": "Which source document is the PRIMARY source for the hospital arrival (door) time?",
    "options": [
      "The patient's or family's verbal estimate of arrival time",
      "The ED electronic triage timestamp",
      "The admitting physician's documentation of when the patient arrived",
      "The ambulance run sheet arrival time"
    ],
    "correct": 1,
    "explanation": "Door time must be taken from the ED electronic triage timestamp ONLY. Family estimates, handwritten nursing notes, and physician documentation of arrival are all secondary and must NOT be used. If the electronic timestamp is unavailable, apply missing data code MD-2."
  },
  {
    "id": 22,
    "domain": "CRF Completion and Source Documents",
    "marks": 2,
    "question": "The pharmacy dispensing record shows tPA was dispensed at 16:47. The nursing medication administration record shows it was given at 16:53. What time should be entered as the IV bolus time?",
    "options": [
      "16:47 — use the earlier of the two times",
      "16:53 — the nursing record documents actual administration moment",
      "16:50 — average the two documented times",
      "Apply MD-3 and report both times to the Lead Researcher"
    ],
    "correct": 0,
    "explanation": "For IV bolus administration time, use the pharmacy dispensing record as the primary source, and specifically use the EARLIER of the pharmacy and nursing records. This rule prevents overestimation of DTN time due to documentation delays in nursing charts."
  },
  {
    "id": 23,
    "domain": "CRF Completion and Source Documents",
    "marks": 2,
    "question": "What is the primary source for imaging initiation time in Section C?",
    "options": [
      "The nursing observation chart documenting when the patient left for the scan",
      "The physician's imaging request timestamp in the notes",
      "The radiology system electronic timestamp",
      "The porter log recording patient transport to radiology"
    ],
    "correct": 2,
    "explanation": "Imaging initiation time must come from the radiology system electronic timestamp — not the nursing note, not the physician request time. Electronic system timestamps are more reliable and less subject to documentation delays than handwritten records."
  },
  {
    "id": 24,
    "domain": "CRF Completion and Source Documents",
    "marks": 2,
    "question": "In which CRF section is the final stroke type recorded, and what document is required?",
    "options": [
      "Section A — from the ED triage impression",
      "Section C — from the admitting physician's assessment",
      "Section D — from the attending neurologist's confirmed diagnosis only",
      "Section D — from any clinical note that mentions a stroke diagnosis"
    ],
    "correct": 2,
    "explanation": "Section D is completed from the attending neurologist's confirmed diagnosis only — documented in the discharge summary or a neurologist consultation note. Never from triage impression, emergency physician notes, or nursing documentation. If the neurologist has not yet confirmed a diagnosis, wait."
  },
  {
    "id": 25,
    "domain": "CRF Completion and Source Documents",
    "marks": 2,
    "question": "The attending neurologist has not documented an NIHSS score. A research assistant holds a valid NIHSS certificate. What should the RA do?",
    "options": [
      "Administer the NIHSS independently and record the score from their own assessment",
      "Estimate the NIHSS from the clinical description in the nursing notes",
      "Record \"Not performed\" in the NIHSS field and flag for the weekly quality check",
      "Ask the bedside nurse to perform the NIHSS assessment"
    ],
    "correct": 2,
    "explanation": "NIHSS certification authorizes interpretation and transcription of a documented score — not independent assessment. The RA must NEVER score the NIHSS themselves, regardless of certification level. Record \"Not performed\" and flag. The PI may request a retrospective neurologist review."
  },
  {
    "id": 26,
    "domain": "CRF Completion and Source Documents",
    "marks": 2,
    "question": "What is the correct study ID for the 12th patient enrolled at Mabaret Elasafra Hospital?",
    "options": [
      "MAB12",
      "MAB-12",
      "MAB-012",
      "MBE-012"
    ],
    "correct": 2,
    "explanation": "Study ID format: [SITE CODE]-[SEQUENTIAL NUMBER padded to 3 digits]. Mabaret Elasafra = MAB. 12th patient = MAB-012. The three-digit padding is required for all IDs (001, 002 ... 012 ... 100)."
  },
  {
    "id": 27,
    "domain": "CRF Completion and Source Documents",
    "marks": 2,
    "question": "During a ward round, the attending physician verbally states that tPA was not given because the patient's family could not afford it. The written discharge summary states only \"outside time window.\" What do you record in Section E?",
    "options": [
      "\"Cost of treatment\" — the physician's verbal statement identifies the true reason",
      "\"Outside time window\" — only what is written in the source document can be entered",
      "Both reasons — document the verbal remark in the CRF free-text field",
      "Leave the reason field blank and flag as MD-3 — conflicting information"
    ],
    "correct": 1,
    "explanation": "Only what is documented in written source documents can be entered in the CRF. Verbal remarks from clinical staff are not source documents and cannot be entered. Record \"outside time window\" from the discharge summary. Report the discrepancy to the Lead Researcher — the PI may request a written addendum to the medical notes."
  },
  {
    "id": 28,
    "domain": "CRF Completion and Source Documents",
    "marks": 2,
    "question": "Which variable is classified as CRITICAL — meaning its absence may invalidate a patient's contribution to primary analysis?",
    "options": [
      "Patient's smoking history",
      "mTICI score after mechanical thrombectomy",
      "Phone number verified before discharge",
      "HIV history"
    ],
    "correct": 2,
    "explanation": "Phone number verification before discharge is a CRITICAL variable. Without a verified contact number, the 90-day mRS data is lost — and 90-day mRS is a primary secondary outcome. HIV history and smoking are optional variables that rarely appear in Egyptian hospital records."
  },
  {
    "id": 29,
    "domain": "CRF Completion and Source Documents",
    "marks": 2,
    "question": "A patient was admitted at 09:14 (ED electronic timestamp). CT was initiated at 09:41 (radiology system). tPA was dispensed at 10:38 (pharmacy record) and charted at 10:45 (nursing record). What is the door-to-needle time and does it meet the benchmark?",
    "options": [
      "84 minutes from pharmacy record — benchmark NOT met",
      "91 minutes from nursing record — benchmark NOT met",
      "84 minutes using pharmacy record (earlier time) — benchmark NOT met",
      "27 minutes door-to-imaging (meets benchmark); 84 minutes DTN (does not meet benchmark)"
    ],
    "correct": 2,
    "explanation": "DTN = IV bolus time minus door time. Use the earlier of pharmacy and nursing records: 10:38. Door time: 09:14. DTN = 84 minutes. Benchmark is ≤60 minutes — NOT met. Door-to-imaging = 09:41 minus 09:14 = 27 minutes — benchmark of 25 minutes NOT met either."
  },
  {
    "id": 30,
    "domain": "CRF Completion and Source Documents",
    "marks": 2,
    "question": "A required source document existed on the ward but staff were unable to locate it during your visit. Which missing data code applies?",
    "options": [
      "MD-1",
      "MD-2",
      "MD-3",
      "MD-4"
    ],
    "correct": 1,
    "explanation": "MD-2 = source document exists but was not available for review at time of abstraction. MD-1 is for information not documented anywhere. Since the document exists but was temporarily unavailable, MD-2 is correct. Return when the document is accessible."
  },
  {
    "id": 31,
    "domain": "Consent Procedures",
    "marks": 2,
    "question": "What is the minimum time a patient or LAR must be given to review the ICF before signing?",
    "options": [
      "5 minutes",
      "10 minutes",
      "20 minutes",
      "There is no minimum — they may sign immediately"
    ],
    "correct": 1,
    "explanation": "A minimum of 10 minutes must be allowed for the patient or LAR to read the consent form and ask questions before signing. The ICF states this explicitly. Rushing the consent process is a consent procedure violation."
  },
  {
    "id": 32,
    "domain": "Consent Procedures",
    "marks": 2,
    "question": "A patient is drowsy but can follow simple commands and give reliable yes/no responses. Who should be approached for consent?",
    "options": [
      "The patient's spouse who is present — the patient's capacity is too questionable",
      "The patient directly — ability to follow commands and respond indicates sufficient capacity",
      "The attending neurologist, who provides consent on the patient's behalf",
      "Both the patient and spouse must sign for safety"
    ],
    "correct": 1,
    "explanation": "If a patient can follow simple commands and respond reliably, they are assessed as having sufficient capacity for Tier 1 consent. Do not default to Tier 2 simply because the patient appears drowsy. Approach the patient directly."
  },
  {
    "id": 33,
    "domain": "Consent Procedures",
    "marks": 2,
    "question": "Under Tier 3 deferred consent, a patient is enrolled at 03:00 on Tuesday. By when must consent be obtained?",
    "options": [
      "03:00 Wednesday (24 hours from Enrollment)",
      "03:00 Thursday (48 hours from Enrollment)",
      "03:00 Friday (72 hours from Enrollment)",
      "At the next scheduled family visit"
    ],
    "correct": 2,
    "explanation": "The Tier 3 deferred consent window is 72 hours. Enrolled at 03:00 Tuesday means consent must be obtained by 03:00 Friday. If consent is not obtained within 72 hours, all data must be destroyed and the patient is excluded. No exceptions."
  },
  {
    "id": 34,
    "domain": "Consent Procedures",
    "marks": 2,
    "question": "A patient enrolled via LAR consent recovers decision-making capacity on Day 4. What must happen?",
    "options": [
      "The LAR consent remains valid — no further action needed",
      "Inform the patient, give them the ICF to read, obtain their own consent; if they decline, destroy all data",
      "The LAR consent is automatically invalidated and all data must be destroyed immediately",
      "The Lead Researcher contacts the IRB before any further action"
    ],
    "correct": 1,
    "explanation": "When a patient recovers capacity, they must be informed of their Enrollment, given the ICF to read with at least 10 minutes to review, and asked to confirm participation with their own signature. If they decline: destroy all data, record as \"withdrawn — patient declined following capacity restoration,\" notify PI within 24 hours."
  },
  {
    "id": 35,
    "domain": "Consent Procedures",
    "marks": 2,
    "question": "A capacitated patient reads the ICF and declines to participate. How is this documented?",
    "options": [
      "Record \"declined — patient request\" in the Enrollment Log and proceed to the next patient",
      "Re-approach after 24 hours in case the patient changes their mind",
      "Ask the attending physician to speak to the patient about the importance of the research",
      "Leave the Enrollment Log blank as the patient did not consent to any documentation"
    ],
    "correct": 0,
    "explanation": "Record \"declined — patient request\" in the Enrollment Log. Do not re-approach a patient who has explicitly declined, and do not involve clinical staff in trying to change their decision. Patient refusal must always be respected and documented without further persuasion attempts."
  },
  {
    "id": 36,
    "domain": "Consent Procedures",
    "marks": 2,
    "question": "Consent to the 90-day telephone follow-up call is:",
    "options": [
      "Implied by the patient's general consent to the study — no separate mention needed",
      "A separate element that must be explicitly stated in the consent form and agreed to",
      "Obtained via a separate consent form at the time of the 90-day call",
      "Obtained by the PI during the analysis phase"
    ],
    "correct": 1,
    "explanation": "Consent to the telephone follow-up is a separate and explicit element of the ICF — the patient must specifically agree to be contacted by phone at 90 days. The ICF contains a dedicated section for this, including space to record the verified phone number."
  },
  {
    "id": 37,
    "domain": "Consent Procedures",
    "marks": 2,
    "question": "A patient's wife and adult son (aged 24) are both present for Tier 2 LAR consent. Who should sign?",
    "options": [
      "The adult son — he can make clear-headed decisions as a young adult",
      "The wife — she is first in the LAR hierarchy",
      "Both must sign jointly for validity",
      "Whoever is more available and willing to sign"
    ],
    "correct": 1,
    "explanation": "The LAR hierarchy must be followed strictly in order: (1) spouse, (2) adult child aged 18+, (3) parent, (4) adult sibling aged 18+. The wife is first priority. The adult son is second. Do not skip the hierarchy."
  },
  {
    "id": 38,
    "domain": "Consent Procedures",
    "marks": 2,
    "question": "A patient is admitted at 03:15 unconscious with no family present. The RA identifies the patient as meeting all inclusion criteria. What is the correct first step?",
    "options": [
      "Enroll under Tier 4 IRB waiver immediately — unconscious patients qualify automatically",
      "Begin data collection now and seek consent from family as soon as they arrive",
      "Only begin data collection under Tier 3 if the IRB has approved a deferred consent pathway; contact family within 72 hours",
      "Wait at the bedside until family arrives before any data collection begins"
    ],
    "correct": 2,
    "explanation": "Tier 3 deferred consent allows data collection to begin only if the IRB has approved this pathway. The RA notifies the Lead Researcher immediately. A family member or the patient must be approached for consent within 72 hours. If not obtained in that window, all data is destroyed."
  },
  {
    "id": 39,
    "domain": "Data Security and Entry",
    "marks": 2,
    "question": "Which of the following is prohibited under the study data management plan?",
    "options": [
      "Encrypted USB drive assigned to you",
      "Locked filing cabinet at Alexandria University campus",
      "AES-256 encrypted Excel file on the Lead Researcher's personal laptop",
      "Google Drive, even with password protection"
    ],
    "correct": 3,
    "explanation": "All cloud storage platforms — Google Drive, iCloud, OneDrive, Dropbox, and equivalents — are prohibited for any study data. No exceptions. This applies even if the folder is password-protected. The only approved digital transfer method is the encrypted USB drive."
  },
  {
    "id": 40,
    "domain": "Data Security and Entry",
    "marks": 2,
    "question": "The Master Link Log is stored on:",
    "options": [
      "The Lead Researcher's encrypted laptop, backed up to encrypted USB",
      "The PI of Record's personal device only — never transmitted or shared",
      "A shared encrypted folder accessible to the Lead Researcher and PI of Record",
      "The Alexandria University Faculty of Medicine secure server"
    ],
    "correct": 1,
    "explanation": "The Master Link Log is stored on the PI of Record's personal device only. It is never transmitted electronically, never printed for routine use, and never stored in any shared or cloud-accessible location. Not even the Lead Researcher stores it — only the PI of Record."
  },
  {
    "id": 41,
    "domain": "Data Security and Entry",
    "marks": 2,
    "question": "You accidentally wrote a patient's full name in the demographics section of a CRF. What is the correct procedure?",
    "options": [
      "Use correction fluid to cover the name — leave no trace of the error",
      "Discard the CRF and start a new one for that patient",
      "Cross out with a single line, write \"error\" next to it, initial and date the correction, inform the Lead Researcher immediately",
      "The error is minor — just strike through the name and continue without informing anyone"
    ],
    "correct": 2,
    "explanation": "Correct procedure: single line through the name (do not obscure it completely), write \"error\" next to it, initial and date the correction, and inform the Lead Researcher immediately. Correction fluid is never used on research documents — all corrections must remain visible and traceable."
  },
  {
    "id": 42,
    "domain": "Data Security and Entry",
    "marks": 2,
    "question": "A research assistant sends a photograph of a CRF page via WhatsApp to ask for help interpreting a handwritten clinical note. No patient name is visible in the photo. How is this classified?",
    "options": [
      "Acceptable — no patient name is visible",
      "Minor deviation — low risk, easily corrected, document and move on",
      "Protocol violation — study ID, hospital site, and clinical data together constitute identifiable information even without a name",
      "Acceptable if the receiving RA is also certified and holds a GCP certificate"
    ],
    "correct": 2,
    "explanation": "This is a protocol violation. The combination of study ID, hospital site, stroke type, and NIHSS score constitutes indirectly identifiable patient information even without a name. Required actions: notify PI immediately; delete from all devices and the WhatsApp conversation; document in the deviation log; PI assesses within 24 hours whether IRB notification is required; RA completes data security retraining before resuming data collection."
  },
  {
    "id": 43,
    "domain": "Data Security and Entry",
    "marks": 2,
    "question": "You find an error in a cell you have already entered in your data entry sheet. What is the correct first step?",
    "options": [
      "Correct the cell directly — minor errors need no documentation",
      "Open the corrections log and record: study ID, field name, original value, corrected value, your RA code, and date — then amend the cell",
      "Email the Lead Researcher before making any change to the database",
      "Delete the entire row and re-enter all fields for that patient"
    ],
    "correct": 1,
    "explanation": "Corrections log first, always. Record study ID, field name, original value, corrected value, your RA code, and today's date in the corrections log tab. Only then amend the cell. Silent overwriting — correcting without a log entry — is a protocol violation."
  },
  {
    "id": 44,
    "domain": "Data Security and Entry",
    "marks": 2,
    "question": "What identifiers are transmitted to the RES-Q platform, and where is this disclosed?",
    "options": [
      "Study ID and admission date — disclosed only to the PI of Record",
      "Age and gender only — disclosed in the ICF and approved by the IRB",
      "No identifiers — all transmitted data is fully anonymized",
      "Age, gender, and hospital name — disclosed in the protocol only"
    ],
    "correct": 1,
    "explanation": "Only age and gender are transmitted to RES-Q as participant identifiers. This data-sharing arrangement is explicitly disclosed in the patient ICF and is approved as part of the IRB submission. No names, dates of birth, study IDs, or hospital record numbers are transmitted."
  },
  {
    "id": 45,
    "domain": "Data Security and Entry",
    "marks": 2,
    "question": "For how many years post-publication must all study data be retained?",
    "options": [
      "5 years",
      "7 years",
      "10 years",
      "15 years"
    ],
    "correct": 2,
    "explanation": "All study data — paper CRFs, encrypted databases, consent forms, and the Master Link Log — must be retained for a minimum of 10 years post-publication, in accordance with Alexandria University Faculty of Medicine research governance requirements."
  },
  {
    "id": 46,
    "domain": "Protocol Deviations",
    "marks": 2,
    "question": "You realize you began abstracting data from a patient's medical records 2 hours before the consent form was signed. How is this classified?",
    "options": [
      "Not a deviation — consent was eventually obtained",
      "Minor deviation — a timing issue that is easily corrected",
      "Major deviation — data abstraction before consent violates participant rights regardless of subsequent consent",
      "Major deviation only if the patient later withdraws"
    ],
    "correct": 2,
    "explanation": "Starting data abstraction before consent is documented is always a MAJOR deviation. It violates IRB-approved consent procedures and participant rights regardless of whether consent is later obtained. Report verbally to the Lead Researcher within 24 hours. Written report within 48 hours."
  },
  {
    "id": 47,
    "domain": "Protocol Deviations",
    "marks": 2,
    "question": "You discover a deviation at 16:00 on Thursday. By when must you report it verbally to the Lead Researcher?",
    "options": [
      "By 16:00 Thursday (same day — immediately)",
      "By 16:00 Friday (24 hours from discovery)",
      "By 16:00 Saturday (48 hours from discovery)",
      "At the next scheduled weekly quality check"
    ],
    "correct": 1,
    "explanation": "Verbal report to the Lead Researcher must occur within 24 hours of discovery. Discovered at 16:00 Thursday = report by 16:00 Friday at the latest. The written Protocol Deviation Report Form follows within 48 hours of discovery (by 16:00 Saturday)."
  },
  {
    "id": 48,
    "domain": "Protocol Deviations",
    "marks": 2,
    "question": "An NIHSS score in a completed CRF was estimated by the RA rather than extracted from a neurologist's note. The referenced source document does not exist in the medical file. This is:",
    "options": [
      "A minor data quality issue — correct silently in the database",
      "A protocol deviation requiring documentation in the deviation log and report to the PI within 24 hours",
      "A protocol violation requiring immediate IRB notification",
      "Acceptable approximation given the absence of the source document"
    ],
    "correct": 1,
    "explanation": "Independent NIHSS estimation by an RA is a protocol deviation — the RA is not authorized to assess NIHSS regardless of certification. Document in the deviation log, report to the PI within 24 hours. The PI will investigate and, if clinically feasible, request a retrospective neurologist review for the correct score."
  },
  {
    "id": 49,
    "domain": "Protocol Deviations",
    "marks": 2,
    "question": "Three minor deviations of the same type occur within a single month. Beyond logging them, what must happen?",
    "options": [
      "Nothing further — three minor deviations remain minor",
      "All three are reclassified collectively as a single major deviation",
      "The pattern is escalated to the PI of Record for review",
      "Each must be individually reported to the IRB"
    ],
    "correct": 2,
    "explanation": "Three or more minor deviations of the same type within a single month must be escalated to the PI of Record for review, regardless of their individual minor classification. The pattern may indicate a systemic problem — unclear training, insufficient capacity, or ambiguous protocol wording — that needs to be addressed at the supervisory level."
  },
  {
    "id": 50,
    "domain": "Protocol Deviations",
    "marks": 2,
    "question": "Which of the following is correctly classified as a MINOR deviation?",
    "options": [
      "Beginning data abstraction 2 hours before the consent form is signed",
      "Sending a CRF photograph via WhatsApp with no patient name visible",
      "Storing a completed CRF on Google Drive overnight before remembering to delete it",
      "Submitting a completed CRF to the Lead Researcher 52 hours after completion, exceeding the 48-hour target"
    ],
    "correct": 3,
    "explanation": "Submitting the CRF 52 hours after completion (4 hours past the 48-hour target) is a minor deviation — it exceeds a procedural timeline but does not compromise data integrity, participant safety, or consent procedures. Options A, B, and C are all major deviations or protocol violations involving data security or consent."
  }
];

export default questionBank;
