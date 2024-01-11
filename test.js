/*let day = "Monday";

switch (day) {
  case "Monday":
    console.log("It's the start of the week!");
    break;

  case "Friday":
    console.log("Weekend is almost here!");
    break;

  case "Saturday":
  case "Sunday":
    console.log("It's the weekend!");
    break;

  default:
    console.log("It's a regular weekday.");
}*/

function convertGradeToNumber(grade) {
  switch (grade.toUpperCase()) {
    case 'A':
      return 5;
    case 'B':
      return 4;
    case 'C':
      return 3;
    case 'D':
      return 2;
    default:
      console.log('Invalid grade');
      return null;
  }
}

// Example usage:
const gradeA = 'A';
const gradeB = 'B';
const gradeC = 'C';
const gradeD = 'D';
const invalidGrade = 'F';

console.log(`${gradeA} is converted to ${convertGradeToNumber(gradeA)}`);
console.log(`${gradeB} is converted to ${convertGradeToNumber(gradeB)}`);
console.log(`${gradeC} is converted to ${convertGradeToNumber(gradeC)}`);
console.log(`${gradeD} is converted to ${convertGradeToNumber(gradeD)}`);
console.log(`${invalidGrade} is converted to ${convertGradeToNumber(invalidGrade)}`);