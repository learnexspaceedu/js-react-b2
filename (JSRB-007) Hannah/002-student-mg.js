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

function displayStudents(students) {
  console.log("Student List:");
  for (let i = 0; i < students.length; i++) {
    console.log(
      "ID:" +
        students[i].id +
        " |:" +
        students[i].name +
        " Age:" +
        students[i].age +
        " Score:" +
        students[i].score,
    );
  }
}
//=============================================================================
//find student by id
//=============================================================================
function findStudentById(id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      return students[i];
    }
  }
  console.log("Student not found");
  return null;
}

//=============================================================================
//calculate averge score of students
//=============================================================================
function calculateAverageScore(students) {
  let totalScore = 0;
  for (let i = 0; i < students.length; i++) {
    totalScore = totalScore + students[i].score;
  }
  let averageScore = totalScore / students.length;
  console.log("Average Score: " + averageScore);
  return averageScore;
}
//=============================================================================
//find top student by score
//=============================================================================
function findTopStudent(students) {
  let topStudent = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].score > topStudent.score) {
      topStudent = students[i];
    }
    return topStudent;
  }
  console.log(
    "Top Student: " + topStudent.name + " with score: " + topStudent.score,
  );
}
//=============================================================================
//COUNT PASSED STUDENTS
//=============================================================================
function countPassedStudents(students) {
  let passedCount = 0;
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 70) {
      passedCount++;
    }
    console.log("Number of Passed Students: ");
  }
  console.log("Number of Passed Students: " + passedCount);
}
//=============================================================================
//ADDING NEW STUDENT
//=============================================================================
function addStudent(id, name, age, score) {
  const newStudent = {
    id: id,
    name: name,
    age: age,
    score: score,
  };
  students.push(newStudent);
  console.log("New student added: " + name);
}
//=============================================================================
//FIND STUDENTS WHO SCORE ABOVE 80
//=============================================================================
function findStudentsAboveScore() {
  console.log("EXACELLENT STUDENTS");

  for (let i = 0; i < students.length; i++) {
    if (students[i].score > 80) {
      console.log("Student with score above 80: " + students[i].name);
    }
  }
}
//=============================================================================
//FIND YOUNGEST STUDENT
//=============================================================================
function findYoungestStudent(students) {
  let youngestStudent = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].age < youngestStudent.age) {
      youngestStudent = students[i];
    }
  }
  console.log(
    "Youngest Student: " +
      youngestStudent.name +
      " with age: " +
      youngestStudent.age,
  );
  return youngestStudent;
}
//=============================================================================
//ASSIGN GRADE TO STUDENTS
//=============================================================================
function assignGrades(students) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].score >= 90) {
      students[i].grade = "A";
    } else if (students[i].score >= 80) {
      students[i].grade = "B";
    } else if (students[i].score >= 70) {
      students[i].grade = "C";
    } else {
      return "F";
    }
    console.log(
      "Student: " +
        students[i].name +
        " | Score: " +
        students[i].score +
        " | Grade: " +
        students[i].grade,
    );
  }
}

displayStudents(students);
findStudentById(3);
calculateAverageScore(students);
findTopStudent(students);
countPassedStudents(students);
addStudent(6, "Frank", 23, 75);
findStudentsAboveScore();
findYoungestStudent(students);
assignGrades(students);
