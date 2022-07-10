const Intern = require("../lib/Intern");
const i = new Intern('jim', '3', 'jim@yahoo.com', 'texas');


test("get information from constructor", () => {
  expect(i.name).toBe('jim');
  expect(i.id).toBe('3');
  expect(i.email).toBe('jim@yahoo.com');
  expect(i.school).toBe('texas');
});


test("gets office number", () => {
    expect(i.getSchool()).toBe('texas');
  });
  

test("gets role for intern", () => {
    expect(i.getRole()).toBe('Intern');
  });