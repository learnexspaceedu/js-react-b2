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
    name: "charlie",
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

// requirement 1
const displayStudents = () => {
  for (let i = 0; i < students.length; i++) {
    console.log(
      `ID: ${students[i].id} | ${students[i].name} | Age: ${students[i].age} | Score: ${students[i].score}`,
    );
  }
};
displayStudents();

// requirement 2

const findStudentById = (id) => {
  const student = students.find((student) => student.id === id);
  console.log(student);
};

findStudentById(2);

// requirement 3

const calculateAverageScore = (students) => {
  let total = 0;
  for (const student of students) {
    total = total + student.score;
  }
  const avgScore = total / students.length;
  console.log("Score: " + avgScore);
};
calculateAverageScore(students);

// requirement 4

const getTopStudent = (students) => {
  let topStudent = students[0];

  for (const student of students) {
    if (student.score > topStudent.score) {
      topStudent = student;
    }
  }
  console.log(`Top Student: ${topStudent.name} - ${topStudent.score}`);
};
getTopStudent(students);

// requirement 5
const countPassedStudents = (students) => {
  const passedStudents = students.filter((student) => {
    return student.score >= 70;
  });
  console.log("Passed Students:", passedStudents.length);
};
countPassedStudents(students);

// requirement 6

students.push = { id: 6, name: "Frank", age: 23, score: 79 };
// console.log(students);

// Bonus Challenges
// Bonus 1
const getExcellentStudents = (students) => {
  for (student of students) {
    if (student.score >= 80) {
      console.log("Excellent Student: " + student.name);
    }
  }
};
getExcellentStudents(students);

// Bonus 2
const getYoungestStudent = (students) => {
  let youngestStudent = students[0];
  for (student of students) {
    if (youngestStudent <= student.age) {
      youngestStudent = students;
    }
  }
  console.log(
    "Youngest student: " + youngestStudent.name + youngestStudent.age,
  );
};
getYoungestStudent(students);

//Bonus 3
let score = 0;
const getGrade = (score) => {
  if (score >= 90) {
    console.log("Grade A");
  } else if (score >= 80 && score <= 89) {
    console.log("Grade B");
  } else if (score >= 70 && score <= 79) {
    console.log("Grade C");
  } else {
    console.log("Grade D");
  }
};

getGrade(76);
