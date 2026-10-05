const users = [
  {
    id: 1,
    name: "Mg Mg",
    age: 20,
    role: "student",
    isActive: true,
    email: "wintvictoria8888@gmail.com",
  },
  {
    id: 2,
    name: "Aye Aye",
    age: 16,
    role: "student",
    isActive: false,
    email: "",
  },
  {
    id: 3,
    name: "Admin",
    age: 30,
    role: "admin",
    isActive: true,
    email: "",
  },
];
/////
for (let i = 0; i < users.length; i++) {
  if (users[i].isActive === true) {
    console.log(users[i].name + " is active");
  } else {
    console.log(users[i].name + " is inactive");
  }
}
/////
if (
  (allowedUsers = users.filter(
    (user) =>
      (user.age >= 18 && user.isActive === true) || user.role === "admin",
  ))
) {
  allowedUsers.forEach((user) => {
    console.log(user.name + " is allowed");
  });
}
/////
function getUserInfo(name, role) {
  //console.log("Name:" + name + " Role:" + role);
  console.log("Name:" + name);
  console.log("Role:" + role);
}
for (let i = 0; i < users.length; i++) {
  getUserInfo(users[i].name, users[i].role);
  let getUserinfo = users[i].email ? "Email:" + users[i].email : "No Email";
  console.log(getUserinfo);
}

// getUserInfo(users[1].name, users[1].role);
// let getUserinfo1 = (users[1].email) ? "Email:Provided" : "No Email";
// console.log(getUserinfo1);

// getUserInfo(users[2].name, users[2].role);
// let getUserinfo2 = (users[2].email) ? "Email:Provided" : "No Email";
// console.log(getUserinfo2);
/////
let userRole = [];
for (let i = 0; i < users.length; i++) {
  userRole[i] = users[i].role;
  let userInfo = userRole[i] === "admin" ? "Admin Account" : "Student Account";
  console.log(userInfo);
}
