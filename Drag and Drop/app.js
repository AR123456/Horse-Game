// https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_ondrag_all
const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  //   console.log("drag start");
  this.className += " hold";
  // using time out to make it run after hold vs at the same time
  setTimeout(() => ((this.className = "invisible"), 0));
}

function dragEnd() {
  //   console.log("drag end");
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.className += " hovered";
}

function dragLeave() {
  this.className = "empty";
}

function dragDrop() {
  //   console.log("drag Drop");
  this.className = "empty";
  this.append(fill);
}
