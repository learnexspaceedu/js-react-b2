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

// Check User Status
function checkStatus(user) {
  if (user.isActive) {
    return user.name + " is active";
  } else {
    return user.name + " is inactive";
  }
}

console.log(checkStatus(users[0]));
console.log(checkStatus(users[1]));
console.log(checkStatus(users[2]));

// Check Permission
function checkPermission(user) {
  if (user.role === "admin") {
    return "Allowed";
  }

  if (user.role === "student" && user.age >= 18 && user.isActive) {
    return "Allowed";
  } else {
    return "Not Allowed";
  }
}

console.log(checkPermission(users[0]));
console.log(checkPermission(users[1]));
console.log(checkPermission(users[2]));

// Get User Profile
function getUserInfo(user) {
  const name = user?.name ?? "No name";
  const role = user?.role ?? "No role";
  const email = user?.email ?? "No email";

  return `Name: ${name} 
  Role: ${role} 
  Email: ${email}`;
}

console.log(getUserInfo(users[0]));
console.log(getUserInfo(users[1]));
console.log(getUserInfo(users[2]));

// Create User Summary
function createUserSummary(user) {
  const accountType =
    user.role === "student" ? "Admin Account" : "Studnet Account";

  return `${user.name} - ${accountType}`;
}
console.log(createUserSummary(users[0]));
console.log(createUserSummary(users[1]));
console.log(createUserSummary(users[2]));
