import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles

export default function Compose() {
  const [content, setContent] = useState("");
  useEffect(()=>{
    const editor = document.getElementById("editor").children[1];
    if(!editor) return;
    const existingTitle = document.getElementById("title-input");
    if (existingTitle) existingTitle.remove();
    const titleELement = document.createElement("input");    
    titleELement.id="title-input";
    titleELement.value="";
    titleELement.placeholder="Title";
    titleELement.required=true;
    editor.prepend(titleELement);
    //style 
    const style=document.createElement("style");
    style.innerHTML=`
      #title-input {
        width: 100%;
        padding: 10px;
        font-size:2em;
        border: none;
        outline: none;
    }
      input::placeholder {
        color: #9ca3af; /* Tailwind's gray-400 */
        font-style: italic;
      }
    `;
    document.head.appendChild(style);
  },[])
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
    if(!content) return;
    const editor = document.getElementById("editor").children[1];
    const titleELement = document.getElementById("title-input");
    if(!editor || !titleELement) return;
    const title=titleELement.value;
    const description=content;
    console.log("Title:", title);
    console.log("Description:", description);
    // The 'content' state now holds the sanitized HTML content from the editor
  try{
    const tag="General";
    fetch("http://localhost:3000/notes/addnote",{
      method:"POST",
      credentials:"include",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({title,description,tag})
    });
  }catch(err){
    console.error("Error saving note:", err);
  }
    // Here you would typically make an API call to save the note
  };
  return (
    <div className="p-4">
      <ReactQuill id="editor"
        theme="snow"
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        className="bg-white"
        placeholder="Write here..."
      /> 
      {
        console.log(content)
      }
      <button
        onClick={saveNote}
        className="absolute bottom-5 right-5 mt-3 bg-blue-500 text-white px-4 py-2 rounded-md"
      >
        Save Note
      </button>
    </div>
  );
}
