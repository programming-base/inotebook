export const fetchSecureNotes = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL || "http://localhost:3000"}/notes/secure`, {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
