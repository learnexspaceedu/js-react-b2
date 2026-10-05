const students = [
  {
    id: 1,
    name: "Alice",
    age: 20,
    score: 85,
  },
  {
    id: 2,
    name: "Bob",
    age: 21,
    score: 72,
  },
  {
    id: 3,
    name: "Charlie",
    age: 19,
    score: 91,
  },
  {
    id: 4,
    name: "David",
    age: 22,
    score: 67,
  },
  {
    id: 5,
    name: "Emma",
    age: 20,
    score: 82,
  },
];
students.forEach((student) => {
  console.log(
    `ID: ${student.id}, ${student.name}, Age ${student.age}, Score: ${student.score}`,
  );
});
//
const findstudentbyid = students.find((student) => student.id === 2);
console.log(findstudentbyid);
///
const calculateAverageScore = (studentList) => {
  const totalScore = studentList.reduce((sum, student) => {
    return sum + student.score;
  }, 0);
  const averageScore = totalScore / studentList.length;
  return averageScore;
};
console.log("Average Score:", calculateAverageScore(students));
////
const topStudent = students.reduce((top, student) => {
  return student.score > top.score ? student : top;
}, students[0]);
console.log("Top Student:", topStudent.name, "-", topStudent.score);
////
const passedStudents = students.filter((student) => student.score >= 70);
console.log("Passed Students:" + passedStudents.length);
///
const addStudent = (newStudent) => {
  students.push(newStudent);
};
addStudent({ id: 6, name: "Frank", age: 23, score: 79 });
console.log("Student is added into the array:", students.length);
////
const excellentStudents = students.filter((student) => student.score > 80);
console.log(
  "Excellent Students:",
  excellentStudents.map((student) => student.name).join(", "),
);
////
const youngestStudent = students.reduce((youngest, student) => {
  return student.age < youngest.age ? student : youngest;
}, students[0]);
console.log(youngestStudent.name, "(", youngestStudent.age, ")");
////
function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "F";
  } else {
    return "No Score";
  }
}
const studentGrades = students.find((student) => {
  return getGrade(student.score);
});
console.log(getGrade(studentGrades.score));
