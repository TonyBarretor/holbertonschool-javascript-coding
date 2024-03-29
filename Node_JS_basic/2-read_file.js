const fs = require('fs');

function countStudents(filePath) {
  if (fs.existsSync(filePath)) {
    const data = fs.readFileSync(filePath, 'utf-8');
    const lines = data.split('\n').filter((line) => line.length > 0);
    const students = lines.slice(1).map((line) => line.split(','));
    const totalStudents = students.length;

    const fieldCounts = students.reduce((acc, student) => {
      const field = student[3];
      acc[field] = (acc[field] || 0) + 1;
      return acc;
    }, {});

    const formattedFieldLists = Object.entries(fieldCounts).map(([field, count]) => {
      const studentNames = students
        .filter((student) => student[3] === field)
        .map((student) => student[0]);

      return `Number of students in ${field}: ${count}. List: ${studentNames.join(', ')}`;
    });

    console.log(`Number of students: ${totalStudents}`);
    formattedFieldLists.forEach((message) => console.log(message));
  } else {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
