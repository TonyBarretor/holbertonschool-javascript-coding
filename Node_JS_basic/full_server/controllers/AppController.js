export default class AppController {
  static getHomePage(req, res) {
    res.status(200).send('Hello Holberton School!');
  }
}
