class LoginPage {
  login(username: string, password: string): void {
    console.log(`Logging in with ${username}`);
  }
}

const loginPage = new LoginPage();
loginPage.login("admin", "admin123");
