const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

test("Office Number set by constructor argument", () => {
  const testValue = 59;
  const emp = new Manager("Ryan", 1, "Thisisnotreal@fake.com", testValue);
  expect(emp.officeNumber).toBe(testValue);
});

test("getRole() works!", () => {
  const testValue = "Manager";
  const emp = new Manager("Ryan", 1, "Thisisnotreal@fake.com");
  expect(emp.getRole()).toBe(testValue);
});

test("Acquire office number with getOffice()", () => {
  const testValue = 59;
  const emp = new Manager("Ryan", 1, "Thisisnotreal@fake.com", testValue);
  expect(emp.getOfficeNumber()).toBe(testValue);
})