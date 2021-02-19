const Engineer = require('../lib/Engineer');

test("GitHub Account via constructor argument", () => {
  const testValue = "GitHubFaker";
  const emp = new Engineer("Ryan", 1, "Thisisnotreal@fake.com", testValue);
  expect(emp.github).toBe(testValue);
});

test("getRole() works!", () => {
  const testValue = "Engineer";
  const emp = new Engineer("Ryan", 1, "Thisisnotreal@fake.com", "GitHubFaker");
  expect(emp.getRole()).toBe(testValue);
});

test("get GitHub username from getGitHub()", () => {
  const testValue = "GitHubFaker";
  const emp = new Engineer("Ryan", 1, "Thisisnotreal@fake.com", testValue);
  expect(emp.getGitHub()).toBe(testValue);
});