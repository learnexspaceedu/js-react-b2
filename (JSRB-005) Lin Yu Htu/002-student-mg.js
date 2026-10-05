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

//Display All Students

function displayStudents() {
  for (let i = 0; i < students.length; i++) {
    console.log(
      `ID: ${students[i].id} | ${students[i].name} | Age: ${students[i].age} | Score: ${students[i].score}`,
    );
  }
}

displayStudents();

//Find Student By ID

function findStudentById(id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      console.log(students[i]);
      return students[i];
    }
  }

  console.log("Student not found");
}

findStudentById(3);

// Calculate Average Score

function calculateAverageScore() {
  let totalScore = 0;

  for (let i = 0; i < students.length; i++) {
    totalScore = totalScore + students[i].score;
  }

  let averageScore = totalScore / students.length;

  console.log(`Average Score: ${averageScore}`);

  return averageScore;
}

calculateAverageScore();

// Find Top Student

function getTopStudent() {
  let topStudent = students[0];

  for (let i = 1; i < students.length; i++) {
    if (students[i].score > topStudent.score) {
      topStudent = students[i];
    }
  }

  console.log("Top Student:");
  console.log(`${topStudent.name} - ${topStudent.score}`);

  return topStudent;
}

getTopStudent();

//Count Passed Students

function countPassedStudents() {
  let passedStudents = 0;

  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 70) {
      passedStudents++;
    }
  }

  console.log(`Passed Students: ${passedStudents}`);

  return passedStudents;
}

countPassedStudents();

// Add New Student

function addStudent(id, name, age, score) {
  const newStudent = {
    id: id,
    name: name,
    age: age,
    score: score,
  };

  students.push(newStudent);

  console.log("Student is added into the array.");
}

addStudent(6, "Frank", 23, 79);

//  Find Excellent Students

function getExcellentStudents() {
  for (let i = 0; i < students.length; i++) {
    if (students[i].score > 80) {
      console.log(students[i].name);
    }
  }
}

getExcellentStudents();

//Find Youngest Student

function getYoungestStudent() {
  let youngestStudent = students[0];

  for (let i = 1; i < students.length; i++) {
    if (students[i].age < youngestStudent.age) {
      youngestStudent = students[i];
    }
  }

  console.log(`${youngestStudent.name} (${youngestStudent.age})`);

  return youngestStudent;
}

getYoungestStudent();

// Assign Grade

function getGrade(score) {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else {
    return "F";
  }
}

console.log(getGrade(85));
