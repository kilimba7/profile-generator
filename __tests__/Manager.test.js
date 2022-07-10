const Manager = require("../lib/Manager");
const m = new Manager('jane', '2', 'jane@yahoo.com', '200');


test("get information from constructor", () => {
  expect(m.name).toBe('jane');
  expect(m.id).toBe('2');
  expect(m.email).toBe('jane@yahoo.com');
  expect(m.officeNumber).toBe('200');
});

// test("gets office number", () => {
//     expect(m.getOfficeNumber()).toBe('200');
//   });
  

test("gets role for manager", () => {
    expect(m.getRole()).toBe('Manager');
  });