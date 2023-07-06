//Challenge 1: Student Grade Generator (Toy Problem)

// Prompt the user to input student marks
let marks = prompt("Enter Student marks:");
//variable to the grades.
let grade;

//use if , else if and else to determine marks.
if (marks >= 80 && marks <= 100) {
  grade = "A";
} else if (marks >= 60 && marks <= 79) {
  grade = "B";
} else if (marks >= 50 && marks <= 59) {
  grade = "C";
} else if (marks >= 40 && marks <= 49) {
  grade = "D";
} else if (marks < 40 && marks >= 0) {
  grade = "E";
} else {
  console.log("Invalid input. Please enter a number between 0 and 100.");
}
// if grade is determined , display it on the page
if (grade) {
  let gradeElement = document.getElementById("grade");
  gradeElement.textContent = `The student's grade is = ${grade}.`;

}
