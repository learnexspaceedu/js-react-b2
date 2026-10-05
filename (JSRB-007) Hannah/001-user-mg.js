const users = [
  {
    id: 1,
    name: "Jack",
    age: 25,
    role: "student",
    isActive: true,
  },
  {
    id: 2,
    name: "Jill",
    age: 16,
    role: "student",
    isActive: false,
  },

  {
    id: 3,
    name: "John",
    role: "admin",
    age: 30,
  },
];

function getActiveUsers(user) {
  if (user.isActive) {
    return "User is active";
  } else {
    return "User is not active";
  }
}
console.log(getActiveUsers(users[1]));

function getPermission(user) {
  if (user.role === " admin") {
    return "User allowed to access";
  }
  if ((user.role === "student" && user.age >= 18, user.isActive)) {
    return "User allowed to access";
  } else {
    return "User not allowwed to access";
  }
}
console.log(getPermission(users[2]));

function getUserProfile(user) {
  const name = user?.name ?? "Name not available";
  const age = user?.age ?? "Age not available";
  const role = user?.role ?? "Role not available";

  return "Name:   " + name + ", Age: " + age + ", Role: " + role;
}
console.log(getUserProfile(users[2]));

const user = [
  { name: "Jack", role: "student" },
  { name: "Jill", role: "student" },
];

function getUserSummary(user) {
  return user.name + " is a " + (user.role === "admin" ? "admin" : "student");
}
console.log(getUserSummary(users[0]));
console.log(getUserSummary(users[1]));
console.log(getUserSummary(users[2]));
