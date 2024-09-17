const fs = require('fs');

/**
 * Function to get student count
*/
const countStudents = (path) => {
	if (!fs.existsSync(path)) {
		throw new Error('Cannot load the database');
	}

	let stds = {}

	const fileLines = fs
	.readFileSync(path, 'utf-8')
	.trim()
	.split('\n')

	const students = fileLines.map(line => line.split(',')).slice(1);

	students.forEach((student) => {
		const field = student[3];

		if (stds[field]) stds[field].push(student[0]);
		else stds[field] = [student[0]];
	})
	const total = Object.values(stds).reduce((t, field) => t + field.length, 0)
	console.log("Number of students:", total);

	Object.entries(stds).forEach(entry => console.log(`Number of students in ${entry[0]}: ${entry[1].length}. List: ${entry[1].join(', ')}`))
}

module.exports = countStudents;
