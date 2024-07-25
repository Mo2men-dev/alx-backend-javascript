export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  /**
     * Setter for the name attribute
     * @param {String} name - The name of the course
     */
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }

    this._name = newName;
  }

  /**
     * Getter for the name attribute
     * @return {String} - The name of the course
    */
  get name() {
    return this._name;
  }

  /**
     * Setter for the length attribute
     * @param {Number} length - The length of the course
    */
  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new TypeError('Length must be a number');
    }

    this._length = newLength;
  }

  /**
     * Getter for the length attribute
     * @return {Number} - The length of the course
    */
  get length() {
    return this._length;
  }

  /**
     * Setter for the students attribute
     * @param {Array} students - The students in the course
    */
  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new TypeError('Students must be an array');
    }

    this._students = newStudents;
  }

  /**
     * Getter for the students attribute
     * @return {Array} - The students in the course
    */
  get students() {
    return this._students;
  }
}
