const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

// For each permission specify "*" (the default) to allow any origin,
// or specify an array of origins (strings) to allow.
const permissions = {
  microphone: ["self", "http://localhost:7071"],
  accelerometer: [],
  "ambient-light-sensor": [],
  "background-fetch": [],
  "background-sync": [],
  bluetooth: [],
  camera: [],
  "display-capture": [],
  geolocation: [],
  gyroscope: [],
  magnetometer: [],
  midi: [],
  nfc: [],
  notifications: [],
  "persistent-storage": [],
  push: [],
  "screen-wake-lock": [],
  "speaker-selection": [],
  "xr-spatial-tracking": [],
};

function makePermissionsHeader() {
  const policies = Object.entries(permissions).map(([api, origins]) => {
    if (!Array.isArray(origins) && origins !== "*")
      throw new Error(
        'The origins for an API should be "*" or an array of strings'
      );
    let allowedOrigins;
    if (origins === "*") allowedOrigins = origins;
    else {
      allowedOrigins = origins
        .map((origin) => (origin === "self" ? origin : `"${origin}"`))
        .join(" ");
      allowedOrigins = `(${allowedOrigins})`;
    }
    return ` ${api}=${allowedOrigins}`;
  });
  return policies.join(",");
}

app.get("/", (req, res) => {
  const permissionsPolicy = makePermissionsHeader();
  console.log("Current Permissions-Policy:", permissionsPolicy);
  res.sendFile(path.join(__dirname, "index.html"), {
    headers: {
      // Use unsafe-inline to allow applying the styles from the <style> tag.
      // It is unsafe to allow applying inline-styles as an attacker could
      // easily fool a user positioning a malicious button where a normal one
      // is expected.
      "Content-Security-Policy":
        "default-src 'self'; frame-src 'self' http://localhost:7071; style-src 'unsafe-inline'",
      "Permissions-Policy": 'microphone=(self "http://localhost:7071")',
    },
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
