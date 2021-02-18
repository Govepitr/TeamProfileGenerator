const { TestScheduler } = require("jest");
const Employee = require("../lib/Employee");

Test("New Employee generated", () => {
  const emp = new Employee();
  expect (typeof(emp)).toBe("object");
});

test("set Employee Name with constructor argument", () => {
  const name = "Bryan";
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

test("Set ID with constructor arguement", () => {
  const testValue = 100;
  const emp = new Employee("Ryan", testValue);
  expect(emp.id).toBe(testValue);
});

test("Set email with constructor arguement", () => {
  const testValue = "Thisisnotreal@fake.com";
  const emp = new Employee("Ryan", 1, testValue);
  expect(emp.email).toBe(testValue);
});

test("Get name from getName()", () => {
  const testValue = "Bryan";
  const emp = new Employee(testValue);
  expect(emp.getName()).toBe(testValue);
});

test("Get ID from getId()", () => {
  const testValue = 59;
  const emp = new Employee("Ryan", testValue);
  expect(emp.getId()).toBe(testValue);
});

test("Get email from getEmail()", () => {
  const testValue = "Thisisnotreal@fake.com";
  const emp = new Employee("Ryan", 1, testValue);
  expect(emp.getEmail()).toBe(testValue);
});

test("getRole() works", () => {
  const testValue = "Employee";
  const emp = new Employee("Bryan", 1, "Thisisnotreal@fake.com");
  expect(emp.getRole()).toBe(testValue);
});