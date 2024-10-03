import {mtm6407, colors, points} from './data.js';

// Done declaratively

// 1
// Loop through each student and provide in a new variable (array):
// - First Name
// - Last Name
// - Letter grade + (Number grade) e.g. A+ (100%)

const studentGrades = mtm6407.map((student) => {
	return `${student.firstName} ${student.lastName} ${student.gradeLetter} (${student.gradeNumber})`
});

console.log(studentGrades);

// 2
// Go through each color and return the color that is 'red'

const redColor = colors.filter((color => color === 'red'));

console.log(redColor);

// 3
// Create a compass variable (object):
// - North - "N"
// - South - "S"
// - East - "E"
// - West - "W"

const compass = {
	North: "N",
	South: "S",
	East: "E",
	West: "W"
};

// add this compass to an html object and return this to the body and make it look like a compass

const compassTemplate = document.querySelector('.compass');
const htmlCompass = `
  <div class="compass-container">
    <div class="direction north">${compass.North}</div>
    <div class="direction east">${compass.East}</div>
    <div class="direction south">${compass.South}</div>
    <div class="direction west">${compass.West}</div>
  </div>
`;

compassTemplate.innerHTML = htmlCompass;








// Send github repo link to email: rodneyl@algonquincollege.com by 9PM