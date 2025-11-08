import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles

export default function Compose() {
  const [content, setContent] = useState("");

  // Configuration for the toolbar
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  // Explicit formats supported by the editor (keeps ReactQuill from warning)
  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

  const saveNote = () => {
    // The 'content' state now holds the sanitized HTML content from the editor
    console.log("HTML Content:", content);
    // Here you would typically make an API call to save the note
  };
  return (
    <div className="p-4">
      <ReactQuill
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        className="bg-white"
        placeholder="Write here..."
      />

      <button
        onClick={saveNote}
        className="absolute bottom-5 right-5 mt-3 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Save Note
      </button>
    </div>
  );
}
