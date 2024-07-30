export default function getListStudentIds(listStudents) {
  if (!(listStudents instanceof Array)) return [];

  const ids = listStudents.map((student) => student.id);
  return ids;
}
