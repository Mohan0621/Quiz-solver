// batch-solver.js — Minimal shim
// The batch solve loop now runs entirely in popup.js using the same
// EXTRACT_QUIZ → AI → APPLY_ANSWERS → SUBMIT_QUIZ flow as "Solve This Quiz".
// This file only sets/clears the sessionStorage flag that content.js reads
// to block GradesAutopilotEngine from stealing navigation.
(function () {
  'use strict';
  if (!window.location.hostname.includes('coursera.org')) return;
  // Flag is set by popup.js via navigateTabAndWait — nothing to do on load.
})();
