import { useEffect, useMemo, useState } from "react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { APP_CONFIG } from "./data/config";
import { studyGuideContent as studyGuideSections } from "./data/studyGuideContent";
import { questionBank } from "./data/questionBank";
import {
  calculateScore,
  calculatePercentage,
  getPassStatus,
  getCriticalFlags,
  getDomainBreakdown,
  groupQuestionsByDomain,
} from "./utils/scoring";
import {
  saveProgressToStorage,
  loadProgressFromStorage,
  clearProgress,
} from "./utils/storage";

import AppBanner from "./components/AppBanner";
import SetupForm from "./components/SetupForm";
import StudyGuide from "./components/StudyGuide";
import QuizSection from "./components/QuizSection";
import ResultsPanel from "./components/ResultsPanel";
import ReviewPanel from "./components/ReviewPanel";
import Certificate from "./components/Certificate";

const groupedSections = groupQuestionsByDomain(questionBank);

const initialState = {
  step: "setup",
  setup: {
    raName: "",
    site: APP_CONFIG.defaultSite,
    date: "",
  },
  hasConfirmedReading: false,
  answers: {},
  currentSection: 0,
  submitted: false,
  reviewVisible: false,
  attemptNumber: 1,
};

function App() {
  const [step, setStep] = useState(initialState.step);
  const [setup, setSetup] = useState(initialState.setup);
  const [hasConfirmedReading, setHasConfirmedReading] = useState(
    initialState.hasConfirmedReading
  );
  const [answers, setAnswers] = useState(initialState.answers);
  const [currentSection, setCurrentSection] = useState(initialState.currentSection);
  const [submitted, setSubmitted] = useState(initialState.submitted);
  const [reviewVisible, setReviewVisible] = useState(initialState.reviewVisible);
  const [attemptNumber, setAttemptNumber] = useState(initialState.attemptNumber);

  useEffect(() => {
    const saved = loadProgressFromStorage();
    if (saved) {
      setStep(saved.step ?? initialState.step);
      setSetup(saved.setup ?? initialState.setup);
      setHasConfirmedReading(
        saved.hasConfirmedReading ?? initialState.hasConfirmedReading
      );
      setAnswers(saved.answers ?? initialState.answers);
      setCurrentSection(saved.currentSection ?? initialState.currentSection);
      setSubmitted(saved.submitted ?? initialState.submitted);
      setReviewVisible(saved.reviewVisible ?? initialState.reviewVisible);
      setAttemptNumber(saved.attemptNumber ?? initialState.attemptNumber);
    }
  }, []);

  useEffect(() => {
    saveProgressToStorage({
      step,
      setup,
      hasConfirmedReading,
      answers,
      currentSection,
      submitted,
      reviewVisible,
      attemptNumber,
    });
  }, [
    step,
    setup,
    hasConfirmedReading,
    answers,
    currentSection,
    submitted,
    reviewVisible,
    attemptNumber,
  ]);

  const score = useMemo(
    () => calculateScore(answers, questionBank),
    [answers]
  );

  const percentage = useMemo(
    () => calculatePercentage(score, APP_CONFIG.totalMarks),
    [score]
  );

  const passed = useMemo(
    () => getPassStatus(score, APP_CONFIG.passScore),
    [score]
  );

  const criticalFlags = useMemo(
    () => getCriticalFlags(answers, questionBank),
    [answers]
  );

  const domainBreakdown = useMemo(
    () => getDomainBreakdown(answers, questionBank),
    [answers]
  );

  const handleSetupContinue = () => {
    setStep("guide");
  };

  const handleGuideProceed = () => {
    setStep("quiz");
  };

  const handleAnswerChange = (questionId, selectedIndex) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: selectedIndex,
    }));
  };

  const handleNextSection = () => {
    if (currentSection < groupedSections.length - 1) {
      setCurrentSection((prev) => prev + 1);
    }
  };

  const handlePreviousSection = () => {
    if (currentSection > 0) {
      setCurrentSection((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setStep("results");
  };

  const handleRevealReview = () => {
    setReviewVisible(true);
  };

  const handlePrintCertificate = () => {
    window.print();
  };

  const handleNewAttempt = () => {
    setAnswers({});
    setCurrentSection(0);
    setSubmitted(false);
    setReviewVisible(false);
    setStep("quiz");
    setAttemptNumber((prev) => prev + 1);
  };

  const handleResetAll = () => {
    clearProgress();
    setStep(initialState.step);
    setSetup(initialState.setup);
    setHasConfirmedReading(initialState.hasConfirmedReading);
    setAnswers(initialState.answers);
    setCurrentSection(initialState.currentSection);
    setSubmitted(initialState.submitted);
    setReviewVisible(initialState.reviewVisible);
    setAttemptNumber(initialState.attemptNumber);
  };

  const currentQuizSection = groupedSections[currentSection];

  return (
    <div className="app-shell">
      <AppBanner />

      <main className="app-main">
        {step === "setup" && (
          <SetupForm
            setup={setup}
            setSetup={setSetup}
            onContinue={handleSetupContinue}
          />
        )}

        {step === "guide" && (
          <StudyGuide
            sections={studyGuideSections}
            hasConfirmedReading={hasConfirmedReading}
            setHasConfirmedReading={setHasConfirmedReading}
            onProceed={handleGuideProceed}
          />
        )}

        {step === "quiz" && currentQuizSection && (
          <QuizSection
            sectionTitle={currentQuizSection.title}
            questions={currentQuizSection.questions}
            answers={answers}
            onAnswerChange={handleAnswerChange}
            currentSection={currentSection}
            totalSections={groupedSections.length}
            onPrevious={handlePreviousSection}
            onNext={handleNextSection}
            onSubmit={handleSubmit}
          />
        )}

        {step === "results" && (
          <>
            <ResultsPanel
              score={score}
              percentage={percentage}
              passed={passed}
              domainBreakdown={domainBreakdown}
              criticalFlags={criticalFlags}
              onRevealReview={handleRevealReview}
              onPrintCertificate={handlePrintCertificate}
              onNewAttempt={handleNewAttempt}
              onResetAll={handleResetAll}
            />

            {reviewVisible && (
              <ReviewPanel questionBank={questionBank} answers={answers} />
            )}

            <Certificate
              setup={setup}
              score={score}
              percentage={percentage}
              passed={passed}
              attemptNumber={attemptNumber}
            />
          </>
        )}
      </main>

      <SpeedInsights />
    </div>
  );
}

export default App;