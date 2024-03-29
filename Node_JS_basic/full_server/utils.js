import fs from 'fs/promises'; // Use fs/promises for direct Promise support

export default async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data
      .trim()
      .split('\n')
      .filter((line) => line.length > 0);
    const students = lines.slice(1).map((line) => line.split(','));

    const fieldCounts = students.reduce((acc, student) => {
      const field = student[3].replace('\r', '');
      acc[field] = (acc[field] || 0) + 1;
      return acc;
    }, {});

    const formattedData = Object.entries(fieldCounts).map(([field, count]) => {
      const studentNames = students
        .filter((student) => student[3].replace('\r', '') === field)
        .map((student) => student[0]); // Extract first names

      return { field, count, studentNames };
    });

    return formattedData;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
