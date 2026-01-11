interface User {
  username: string;
  password: string;
  role: string;
}

const testUser: User = {
  username: "admin",
  password: "admin123",
  role: "Admin"
};

console.log(testUser);
