let createUser = (name, age = 18, role = "user") => {
  return {
    name: name,
    age: age,
    role: role,
  };
};
console.log(createUser("Alice", 25, "admin"));
