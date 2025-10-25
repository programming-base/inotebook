export const fetchMyNotes = async () => {
  const response = await fetch("http://localhost:3000/notes/mynotes", {
    method: "GET",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  const notes = data;
  if (!Array.isArray(notes)) {
    console.error("Unexpected response format:", notes);
    return [];
  }
  console.log(data);
  return notes;
};