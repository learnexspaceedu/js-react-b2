const users = [
  {
    id: 1,
    name: "Mg Mg",
    age: 20,
    role: "student",
    isActive: true,
    email: "mgmg@gmail.com",
    address: {
      city: "Yangon",
      road: "Baho Road",
    },
  },
  {
    id: 2,
    name: "Aye Aye",
    age: 17,
    role: "student",
    isActive: true,
  },

  {
    id: 3,
    name: "Admin",
    age: 30,
    role: "admin",
    isActive: true,
    email: "admin@gmail.com",
    address: {
      city: "Yangon",
      road: "Pyi Road",
      houseNumber: "114",
    },
  },
];
let user = users[0];

const checkStatus = (user) => {
  if (user.isActive) {
    console.log("(checking status)");
    console.log(user.name, " is active now");
  } else {
    console.log("(checking status)");
    console.log(user.name, " is inactive");
  }
};
checkStatus(user);

const checkPermission = (user) => {
  if (user.role === "admin") {
    console.log("(checking Permission)");
    console.log("Permission was allowed. You are admin");
  } else if (user.age >= 18 && user.isActive) {
    console.log("(checking Permission)");
    console.log("You also have permission");
  } else {
    console.log("(checking Permission)");
    console.log("You don't have permission :(");
  }
};
checkPermission(user);

const getUserInfo = (user) => {
  console.log("(User Profile)");

  console.log("Name: ", user?.name || "Guest");
  console.log("Role: ", user?.role || "Unknown role");
  console.log("Email: ", user?.email || "Unknown email");

  console.log(
    "Address: ",
    user?.address?.houseNumber || "Unknown Number",
    ",",
    user?.address?.road || "Unknown road",
    ",",
    user?.address?.city || "Unknown city",
    ",",
  );
};
getUserInfo(user);

const account =
  user.role === "admin"
    ? user.name + ": Admin Account"
    : user.name + ": Student Account";
console.log("(Account)");
console.log(account);
