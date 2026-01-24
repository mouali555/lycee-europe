// js/core/config.js
// Tout ce qui est "paramètres" est ici (et plus éparpillé partout).

export const CONFIG = {
  SPACE_ID: "europe",
  SPACE_LABEL: "EUROPE_SPACE",
  ROOM_ID: "general",
  ROOM_LABEL: "general",

  // Firebase Functions v2 (HTTP)
  // Format: https://<region>-<project>.cloudfunctions.net/<functionName>
  AI_ENDPOINT: "https://us-central1-lycee-europe-private.cloudfunctions.net/aiReply",
  DELETE_ENDPOINT:
    "https://us-central1-lycee-europe-private.cloudfunctions.net/deleteMessage",

  UNLOCK_ENDPOINT:
    "https://us-central1-lycee-europe-private.cloudfunctions.net/unlockAccess",

  CONTACT_ENDPOINT:
    "https://us-central1-lycee-europe-private.cloudfunctions.net/contactSubmit",

  // UX
  MAX_MESSAGE_LEN: 800,
  SEND_COOLDOWN_MS: 2500,
  AI_TIMEOUT_MS: 20000,
};
