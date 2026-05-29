export function calculateScore(answers, questionBank) {
  let total = 0;

  questionBank.forEach((question) => {
    if (answers[question.id] === question.correct) {
      total += question.marks;
    }
  });

  return total;
}

export function calculatePercentage(score, totalMarks) {
  return Math.round((score / totalMarks) * 100);
}

export function getPassStatus(score, passScore) {
  return score >= passScore;
}

export function getCriticalFlags(answers, questionBank) {
  return questionBank
    .filter(
      (question) =>
        question.criticalFlag && answers[question.id] !== question.correct
    )
    .map((question) => ({
      id: question.id,
      domain: question.domain,
      text: question.text,
      message:
        question.criticalFlagMessage || "Critical protocol risk identified.",
    }));
}

export function getDomainBreakdown(answers, questionBank) {
  const domainMap = {};

  questionBank.forEach((question) => {
    if (!domainMap[question.domain]) {
      domainMap[question.domain] = {
        domain: question.domain,
        earned: 0,
        possible: 0,
      };
    }

    domainMap[question.domain].possible += question.marks;

    if (answers[question.id] === question.correct) {
      domainMap[question.domain].earned += question.marks;
    }
  });

  return Object.values(domainMap).map((domain) => ({
    ...domain,
    percentage:
      domain.possible > 0
        ? Math.round((domain.earned / domain.possible) * 100)
        : 0,
  }));
}

export function groupQuestionsByDomain(questionBank) {
  const grouped = {};

  questionBank.forEach((question) => {
    if (!grouped[question.domain]) {
      grouped[question.domain] = [];
    }
    grouped[question.domain].push(question);
  });

  return Object.entries(grouped).map(([title, questions]) => ({
    title,
    questions,
  }));
}