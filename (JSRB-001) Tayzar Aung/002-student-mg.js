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
    score: 88,
  },
];

// Requirement 1: Display all students//
function displayStudents() {
  for (let i = 0; i < students.length; i++) {
    const displayStudentAllID = `ID: ${students[i].id} | Name: ${students[i].name} | Age: ${students[i].age} | Score: ${students[i].score}`;
    console.log(displayStudentAllID);
  }
}
displayStudents();

// Requirement 2: Find student by ID//
function findStudentById(id) {
  const studentFound = students.find((student) => student.id === id);
  if (studentFound) {
    console.log(studentFound);
  } else {
    console.log("Student not found.");
  }
}
findStudentById(3);

// Requirement 3: Calculate average score//
function calculateAverageScore() {
  let totalScore = 0;
  for (let i = 0; i < students.length; i++) {
    totalScore = totalScore + students[i].score;
  }
  let average = totalScore / students.length;
  console.log(`Average Score: ${average}`);
}
calculateAverageScore();

// Requirement 4: Find top student//
function getTopStudent() {
  let topStudent = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].score > topStudent.score) {
      topStudent = students[i];
    }
  }
  console.log(`Top Student: ${topStudent.name} - ${topStudent.score}`);
}
getTopStudent();

// Requirement 5: Count passed students//***
function countPassedStudents() {
  const passedStudents = students.filter((student) => student.score >= 70);
  console.log(`Passed Students: ${passedStudents.length}`);
}
countPassedStudents();

// Requirement 6: Add student//
function addStudent(newStudent) {
  students.push({ ...newStudent });
  console.log("Student is added into the array.");
}
addStudent({ id: 6, name: "Frank", age: 23, score: 79 });
// console.log(students);

// Bonus challenge 1: Find students with score above 80//
function getExcellentStudents() {
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    if (student.score > 80) {
      console.log(student.name);
    }
  }
}
getExcellentStudents();

// Bonus challenge 2: Find youngest student//***

// Bonus challenge 3: Assign grade based on score//
function getGrade(score) {
  let grade = "F";
  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  }
  console.log(grade);
}
getGrade(85);
