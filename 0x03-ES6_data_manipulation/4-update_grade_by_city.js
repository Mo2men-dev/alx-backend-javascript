export default function updateStudentGradeByCity(listStudents, city, newGrades) {
  const studentGrades = listStudents.map((student) => {
    const studentInCity = student.location === city ? student : { id: undefined };
    const studentGrade = newGrades.filter((grade) => grade.studentId === studentInCity.id);

    return {
      ...student,
      grade: studentGrade.length === 0 ? 'N/A' : studentGrade[0].grade,
    };
  });

  return studentGrades;
}
