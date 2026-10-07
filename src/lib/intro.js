// Intro overlay session gate — runs once per browser session, skipped for
// reduced-motion users. No sounds are added or changed here.

const KEY = "cerix_intro_done";
export const INTRO_DONE_EVENT = "cerix:intro-done";

export function introShouldRun() {
  if (typeof window === "undefined") return false;
  try {
    if (sessionStorage.getItem(KEY)) return false;
  } catch (e) {
    return false;
  }
  if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return false;
  }
  return true;
}

export function markIntroDone() {
  try {
    sessionStorage.setItem(KEY, "1");
  } catch (e) {
    /* ignore */
  }
}

export function notifyIntroDone() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(INTRO_DONE_EVENT));
  }
}