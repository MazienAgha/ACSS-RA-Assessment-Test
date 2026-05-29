import { APP_CONFIG } from "../data/config";

function AppBanner() {
  return (
    <div className="app-banner">
      <p className="institution">{APP_CONFIG.institution}</p>
      <h1>{APP_CONFIG.appTitle}</h1>
      <p className="study-name">{APP_CONFIG.studyName}</p>
      <p className="lead-researcher">
        Lead Researcher: {APP_CONFIG.leadResearcher}
      </p>
    </div>
  );
}

export default AppBanner;