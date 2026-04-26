window.rolePageRoutes = {
  student: {
    dashboard: "student-dashboard.html",
    submit: "student-submission.html",
    submissions: "student-dashboard.html"
  },
  teacher: {
    dashboard: "teacher-dashboard.html",
    verification: "teacher-verification.html"
  },
  evaluator: {
    dashboard: "evaluation-dashboard.html",
    evaluation: "evaluation.html"
  },
  admin: {
    dashboard: "admin-dashboard.html",
    criteria: "criteria-management.html"
  },
  hod: {
    dashboard: "hod-dashboard.html",
    reports: "reports.html"
  }
};

window.applyPageConfig = function applyPageConfig(config) {
  const safeConfig = config && typeof config === "object" ? config : {};

  window.appPageConfig = {
    rolePageRoutes: window.rolePageRoutes,
    logoutRedirect: "index.html",
    ...safeConfig
  };
};
