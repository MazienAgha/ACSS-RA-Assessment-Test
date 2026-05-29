// questionBank.js
// Alexandria Comparative Stroke Study (ACSS)
// RA Competency Assessment — Question Bank
// Version 3.0 — Updated for Protocol v2.0
//
// Changes from v2.0:
//   Q5  (General Study Basics):    AIS-only primary cohort question — new
//   Q10 (Stroke Terminology):      ICH+AF indicator count — updated for AIS-only primary analysis
//   Q11 (RES-Q Indicators):        75% ESO benchmark — new question
//   Q14 (RES-Q Indicators):        TIA in secondary cohort — updated
//   Q31 (Consent):                 Capacity screen before Tier 2 — new
//   Q32 (Consent):                 Unconscious patient — Tier 3 provisional sheet; Tier 4 not automatic
//   Q33 (Consent):                 Tier 3 expiry — permanent deletion — updated
//   Q34 (Consent):                 Provisional entry sheet isolation — new
//   Q35 (Consent):                 Tier 4 conditional — new
//   Q39 (Data Security):           Weekly handoff as primary transfer — new
//   Q40 (Data Security):           Master Link Log — two copies — corrected from v2.0
//   Q44 (Data Security):           RES-Q transmission + Tier 3 hold — updated
//   Q45 (Data Security):           LR responsible for data entry — new
//
// Domain breakdown:
//   General Study Basics:             5 Q  | 10 marks
//   Stroke Terminology and Subtypes:  5 Q  | 10 marks
//   RES-Q 3.0 Indicators:            10 Q  | 20 marks
//   CRF Completion and Source Docs:  10 Q  | 20 marks
//   Consent Procedures:               8 Q  | 16 marks
//   Data Security and Entry:          7 Q  | 14 marks
//   Protocol Deviations:              5 Q  | 10 marks
//
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
    "explanation": "ACSS = Alexandria Comparative Stroke Study. A two-phase prospective cohort study comparing acute stroke care protocol adherence between private and public hospital stroke units in Alexandria, Egypt."
  },
  {
    "id": 2,
    "domain": "General Study Basics",
    "marks": 2,
    "question": "What is the primary measurement instrument used in the ACSS?",
    "options": [
      "GWTG-Stroke",
      "RES-Q 3.0 (Registry of Stroke Care Quality)",
      "NIHSS composite score",
      "AHA/ASA performance scorecard"
    ],
    "correct": 1,
    "explanation": "The ACSS uses the RES-Q 3.0 framework. RES-Q was chosen because participation is free, it is validated across 55 countries, and it is endorsed by WHO, ESO, and WSO for LMIC settings. GWTG-Stroke was rejected because it requires paid membership and is not validated outside the US."
  },
  {
    "id": 3,
    "domain": "General Study Basics",
    "marks": 2,
    "question": "Which hospital is the sole public-sector stroke unit in the Alexandria Governorate?",
    "options": [
      "Louran Comprehensive Stroke Center",
      "Elnozha Hospital",
      "Al Miri — Alexandria University Main Hospital",
      "Semoha Emergency Hospital"
    ],
    "correct": 2,
    "explanation": "Al Miri (Alexandria University Main Hospital) is the only public-sector inpatient stroke unit in the Alexandria Governorate. The study includes all 6 private stroke units and the single public unit — capturing the entire public stroke capacity of the city. The 6:1 hospital ratio reflects geography, not a design choice."
  },
  {
    "id": 4,
    "domain": "General Study Basics",
    "marks": 2,
    "question": "What are the three Phase 1 feasibility thresholds that must ALL be met before Phase 2 can begin?",
    "options": [
      "Data completeness ≥ 80%, consent rate ≥ 70%, kappa ≥ 0.80",
      "Data completeness ≥ 90%, consent rate ≥ 80%, kappa ≥ 0.75",
      "Data completeness ≥ 75%, consent rate ≥ 70%, kappa ≥ 0.80",
      "Data completeness ≥ 80%, consent rate ≥ 60%, kappa ≥ 0.85"
    ],
    "correct": 0,
    "explanation": "All three Phase 1 feasibility thresholds must be met: (1) data completeness ≥ 80% on primary outcome variables, (2) consent rate ≥ 70%, and (3) inter-rater reliability Cohen's kappa ≥ 0.80 for the composite adherence score. If any threshold is not met, the Lead Researcher and PI of Record review findings before Phase 2 proceeds."
  },
  {
    "id": 5,
    "domain": "General Study Basics",
    "marks": 2,
    "question": "Which stroke subtypes are included in the PRIMARY analysis cohort?",
    "options": [
      "All subtypes: AIS, ICH, SAH, TIA, and CVT",
      "AIS and ICH only",
      "AIS only",
      "AIS, ICH, and TIA only"
    ],
    "correct": 2,
    "explanation": "The primary analysis is restricted to AIS (acute ischemic stroke) patients only. Of the 7 RES-Q core indicators, 4 apply exclusively to AIS. Non-AIS subtypes (ICH, SAH, TIA, CVT) have a maximum of 2–3 applicable indicators and cannot reach the 4-indicator minimum required for a valid composite score. ICH, SAH, TIA, and CVT patients are enrolled into a descriptive secondary cohort only."
  },
  {
    "id": 6,
    "domain": "Stroke Terminology and Subtypes",
    "marks": 2,
    "question": "A patient is admitted having been found by family with left-sided weakness after waking from sleep. Onset time is unknown. What is the correct classification and CRF handling?",
    "options": [
      "Exclude — onset time unknown means the patient is ineligible",
      "Enroll; record last-known-well time; flag as wake-up stroke in Section A",
      "Enroll; estimate onset time as midpoint between last-known-well and discovery",
      "Enroll; leave onset time blank; proceed without flagging"
    ],
    "correct": 1,
    "explanation": "Wake-up strokes are eligible for enrollment. The correct procedure is: enroll the patient, record the last-known-well (LKW) time as the onset proxy, flag the case as \"wake-up stroke\" in Section A, and flag for sensitivity analysis. Do not estimate or calculate a midpoint — use LKW as stated."
  },
  {
    "id": 7,
    "domain": "Stroke Terminology and Subtypes",
    "marks": 2,
    "question": "A patient is admitted with suspected acute stroke but the neurologist's final discharge diagnosis is \"Todd's paresis following focal seizure.\" How is this patient handled?",
    "options": [
      "Exclude retroactively — final diagnosis is not stroke",
      "Enroll and include in primary AIS analysis",
      "Enroll; record as \"stroke mimic\" in Section D; include in descriptive analysis only",
      "Exclude at screening — should not have been enrolled"
    ],
    "correct": 2,
    "explanation": "Stroke mimics presenting as suspected stroke are enrolled. The final neurologist diagnosis is recorded in Section D as \"stroke mimic\" plus the actual diagnosis. This patient is included in descriptive analysis only — not in the primary AIS adherence comparison. Do not retroactively exclude once enrolled."
  },
  {
    "id": 8,
    "domain": "Stroke Terminology and Subtypes",
    "marks": 2,
    "question": "A patient was initially assessed at a district hospital and then transferred to Louran CSC 4 hours later. How does this affect their CRF?",
    "options": [
      "Exclude — transfer patients are not eligible",
      "Enroll; include in all time calculations using the original hospital's door time",
      "Enroll; exclude from onset-to-door and door-to-needle calculations; mark Section A as \"Transfer\"",
      "Enroll; use the Louran CSC arrival time for all time calculations"
    ],
    "correct": 2,
    "explanation": "Transfer patients are eligible for enrollment. However, because time calculations from the referring hospital are unavailable and non-comparable, they are excluded from onset-to-door and door-to-needle time calculations. Section A is marked \"No — Transfer.\" All other fields are completed normally."
  },
  {
    "id": 9,
    "domain": "Stroke Terminology and Subtypes",
    "marks": 2,
    "question": "A patient was admitted to a cardiology ward for acute MI. On day 2, nursing staff notice new left arm weakness. Stroke is confirmed. How is this patient classified?",
    "options": [
      "Enroll into the primary AIS cohort — confirmed AIS",
      "Enroll into the descriptive secondary cohort",
      "Exclude — in-hospital stroke",
      "Enroll with a note about the hospital onset in Section A"
    ],
    "correct": 2,
    "explanation": "In-hospital strokes are excluded from both cohorts. This is a patient who was already admitted for another condition (MI) when the stroke occurred. This is one of the explicit exclusion criteria. Record as screen failure in the screening log."
  },
  {
    "id": 10,
    "domain": "Stroke Terminology and Subtypes",
    "marks": 2,
    "question": "An ICH patient with confirmed atrial fibrillation is enrolled. How many RES-Q core indicators are applicable to this patient?",
    "options": [
      "7 — all indicators apply to all enrolled patients",
      "5 — ICH patients qualify for most indicators",
      "3 — stroke unit admission, dysphagia screening, and AF anticoagulation",
      "1 — only stroke unit admission"
    ],
    "correct": 2,
    "explanation": "An ICH patient with AF has 3 applicable indicators: (3) stroke unit admission on Day 1, (4) dysphagia screening, and (6) anticoagulation for confirmed AF. Indicators 1 (tPA), 2 (DTN), 5 (antithrombotic), and 7 (statin) are not applicable to ICH. With only 3 applicable indicators, this patient falls below the 4-indicator minimum and therefore goes into the descriptive secondary cohort — not the primary analysis."
  },
  {
    "id": 11,
    "domain": "RES-Q 3.0 Indicators",
    "marks": 2,
    "question": "What is the ESO minimum performance benchmark for composite RES-Q adherence, and how is it used in this study?",
    "options": [
      "60% — used as the assumed adherence rate in the power calculation",
      "75% — pre-specified cutoff for the binary logistic regression; patients meeting this are classified as meeting the performance standard",
      "85% — the passing threshold for the RA competency assessment",
      "80% — the Phase 1 data completeness threshold"
    ],
    "correct": 1,
    "explanation": "75% composite adherence is the ESO minimum performance benchmark for stroke unit care. In this study it is used as the pre-specified cutoff for the binary logistic regression: AIS patients with ≥75% of their applicable indicators met are classified as meeting the performance standard. This threshold was fixed before any data are collected — it is not derived from the study's own data."
  },
  {
    "id": 12,
    "domain": "RES-Q 3.0 Indicators",
    "marks": 2,
    "question": "An AIS patient eligible for thrombolysis does not receive tPA because the drug is not stocked at the hospital. How is indicator 1 coded?",
    "options": [
      "Not applicable — thrombolysis was not possible at this site",
      "Not met — eligible patient did not receive tPA",
      "Met — the hospital did its best given resource constraints",
      "Missing — cannot determine indicator status"
    ],
    "correct": 1,
    "explanation": "\"Not met\" — this is an eligible AIS patient who did not receive tPA. The reason (drug unavailability) is a key variable captured separately. \"Not applicable\" applies only when the patient is not a candidate for tPA (e.g., ICH). Drug unavailability in an eligible AIS patient is a not-met result, and capturing the reason is critical to the private vs public comparison."
  },
  {
    "id": 13,
    "domain": "RES-Q 3.0 Indicators",
    "marks": 2,
    "question": "Indicator 2 (DTN ≤ 60 minutes) applies to which patients?",
    "options": [
      "All AIS patients admitted within 4.5 hours of onset",
      "All AIS patients, whether or not they received tPA",
      "Only AIS patients who actually received IV tPA",
      "All patients admitted to the stroke unit"
    ],
    "correct": 2,
    "explanation": "DTN time is only calculable and only applicable when the patient actually received IV tPA. If an AIS patient was eligible but did not receive tPA, indicator 2 is \"not applicable\" (no bolus time to calculate). If an AIS patient received tPA and the DTN was > 60 minutes, indicator 2 is \"not met.\""
  },
  {
    "id": 14,
    "domain": "RES-Q 3.0 Indicators",
    "marks": 2,
    "question": "A TIA patient is enrolled. Which indicators are applicable?",
    "options": [
      "All 7 — TIA patients are eligible for the full indicator set",
      "Indicators 3 and 4 only — stroke unit admission and dysphagia screening",
      "Indicators 3, 4, and 5 — stroke unit, dysphagia, and antithrombotic",
      "None — TIA patients are in the secondary cohort and have no applicable primary indicators"
    ],
    "correct": 3,
    "explanation": "TIA patients are enrolled into the descriptive secondary cohort only and are not assessed against RES-Q indicators for the primary analysis. They have at most 2–3 theoretically applicable indicators and cannot reach the 4-indicator minimum. Indicator 1 (tPA) is not standard for TIA, indicator 2 (DTN) requires tPA, and indicator 7 (statin) and 5 (antithrombotic) may or may not apply depending on clinical context. TIA patients contribute only to descriptive analyses."
  },
  {
    "id": 15,
    "domain": "RES-Q 3.0 Indicators",
    "marks": 2,
    "question": "An AIS patient with no history of AF receives antithrombotic therapy at discharge. Indicator 5 is met. How is indicator 6 coded for this patient?",
    "options": [
      "Met — they received antithrombotic which serves both indicators",
      "Not met — no anticoagulant was prescribed",
      "Not applicable — patient has no confirmed AF",
      "Missing — AF status needs to be confirmed"
    ],
    "correct": 2,
    "explanation": "Indicator 6 (anticoagulation for AF) only applies to patients with confirmed AF. This patient has no AF, so indicator 6 is \"not applicable.\" Indicators 5 and 6 are independent: indicator 5 covers antithrombotic therapy for AIS, while indicator 6 specifically covers anticoagulation in the AF subgroup regardless of stroke subtype."
  },
  {
    "id": 16,
    "domain": "RES-Q 3.0 Indicators",
    "marks": 2,
    "question": "An AIS patient is admitted and placed in the general medicine ward — not in the stroke unit — on Day 1 due to bed shortage. How is indicator 3 coded?",
    "options": [
      "Met — the patient was admitted to the hospital, which is sufficient",
      "Not applicable — bed shortage is an acceptable exemption",
      "Not met — patient was not admitted to the designated stroke unit or ICU on Day 1",
      "Missing — ward assignment is not a primary source document variable"
    ],
    "correct": 2,
    "explanation": "Indicator 3 (stroke unit admission Day 1) requires that the patient be admitted to the designated stroke unit or ICU on the day of arrival. Admission to a general medicine ward — even due to capacity constraints — does not meet this indicator. Code as \"not met\" and record the actual Day 1 location from the hospital admission record."
  },
  {
    "id": 17,
    "domain": "RES-Q 3.0 Indicators",
    "marks": 2,
    "question": "Dysphagia screening (indicator 4) must occur before which event?",
    "options": [
      "Before the patient is transferred to the stroke unit",
      "Before any oral intake — food, drink, or medication",
      "Before the NIHSS is scored",
      "Before the 90-day telephone follow-up"
    ],
    "correct": 1,
    "explanation": "Indicator 4 requires dysphagia screening before ANY oral intake — this includes food, drinks, and oral medications. This is a strict rule. If the patient received any oral medication before screening, indicator 4 is not met. This applies to all enrolled subtypes, not just AIS."
  },
  {
    "id": 18,
    "domain": "RES-Q 3.0 Indicators",
    "marks": 2,
    "question": "Which two RES-Q indicators apply to all enrolled stroke subtypes — not just AIS?",
    "options": [
      "Indicators 1 and 2 (thrombolysis and DTN)",
      "Indicators 5 and 7 (antithrombotic and statin)",
      "Indicators 3 and 4 (stroke unit admission and dysphagia screening)",
      "Indicators 6 and 7 (AF anticoagulation and statin)"
    ],
    "correct": 2,
    "explanation": "Indicators 3 (stroke unit admission Day 1) and 4 (dysphagia screening) apply to all enrolled patients regardless of stroke subtype. Indicators 1, 2, 5, and 7 are AIS-specific. Indicator 6 applies to any subtype with confirmed AF."
  },
  {
    "id": 19,
    "domain": "RES-Q 3.0 Indicators",
    "marks": 2,
    "question": "What is the door-to-needle time benchmark, and from which two source documents is the DTN calculation derived?",
    "options": [
      "45 minutes; from nursing notes and the emergency physician order",
      "60 minutes; from the pharmacy dispensing record (earlier of pharmacy and nursing times) and the ED electronic triage timestamp",
      "60 minutes; from the radiology timestamp and nursing administration record",
      "90 minutes; from the pharmacy record and the discharge summary"
    ],
    "correct": 1,
    "explanation": "The DTN benchmark is 60 minutes. DTN = IV bolus time minus door time. IV bolus time = the EARLIER of the pharmacy dispensing record and the nursing administration record. Door time = the ED electronic triage timestamp. These are the designated primary source documents for each component."
  },
  {
    "id": 20,
    "domain": "RES-Q 3.0 Indicators",
    "marks": 2,
    "question": "An AIS patient receives tPA. The pharmacy record shows IV bolus at 14:47; the nursing record shows 14:53; ED triage timestamp is 14:05. What is the DTN time?",
    "options": [
      "48 minutes (14:53 minus 14:05)",
      "42 minutes (14:47 minus 14:05)",
      "8 minutes (14:53 minus 14:47)",
      "52 minutes — average of both times minus door time"
    ],
    "correct": 1,
    "explanation": "DTN = IV bolus time minus door time. The IV bolus time is the EARLIER of the pharmacy and nursing records: 14:47 (pharmacy) is earlier than 14:53 (nursing), so use 14:47. Door time = 14:05 (ED electronic triage timestamp). DTN = 14:47 minus 14:05 = 42 minutes. Indicator 2 is met (≤ 60 minutes)."
  },
  {
    "id": 21,
    "domain": "CRF Completion and Source Documents",
    "marks": 2,
    "question": "A patient is admitted at 09:15 according to the ED triage computer system. A family member says \"we arrived at about 8:45.\" Which time is recorded as door time?",
    "options": [
      "08:45 — family estimate is often more accurate than electronic systems",
      "09:00 — average of the two times",
      "09:15 — ED electronic triage timestamp only",
      "Both times, flagged as conflicting with MD-3"
    ],
    "correct": 2,
    "explanation": "Door time = ED electronic triage timestamp only. Family estimates, patient estimates, and handwritten times are never used. The ED electronic triage timestamp is the sole designated source for this field. Record 09:15."
  },
  {
    "id": 22,
    "domain": "CRF Completion and Source Documents",
    "marks": 2,
    "question": "What is the primary source document for the NIHSS score at admission?",
    "options": [
      "The emergency physician's triage note",
      "The nursing observation chart",
      "The attending neurologist's consultation note",
      "The RA's own NIHSS assessment conducted at bedside"
    ],
    "correct": 2,
    "explanation": "The NIHSS is recorded from the attending neurologist's consultation note ONLY. The RA's NIHSS certification does not authorize independent assessment in this study. Triage notes and nursing notes are not acceptable sources. If no neurologist has documented a score, record \"Not performed\" and flag for quality check."
  },
  {
    "id": 23,
    "domain": "CRF Completion and Source Documents",
    "marks": 2,
    "question": "Section D (final stroke type) must be completed from which source?",
    "options": [
      "The ED triage note or emergency physician's admitting diagnosis",
      "The RA's clinical impression after reviewing imaging",
      "The attending neurologist's confirmed final diagnosis from the discharge summary or consultation note",
      "The nursing handover documentation"
    ],
    "correct": 2,
    "explanation": "Section D must wait for the attending neurologist's confirmed final diagnosis — from the discharge summary or confirmed consultation note. Never use triage notes, emergency physician impressions, or nursing notes. This matters because stroke subtype determines cohort assignment (primary AIS vs descriptive secondary) and indicator applicability."
  },
  {
    "id": 24,
    "domain": "CRF Completion and Source Documents",
    "marks": 2,
    "question": "The neurologist has not yet been consulted on a newly admitted patient. What should the RA do with Section D?",
    "options": [
      "Record the most likely stroke type based on CT findings",
      "Leave Section D blank and submit the CRF without it",
      "Do not complete Section D yet; proceed with all other sections; return when neurologist confirms diagnosis",
      "Apply missing data code MD-1 to Section D and finalize the CRF"
    ],
    "correct": 2,
    "explanation": "Section D must wait for neurologist confirmation. Proceed with all other sections that can be completed from available source documents. Return to complete Section D when the neurologist's confirmed diagnosis is available. This is not a missing data situation — it is an in-progress field that will be completed later."
  },
  {
    "id": 25,
    "domain": "CRF Completion and Source Documents",
    "marks": 2,
    "question": "A ward physician tells you verbally during a ward round that the patient's tPA was given at 16:30, but no pharmacy or nursing record is available yet. What do you record?",
    "options": [
      "16:30 — physician verbal reports are reliable and should be recorded",
      "Leave the field blank and return when records are available",
      "Apply code MD-2 (source document unavailable) and return when pharmacy or nursing records can be reviewed",
      "Apply code MD-3 and escalate to Lead Researcher"
    ],
    "correct": 2,
    "explanation": "Verbal remarks from clinicians are not source documents and cannot be recorded as CRF values. Since the source document (pharmacy or nursing record) exists but is not yet available, apply MD-2 and return to complete the field when it can be reviewed. MD-3 applies only when two written documents conflict with each other."
  },
  {
    "id": 26,
    "domain": "CRF Completion and Source Documents",
    "marks": 2,
    "question": "The pharmacy record shows tPA given at 15:20. The nursing record shows 15:28. Which time is recorded as the IV bolus time?",
    "options": [
      "15:28 — nursing records are more reliable than pharmacy records",
      "15:20 — use the EARLIER of pharmacy and nursing records",
      "15:24 — average of the two records",
      "MD-3 — apply missing data code because the records conflict"
    ],
    "correct": 1,
    "explanation": "Record 15:20. The rule is to use the EARLIER of the pharmacy and nursing records for IV bolus time. Both records are valid source documents; the earlier time more accurately reflects when the drug entered the patient. This is not a conflict requiring MD-3 — it is an explicit rule for handling this common scenario."
  },
  {
    "id": 27,
    "domain": "CRF Completion and Source Documents",
    "marks": 2,
    "question": "Two source documents show different values for a field. The nursing note says blood pressure at arrival was 170/95; the ED triage record says 185/100. What is the correct CRF entry?",
    "options": [
      "Record 170/95 — nursing notes are the primary source for vital signs",
      "Record 185/100 — the ED triage record takes priority",
      "Record the average: 177/97",
      "Apply code MD-3 and report to Lead Researcher within 24 hours"
    ],
    "correct": 3,
    "explanation": "When two source documents give contradictory values for the same field, apply MD-3 (contradictory information across documents) and report to the Lead Researcher within 24 hours. Do not average, do not choose, do not use clinical judgment to decide. MD-3 is the correct code and escalation is required."
  },
  {
    "id": 28,
    "domain": "CRF Completion and Source Documents",
    "marks": 2,
    "question": "What is the deadline for completing the CRF from source documents after a patient is admitted?",
    "options": [
      "24 hours",
      "48 hours",
      "72 hours",
      "5 working days"
    ],
    "correct": 2,
    "explanation": "The CRF must be completed within 72 hours of admission. After completion, the paper CRF must be delivered to the Lead Researcher within 48 hours of completion. These are two separate deadlines: 72 hours to complete the CRF, then 48 hours to deliver it."
  },
  {
    "id": 29,
    "domain": "CRF Completion and Source Documents",
    "marks": 2,
    "question": "The patient has been discharged and the discharge summary has not been filed yet. You need the discharge medications for the CRF. Which code applies?",
    "options": [
      "MD-1",
      "MD-2",
      "MD-3",
      "MD-4"
    ],
    "correct": 1,
    "explanation": "MD-2 = source document exists but was unavailable at time of abstraction. The discharge summary exists but has not been filed yet. Return when it is accessible. MD-1 applies when no documentation exists at all. MD-4 applies when the patient was discharged before the field could be completed at all."
  },
  {
    "id": 30,
    "domain": "CRF Completion and Source Documents",
    "marks": 2,
    "question": "What information is recorded in Section 1 (patient identifiers) of the CRF?",
    "options": [
      "Patient name, date of birth, and hospital record number",
      "Study ID, patient name, and admission date",
      "Study ID only — no personal identifiers ever appear on the CRF",
      "Study ID and patient initials only"
    ],
    "correct": 2,
    "explanation": "Section 1 contains the study ID only. Patient names, dates of birth, and hospital record numbers NEVER appear on any CRF or study document. Study IDs only. The connection between study IDs and patient identities is kept exclusively in the Master Link Log."
  },
  {
    "id": 31,
    "domain": "Consent Procedures",
    "marks": 2,
    "question": "A patient with severe expressive aphasia can understand simple commands and nods consistently in response to yes/no questions. What is the correct consent approach?",
    "options": [
      "Proceed directly to Tier 2 — aphasia means the patient lacks consent capacity",
      "Conduct the capacity screen; if the patient demonstrates consistent responses and comprehension, proceed to Tier 1 direct consent via witnessed verbal agreement or thumbprint",
      "Apply Tier 3 deferred consent — aphasia makes immediate consent impossible",
      "Contact the LAR and obtain Tier 2 consent while keeping the patient informed"
    ],
    "correct": 1,
    "explanation": "Aphasia does not equal incapacity. Before routing any patient to Tier 2, conduct the capacity screen: ask two simple yes/no questions about the study. If the patient responds consistently and demonstrates comprehension, they have the right to consent directly (Tier 1) via thumbprint or witnessed verbal agreement. Only patients who fail the capacity screen are routed to Tier 2."
  },
  {
    "id": 32,
    "domain": "Consent Procedures",
    "marks": 2,
    "question": "A patient is admitted unconscious with no family immediately available. The patient fails the capacity screen. What is the correct first step?",
    "options": [
      "Apply Tier 4 waiver immediately — unconscious patients automatically qualify",
      "Create a provisional entry sheet; begin CRF completion; actively seek LAR within 72 hours",
      "Wait at the bedside until a family member arrives before any data collection",
      "Begin data collection under Tier 2 using the most senior available clinician as LAR"
    ],
    "correct": 1,
    "explanation": "With no LAR immediately available and the patient failing the capacity screen, Tier 3 deferred consent applies. Create a PROVISIONAL entry sheet — kept entirely separate from the master database — and begin CRF completion. Actively seek an LAR; consent must be confirmed within 72 hours. Tier 4 is not automatic — it is only active if explicitly approved by the IRB in writing."
  },
  {
    "id": 33,
    "domain": "Consent Procedures",
    "marks": 2,
    "question": "Under Tier 3 deferred consent, what happens if the 72-hour window closes without consent being obtained?",
    "options": [
      "Data collection continues; the patient is flagged in the database as \"unconfirmed consent\"",
      "The PI of Record decides case-by-case whether to retain the data",
      "The provisional entry sheet is permanently deleted; the patient is not enrolled; record as \"consent failure — Tier 3 window expired\"",
      "The patient is automatically moved to Tier 4 waiver enrollment"
    ],
    "correct": 2,
    "explanation": "If consent is not confirmed within 72 hours, the provisional entry sheet is permanently deleted. The patient is not enrolled. The outcome is recorded in the screening log as \"consent failure — Tier 3 window expired.\" Notify the Lead Researcher immediately. There is no option to retain the data, escalate to Tier 4 automatically, or continue collection."
  },
  {
    "id": 34,
    "domain": "Consent Procedures",
    "marks": 2,
    "question": "Under Tier 3, how is the patient's data handled while consent is being sought?",
    "options": [
      "Entered directly into the master database and flagged as provisional",
      "Held in a clearly labeled provisional entry sheet kept physically separate from all other CRFs; not entered into the master database and not transmitted to RES-Q until consent is confirmed",
      "Stored on the RA's encrypted USB until consent is confirmed, then transferred",
      "Entered into the RA's entry sheet but marked as \"consent pending\""
    ],
    "correct": 1,
    "explanation": "Tier 3 data is held in a provisional entry sheet kept physically separate from all other CRFs. It is never entered into the master database and never included in any RES-Q transmission batch until consent is confirmed. This prevents irreversible data entry before consent is secured."
  },
  {
    "id": 35,
    "domain": "Consent Procedures",
    "marks": 2,
    "question": "When is the Tier 4 IRB waiver consent pathway available?",
    "options": [
      "For any patient who lacks capacity and has no LAR available",
      "For patients over 80 years with severe disability",
      "Only if the IRB has explicitly approved a minimal-risk waiver in the written IRB approval letter",
      "For any observational study by default"
    ],
    "correct": 2,
    "explanation": "Tier 4 is a conditional pathway — it is only active if the IRB has explicitly granted a minimal-risk observational waiver in the written approval letter. It is not available automatically for any patient or any study type. If no IRB waiver has been granted and no LAR is identified after Tier 3, the patient is not enrolled (consent failure — no LAR identified)."
  },
  {
    "id": 36,
    "domain": "Consent Procedures",
    "marks": 2,
    "question": "A patient with full capacity is physically unable to sign the consent form due to right-sided hemiplegia. What is the correct consent approach?",
    "options": [
      "Automatically route to Tier 2 — the patient cannot sign",
      "Accept verbal consent alone without documentation",
      "A witness observes the patient's verbal agreement and signs on their behalf; document the verbal agreement and witness signature with date and time",
      "Use a digital fingerprint scanner to capture a thumbprint from any available finger"
    ],
    "correct": 2,
    "explanation": "Inability to sign due to motor deficit does not constitute incapacity. The correct procedure: a witness observes the patient's verbal agreement and signs on their behalf, documenting the verbal agreement, witness signature, date, and time. Do not automatically route to Tier 2 — Tier 2 is for patients who lack decision-making capacity, not those who cannot physically sign."
  },
  {
    "id": 37,
    "domain": "Consent Procedures",
    "marks": 2,
    "question": "What is the correct LAR hierarchy for Tier 2 consent, in order?",
    "options": [
      "Parent, spouse, adult child, adult sibling",
      "Spouse, adult child (18+), parent, adult sibling (18+)",
      "Adult child (18+), spouse, parent, adult sibling (18+)",
      "Spouse, parent, adult child, adult sibling"
    ],
    "correct": 1,
    "explanation": "The LAR hierarchy is strictly: (1) spouse, (2) adult child aged 18 or older, (3) parent, (4) adult sibling aged 18 or older. No level may be skipped. If the spouse is available, do not approach the adult child. Always follow the hierarchy in order."
  },
  {
    "id": 38,
    "domain": "Consent Procedures",
    "marks": 2,
    "question": "A patient enrolled via LAR consent (Tier 2) recovers full decision-making capacity on day 3. What must happen?",
    "options": [
      "Nothing — LAR consent is valid and sufficient; no further action needed",
      "Inform the patient of their enrollment; give them the ICF; allow at least 10 minutes for review; ask them to sign a new consent form confirming participation",
      "Withdraw and re-enroll the patient under Tier 1 consent from the beginning",
      "Inform the PI only — patient notification is not required"
    ],
    "correct": 1,
    "explanation": "When a patient recovers capacity after Tier 2 (or Tier 3) enrollment: inform them of their participation, explain the study, give them the ICF, allow at minimum 10 minutes to review, and ask them to sign a new consent form confirming participation. If they decline, destroy all collected data. Both the original LAR consent form and the new patient consent form are retained on file."
  },
  {
    "id": 39,
    "domain": "Data Security and Entry",
    "marks": 2,
    "question": "What is the PRIMARY method for transferring completed CRFs to the Lead Researcher?",
    "options": [
      "Encrypted USB drive at any time",
      "Email to the Lead Researcher's institutional address",
      "Paper CRF delivered at the weekly handoff meeting",
      "Scanned PDF uploaded to an encrypted OneDrive folder"
    ],
    "correct": 2,
    "explanation": "The primary transfer method is delivering the paper CRF to the Lead Researcher at the weekly handoff meeting. Encrypted USB drives are a secondary, exceptional method used only when a handoff meeting is not possible before the next data entry deadline. Cloud storage (OneDrive, Google Drive, etc.) is prohibited entirely. Email is prohibited."
  },
  {
    "id": 40,
    "domain": "Data Security and Entry",
    "marks": 2,
    "question": "Where is the Master Link Log stored?",
    "options": [
      "On the Lead Researcher's encrypted laptop only",
      "On the PI of Record's personal device only, never shared",
      "On two AES-256 encrypted devices: the PI of Record's device (primary) and the Lead Researcher's encrypted backup device, synchronized at each session",
      "On the Alexandria University secure server, accessible to the research team"
    ],
    "correct": 2,
    "explanation": "The Master Link Log is maintained on two AES-256 encrypted devices: the PI of Record's personal device (primary copy) and the Lead Researcher's encrypted backup device. Both copies are synchronized at the end of each data entry session. Neither copy is ever transmitted electronically, printed for routine use, or stored in any cloud or shared location. RAs have no access to either copy."
  },
  {
    "id": 41,
    "domain": "Data Security and Entry",
    "marks": 2,
    "question": "You accidentally write a patient's full name in the demographics section of a CRF. What is the correct procedure?",
    "options": [
      "Use correction fluid to cover the name completely",
      "Destroy the CRF page and reprint a blank one",
      "Cross the name out with a single line, write \"error\" next to it, initial and date the correction, inform the Lead Researcher immediately",
      "Cross the name out heavily so it cannot be read, initial, and continue"
    ],
    "correct": 2,
    "explanation": "The correct procedure is: single line through the name (not heavy scribble or correction fluid), write \"error\" next to it, initial and date the correction, then inform the Lead Researcher immediately. Using correction fluid is prohibited — it conceals what was written and violates the audit trail requirement."
  },
  {
    "id": 42,
    "domain": "Data Security and Entry",
    "marks": 2,
    "question": "You discover an error in a field you have already entered in the database. What is the correct FIRST step before amending the cell?",
    "options": [
      "Correct the cell directly — minor errors require no documentation",
      "Email the Lead Researcher before making any change",
      "Record the correction in the corrections log first: study ID, field name, original value, corrected value, RA code, and date",
      "Delete the entire row and re-enter all fields for that patient"
    ],
    "correct": 2,
    "explanation": "Corrections log first, then amend the cell. The log must capture: study ID, field name, original value, corrected value, RA code, and date. Silent overwriting — correcting a cell without a corrections log entry — is a protocol violation. This rule exists to maintain a complete audit trail of all data changes."
  },
  {
    "id": 43,
    "domain": "Data Security and Entry",
    "marks": 2,
    "question": "A fellow RA asks you to send them a photo of a CRF page via WhatsApp so they can help you complete a field. The patient's name is not visible in the photo. Is this acceptable?",
    "options": [
      "Yes — no patient name means no confidentiality risk",
      "Yes — internal team communication is permissible",
      "No — this is a minor deviation requiring a corrections log entry",
      "No — a study ID, hospital site, and clinical data together constitute indirectly identifiable information; this is a protocol violation"
    ],
    "correct": 3,
    "explanation": "Sending any CRF photograph via WhatsApp is a protocol violation, regardless of whether a patient name is visible. A study ID, hospital site, and clinical data together are indirectly identifiable. Required actions: notify PI immediately, delete the photo from all devices and the WhatsApp conversation, document in the Protocol Deviation Log, and complete data security retraining before resuming data collection."
  },
  {
    "id": 44,
    "domain": "Data Security and Entry",
    "marks": 2,
    "question": "What identifiers are transmitted to the RES-Q platform?",
    "options": [
      "Study ID and admission date",
      "Patient name and hospital record number",
      "Age and gender only",
      "No identifiers at all — all data are anonymous"
    ],
    "correct": 2,
    "explanation": "Only age and gender are transmitted to the RES-Q platform as participant identifiers. No names, study IDs, or hospital record numbers are transmitted. Additionally, Tier 3 provisional records are never transmitted until consent is confirmed — even if the monthly batch runs while the 72-hour window is still open."
  },
  {
    "id": 45,
    "domain": "Data Security and Entry",
    "marks": 2,
    "question": "Who is responsible for entering data into the master database?",
    "options": [
      "Each RA enters their own patients' data into their designated entry sheet",
      "The Lead Researcher, after receiving paper CRFs at the weekly handoff meeting",
      "A data entry clerk at Alexandria University",
      "The PI of Record, to maintain data integrity"
    ],
    "correct": 1,
    "explanation": "Data entry into the master database is the Lead Researcher's responsibility. RAs complete paper CRFs and deliver them at weekly handoff meetings. The Lead Researcher reviews and enters the data. RAs do not have access to the master database. This separation ensures quality control and a clear audit trail."
  },
  {
    "id": 46,
    "domain": "Protocol Deviations",
    "marks": 2,
    "question": "You realize you began abstracting source documents for an eligible patient before obtaining consent. What is the correct classification and immediate action?",
    "options": [
      "Minor deviation — document in the log and report at the next monthly review",
      "Major deviation — stop immediately, notify the Lead Researcher verbally within 24 hours, submit written form within 48 hours",
      "Not a deviation if consent is obtained within 24 hours after the fact",
      "Minor deviation if less than 1 hour of data collection occurred before you stopped"
    ],
    "correct": 1,
    "explanation": "Data abstraction before consent is documented is a major deviation with no exceptions. Stop immediately. Notify the Lead Researcher verbally within 24 hours of discovery. Submit the written Protocol Deviation Report Form within 48 hours. Whether consent is obtained afterward is irrelevant — the violation occurred at the moment data collection began without documented consent."
  },
  {
    "id": 47,
    "domain": "Protocol Deviations",
    "marks": 2,
    "question": "You submit a completed CRF to the Lead Researcher 52 hours after completion — 4 hours past the 48-hour deadline. No primary outcome data is missing. How is this classified?",
    "options": [
      "Major deviation — any deadline breach is major",
      "Minor deviation — does not affect data integrity or primary outcomes",
      "Not a deviation — the deadline is a guideline, not a rule",
      "Protocol violation requiring IRB notification"
    ],
    "correct": 1,
    "explanation": "A 4-hour submission delay that does not compromise data integrity or affect primary outcomes is a minor deviation. Document it in the Protocol Deviation Log and report at the next scheduled review. Minor deviations do not require individual IRB notification — they are compiled and submitted in progress reports. Three or more minor deviations of the same type in one month trigger escalation to the PI of Record."
  },
  {
    "id": 48,
    "domain": "Protocol Deviations",
    "marks": 2,
    "question": "What is the verbal reporting deadline after discovering any protocol deviation?",
    "options": [
      "6 hours",
      "12 hours",
      "24 hours",
      "48 hours"
    ],
    "correct": 2,
    "explanation": "Any RA who discovers or causes a deviation must report it verbally to the Lead Researcher within 24 hours of discovery. A written Protocol Deviation Report Form must follow within 48 hours. For major deviations, the Lead Researcher must notify the PI of Record within 24 hours of classification."
  },
  {
    "id": 49,
    "domain": "Protocol Deviations",
    "marks": 2,
    "question": "Three minor deviations of the same type occur in the same month — for example, three CRFs submitted late in the same 30-day period. What happens?",
    "options": [
      "Nothing additional — three minor deviations remain minor",
      "The three incidents are reclassified collectively as one major deviation",
      "The pattern is escalated to the PI of Record for review, regardless of individual classification",
      "The RA is automatically suspended from data collection"
    ],
    "correct": 2,
    "explanation": "Three or more minor deviations of the same type within a single month trigger escalation to the PI of Record for review — regardless of the individual classification of each incident. This is the escalation rule. The individual deviations remain classified as minor, but the pattern requires PI-level attention."
  },
  {
    "id": 50,
    "domain": "Protocol Deviations",
    "marks": 2,
    "question": "Which of the following is a MAJOR deviation requiring immediate verbal notification to the Lead Researcher within 24 hours?",
    "options": [
      "Submitting a CRF 50 hours after completion instead of within 48 hours",
      "Failing to apply a missing data code to one non-critical field",
      "Enrolling a patient who is later found to have had their stroke while already admitted for another condition",
      "Forgetting to log one excluded patient in the screening log"
    ],
    "correct": 2,
    "explanation": "Enrolling an in-hospital stroke patient is a major deviation — it violates an explicit exclusion criterion. In-hospital strokes are excluded from both cohorts. This compromises data integrity and requires verbal notification within 24 hours and written report within 48 hours. The other options are all minor deviations: late submission, missing non-critical code, and screening log omission do not affect data integrity or participant rights."
  }
];

export default questionBank;
