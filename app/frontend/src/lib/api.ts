import { createClient } from "@metagptx/web-sdk";
import { getAPIBaseURL } from "@/lib/config";

export const client = createClient();

export type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export type JoinPayload = {
  firstName: string;
  lastName: string;
  age: string;
  cin: string;
  massarCode: string;
  studyLevel: string;
  city: string;
  address: string;
  interests: string;
  phone: string;
  email: string;
  motivation: string;
};

type ApiSuccess = {
  message: string;
  fileName?: string;
};

export class ApiError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.name = "ApiError";
    this.status = status;
  }
}

async function readResponse(response: Response) {
  const contentType = response.headers.get("content-type") ?? "";
  if (contentType.includes("application/json")) {
    return response.json();
  }

  return null;
}

async function postJSON<TPayload extends object>(
  path: string,
  payload: TPayload
): Promise<ApiSuccess> {
  const baseURL = getAPIBaseURL();
  let response: Response;

  try {
    response = await fetch(`${baseURL}${path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
  } catch {
    throw new ApiError(
      "Cannot reach the email service. Start the app with `npm run dev` or run `npm run server` in app/frontend.",
      0
    );
  }

  const data = await readResponse(response);

  if (!response.ok) {
    const message =
      data && typeof data === "object" && "message" in data
        ? String(data.message)
        : "Something went wrong while sending your request.";

    throw new ApiError(message, response.status);
  }

  if (!data || typeof data !== "object" || !("message" in data)) {
    return { message: "Request sent successfully." };
  }

  return data as ApiSuccess;
}

export function submitContactMessage(payload: ContactPayload) {
  return postJSON("/api/contact", payload);
}

export function submitJoinApplication(payload: JoinPayload) {
  return postJSON("/api/join", payload);
}
