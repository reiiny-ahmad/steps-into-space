import http from "node:http";
import { Buffer } from "node:buffer";
import { config as loadEnv } from "dotenv";
import nodemailer from "nodemailer";

loadEnv();

const PORT = Number.parseInt(process.env.PORT ?? "8000", 10);
const EMAIL_TO = process.env.EMAIL_TO ?? "jabryahmed2002@gmail.com";
const GMAIL_USER = process.env.GMAIL_USER ?? EMAIL_TO;
const GMAIL_APP_PASSWORD = process.env.GMAIL_APP_PASSWORD ?? "";
const PUBLIC_API_BASE_URL = process.env.PUBLIC_API_BASE_URL ?? "/";

function setHeaders(response) {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  response.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

function sendJSON(response, statusCode, payload) {
  setHeaders(response);
  response.writeHead(statusCode, { "Content-Type": "application/json" });
  response.end(JSON.stringify(payload));
}

function sanitizeFilePart(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

async function readJSONBody(request) {
  const chunks = [];

  for await (const chunk of request) {
    chunks.push(chunk);
  }

  if (chunks.length === 0) {
    return {};
  }

  const rawBody = Buffer.concat(chunks).toString("utf8");
  return JSON.parse(rawBody);
}

function validateContactPayload(payload) {
  const requiredFields = ["name", "email", "subject", "message"];

  for (const field of requiredFields) {
    if (!String(payload[field] ?? "").trim()) {
      throw new Error(`Missing required field: ${field}`);
    }
  }
}

function validateJoinPayload(payload) {
  const requiredFields = [
    "firstName",
    "lastName",
    "age",
    "studyLevel",
    "city",
    "address",
    "interests",
  ];

  for (const field of requiredFields) {
    if (!String(payload[field] ?? "").trim()) {
      throw new Error(`Missing required field: ${field}`);
    }
  }

  if (
    !String(payload.cin ?? "").trim() &&
    !String(payload.massarCode ?? "").trim()
  ) {
    throw new Error("Provide either a CIN or a Massar code.");
  }
}

function createTransporter() {
  if (!GMAIL_APP_PASSWORD) {
    throw new Error(
      "Missing GMAIL_APP_PASSWORD. Add it to app/frontend/.env before sending emails."
    );
  }

  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_APP_PASSWORD,
    },
  });
}

function buildJoinAttachment(payload) {
  const lines = [
    "Steps Into Space Association - Join Application",
    `Generated at: ${new Date().toISOString()}`,
    "",
    `Nom: ${payload.lastName}`,
    `Prenom: ${payload.firstName}`,
    `Age: ${payload.age}`,
    `CIN: ${payload.cin || "Not provided"}`,
    `Code Massar: ${payload.massarCode || "Not provided"}`,
    `Niveau d'etude: ${payload.studyLevel}`,
    `Ville: ${payload.city}`,
    `Adresse: ${payload.address}`,
    `Telephone: ${payload.phone || "Not provided"}`,
    `Email: ${payload.email || "Not provided"}`,
    "",
    "Interets:",
    payload.interests,
    "",
    "Motivation / Informations supplementaires:",
    payload.motivation || "Not provided",
  ];

  return lines.join("\n");
}

async function sendContactEmail(payload) {
  const transporter = createTransporter();

  await transporter.sendMail({
    from: `"Steps Into Space Website" <${GMAIL_USER}>`,
    to: EMAIL_TO,
    replyTo: payload.email,
    subject: `[Contact] ${payload.subject}`,
    text: [
      "New contact message from the website.",
      "",
      `Name: ${payload.name}`,
      `Email: ${payload.email}`,
      `Subject: ${payload.subject}`,
      "",
      "Message:",
      payload.message,
    ].join("\n"),
  });
}

async function sendJoinEmail(payload) {
  const transporter = createTransporter();
  const safeName =
    sanitizeFilePart(`${payload.firstName}-${payload.lastName}`) || "candidate";
  const fileName = `steps-into-space-registration-${safeName}.txt`;
  const fileContent = buildJoinAttachment(payload);

  await transporter.sendMail({
    from: `"Steps Into Space Website" <${GMAIL_USER}>`,
    to: EMAIL_TO,
    replyTo: payload.email || undefined,
    subject: `[Join Us] ${payload.firstName} ${payload.lastName}`,
    text: [
      "A new registration was submitted from the Join Us form.",
      "",
      `Name: ${payload.firstName} ${payload.lastName}`,
      `Age: ${payload.age}`,
      `Study level: ${payload.studyLevel}`,
      `City: ${payload.city}`,
      `CIN: ${payload.cin || "Not provided"}`,
      `Massar code: ${payload.massarCode || "Not provided"}`,
    ].join("\n"),
    attachments: [
      {
        filename: fileName,
        content: fileContent,
      },
    ],
  });

  return fileName;
}

const server = http.createServer(async (request, response) => {
  if (!request.url) {
    sendJSON(response, 400, { message: "Invalid request URL." });
    return;
  }

  if (request.method === "OPTIONS") {
    setHeaders(response);
    response.writeHead(204);
    response.end();
    return;
  }

  try {
    if (request.method === "GET" && request.url === "/api/config") {
      sendJSON(response, 200, { API_BASE_URL: PUBLIC_API_BASE_URL });
      return;
    }

    if (request.method === "POST" && request.url === "/api/contact") {
      const payload = await readJSONBody(request);
      validateContactPayload(payload);
      await sendContactEmail(payload);
      sendJSON(response, 200, { message: "Contact message sent successfully." });
      return;
    }

    if (request.method === "POST" && request.url === "/api/join") {
      const payload = await readJSONBody(request);
      validateJoinPayload(payload);
      const fileName = await sendJoinEmail(payload);
      sendJSON(response, 200, {
        message: "Registration sent successfully.",
        fileName,
      });
      return;
    }

    sendJSON(response, 404, { message: "Route not found." });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unexpected server error.";
    sendJSON(response, 400, { message });
  }
});

server.listen(PORT, () => {
  console.log(`Steps Into Space email API listening on http://127.0.0.1:${PORT}`);
});
