import { APP_CONFIG } from "../data/config";

function SetupForm({ setup, setSetup, onContinue }) {
  const isValid =
    setup.raName.trim() !== "" &&
    setup.site.trim() !== "" &&
    setup.date.trim() !== "";

  return (
    <div className="card">
      <h2>Setup</h2>

      <label>
        RA Name
        <input
          type="text"
          value={setup.raName}
          onChange={(e) =>
            setSetup((prev) => ({ ...prev, raName: e.target.value }))
          }
        />
      </label>

      <label>
        Site
        <select
          value={setup.site}
          onChange={(e) =>
            setSetup((prev) => ({ ...prev, site: e.target.value }))
          }
        >
          {APP_CONFIG.sites.map((site) => (
            <option key={site} value={site}>
              {site}
            </option>
          ))}
        </select>
      </label>

      <label>
        Date
        <input
          type="date"
          value={setup.date}
          onChange={(e) =>
            setSetup((prev) => ({ ...prev, date: e.target.value }))
          }
        />
      </label>

      <button onClick={onContinue} disabled={!isValid}>
        Continue to Study Guide
      </button>
    </div>
  );
}

export default SetupForm;