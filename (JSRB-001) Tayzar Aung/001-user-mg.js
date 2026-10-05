const users = [
  {
    id: 1,
    name: "Mg Mg",
    age: 20,
    role: "student",
    isActive: true,
  },
  {
    id: 2,
    name: "Aye Aye",
    age: 16,
    role: "student",
    isActive: false,
  },

  {
    id: 3,
    name: "Admin",
    age: 30,
    role: "admin",
    isActive: true,
  },
];

// 1.Check User Status
function checkStatus(user) {
  let status = user.isActive ? "active" : "inactive";
  console.log(user.name + " is " + status);
}
// checkStatus(users[0]);
// checkStatus(users[1]);
checkStatus(users[2]);

// 2.Check Permission
function checkPermission(user) {
  let isAllowed =
    user.role === "admin" ||
    (user.role === "student" && user.age >= 18 && user.isActive);
  let allowingMessage = isAllowed ? " is allowed" : " is not allowed";
  console.log(user.name + allowingMessage);
}
// checkPermission(users[0]);
// checkPermission(users[1]);
checkPermission(users[2]);

// 3.Get User Profile
function getUserInfo(user) {
  let email = user.email ? user.email : "No email";
  console.log("Name: " + user.name);
  console.log("Role: " + user.role);
  console.log("Email: " + email);
}
// getUserInfo(users[0]);
// getUserInfo(users[1]);
getUserInfo(users[2]);

// 4.Create User Summary
function createUserSummary(user) {
  let accountType = user.role === "admin" ? "Admin" : "Student";
  console.log(user.name + " - " + accountType + " Account");
}
// createUserSummary(users[0]);
// createUserSummary(users[1]);
createUserSummary(users[2]);
