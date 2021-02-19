const Intern = require("../lib/Intern");

test("Provide School from the constructor argument", () => {
  const testValue = "Juliard";
  const emp = new Intern("Ryan", 1, "Thisisnotreal@fake.com", testValue);
  expect(emp.school).toBe(testValue);
});

test("getRole() worked!", () => {
  const testValue = "Intern";
  const emp = new Intern("Ryan", 1, "Thisisnotreal@fake.com", "Juliard");
  expect(emp.getRole()).toBe(testValue);
});

test("Get School from getSchool()", () => {
  const testValue = "Juliard";
  const emp = new Intern("Ryan", 1, "Thisisnotreal@fake.com", testValue);
  expect(emp.getSchool()).toBe(testValue);
});