export default function getStudentIdsSum(listStudents) {
  return listStudents.reduce((prevVal, currVal) => prevVal + currVal.id, 0);
}
