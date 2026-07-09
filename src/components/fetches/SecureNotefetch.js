export const fetchSecureNotes = async () => {
  const response = await fetch("http://localhost:3000/notes/secure", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};
