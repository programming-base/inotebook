
import React from "react";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  List,
  Quote,
  Undo,
  Redo,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Heading1,
  Heading2,
} from "lucide-react";
const icons = [
  { Icon: Heading1, label: "Heading 1" },
  { Icon: Heading2, label: "Heading 2" },
  { Icon: Bold, label: "Bold" },
  { Icon: Italic, label: "Italic" },
  { Icon: Underline, label: "Underline" },
  { Icon: Strikethrough, label: "Strikethrough" },
  { Icon: Quote, label: "Quote" },
  { Icon: List, label: "List" },
  { Icon: AlignLeft, label: "Align Left" },
  { Icon: AlignCenter, label: "Align Center" },
  { Icon: AlignRight, label: "Align Right" },
  { Icon: Undo, label: "Undo" },
  { Icon: Redo, label: "Redo" },
];
import { useState } from "react";
export default function Compose() {
  const [Words, setWords] = useState("");
  let wordLength = Words.trim() === "" ? 0 : Words.trim().split(/\s+/).length;
  return (
    <>
      <div className="w-[99.7%] h-full ">
        <div className="w-[100%] contain-content border border-t-4 border-blue-800 rounded-t-md sticky">
          <div className="bg-white text-black w-full h-full py-2 px-2">
            <div className="flex items-center gap-2 flex-wrap">
              {icons.map(({ Icon, label }, i) => (
                <button
                  key={i}
                  title={label}
                  className="p-2 rounded-lg hover:bg-blue-100 transition-transform duration-150 active:scale-95"
                >
                  <Icon className="text-gray-700" size={18} strokeWidth={2.5} />
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="h-[calc(100%-6.5rem)] w-full ">
          <div className="w-full h-full border-[1px] border-t-0 border-b-0 border-blue-700">
            <textarea
              type="text"
              id="note"
              name="notefeild"
              value={Words}
              onChange={(e) => setWords(e.target.value)}
              placeholder="Write something here..."
              className="resize-none h-full bg-white w-full px-2 outline-0 caret- text-black"
            ></textarea>
            {/* {Words.trim()===''?console.log("Text area is empty"):console.log(Words)} */}
          </div>
        </div>
        <div className="w-full h-[3rem] sticky bottom-0 left-0 shadow-black  border border-blue-600 text-[.8rem]" style={{boxShadow:'-3px 0 2px 3px rgba(0,0,0,.2)'}}>
          <div className="mx-2 h-full flex items-center justify-between contain-content">
            <div className="flex items-center">
              <div className="mx-2">
                {" "}
                {wordLength}{" "}
                words, {Words.replace(/[^a-zA-Z]/g, "").length} letters
              </div>
              <div> {Words.split("\n").length} line </div>
            </div>
            <div>
              {(wordLength / 183).toFixed(3)} reading time(min),{wordLength/160}{" "}Speaking time(min)
            </div>
            <div>
              {(
                Words.replace(/[^a-zA-Z]/g, "").length /
                Words.trim().split(/\s+/).length
              ).toFixed(3)}{" "}
              average word length
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
