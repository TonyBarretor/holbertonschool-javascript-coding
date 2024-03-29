import readDatabase from '../utils'; // Import readDatabase function

export default class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = process.argv[2]; // Access database filename from arguments
      const data = await readDatabase(database);

      let message = 'This is the list of our students\n';
      data.forEach((fieldData) => {
        message += `Number of students in ${fieldData.field}: ${fieldData.count}. List: ${fieldData.studentNames.join(', ')}\n`;
      });

      res.status(200).send(message);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const database = process.argv[2]; // Access database filename from arguments
      const { major } = req.params;

      if (!['CS', 'SWE'].includes(major.toUpperCase())) {
        throw new Error('Major parameter must be CS or SWE');
      }

      const data = await readDatabase(database);
      const filteredData = data.find((fieldData) => fieldData.field === major.toUpperCase());

      if (!filteredData) {
        res.status(404).send('No students found in this major');
        return;
      }

      const message = `List: ${filteredData.studentNames.join(', ')}`;
      res.status(200).send(message);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}
