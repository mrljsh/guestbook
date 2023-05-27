const BASE_URL = "http://localhost:8000";

async function getMessages() {
  const response = await fetch(`${BASE_URL}/messages`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch messages");
  }

  return response.json();
}

async function sendMessage(name, message) {
  const response = await fetch(`${BASE_URL}/send`, {
    method: "POST",
    body: JSON.stringify({
      name: name,
      message: message,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return response.json();
}

export { getMessages, sendMessage };
