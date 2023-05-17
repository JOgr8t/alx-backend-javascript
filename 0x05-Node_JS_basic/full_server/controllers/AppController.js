/**
 * Contains the miscellaneous route handlers.
 * @author Adayehi Jonathan Oche <https://github.com/JOgr8t>
 */
class AppController {
  static getHomepage(request, response) {
    response.status(200).send('Hello Holberton School!');
  }
}

export default AppController;
module.exports = AppController;
