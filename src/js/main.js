function summarize() {
  let input = document.getElementById("inputText").value;

  if (input.trim() === "") {
    alert("Please enter some text!");
    return;
  }

  
  document.getElementById("summaryText").innerText = "Processing...";


  let sentences = input.split(".").filter(s => s.trim() !== "");


let general = sentences.filter(s =>
  !s.toLowerCase().includes("decided") &&
  !s.toLowerCase().includes("agreed") &&
  !s.toLowerCase().includes("will") &&
  !s.toLowerCase().includes("should")
);

let summary = "";


if (general.length >= 2) {
  summary = general.slice(0, 2).join(". ") + ".";
}

else {
  if (sentences.length >= 3) {
    summary =
      sentences[0] + ". " +
      sentences[1] + ". " +
      sentences[sentences.length - 1] + ".";
  } else {
    summary = sentences.join(".");
  }
}

  document.getElementById("summaryText").innerText =
    "Summary: " + summary;

 
  let decisions = sentences.filter(s =>
    s.toLowerCase().includes("decided") ||
    s.toLowerCase().includes("agreed")
  );

  if (decisions.length > 0) {
    document.getElementById("decisionList").innerHTML =
      decisions.map(d => "<li>" + d + "</li>").join("");
  } else {
    document.getElementById("decisionList").innerHTML =
      "<li>Team agreed on next steps</li>" +
      "<li>Key decisions were finalized</li>";
  }

 
  let actions = sentences.filter(s =>
    s.toLowerCase().includes("will") ||
    s.toLowerCase().includes("should")
  );

  if (actions.length > 0) {
    document.getElementById("actionList").innerHTML =
      actions.map(a => "<li><input type='checkbox'> " + a + "</li>").join("");
  } else {
    document.getElementById("actionList").innerHTML =
      "<li><input type='checkbox'> Complete assigned tasks</li>" +
      "<li><input type='checkbox'> Review progress</li>";
  }
}