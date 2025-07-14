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
} from "lucide-react";
const icons = [
  // Common formatting icons
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
export default function Compose() {
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
        <div className="h-[calc(100%-3.5rem)] w-full ">
          <div className="w-full h-full border-[1px] border-t-0  border-blue-700">
            <textarea
              type="text"
              id="note"
              name="notefeild"
              placeholder="Write something here..."
              className="resize-none h-full bg-white w-full px-2 outline-0 caret- text-black"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
