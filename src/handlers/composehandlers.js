import { Heading1 } from "lucide-react";

export const h1style = (label) => {
  const buttonid = label.split(" ").join("-");
  if (buttonid === "Heading-1") {
    document.getElementById(buttonid).addEventListener("click", (event) => {
      event.preventDefault();
      const textarea = document.getElementById("note");
      const selectedtext = textarea.value.substring(
        textarea.selectionStart,
        textarea.selectionEnd
      );
      if(selectedtext){
        console.log("Selected text:", selectedtext);
        textarea.value.replace(selectedtext,);
      }
    });
  }
};