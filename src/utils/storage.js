const STORAGE_KEY = "acss_ra_portal_state";

export function saveProgressToStorage(state) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function loadProgressFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw ? JSON.parse(raw) : null;
}

export function clearProgress() {
  localStorage.removeItem(STORAGE_KEY);
}