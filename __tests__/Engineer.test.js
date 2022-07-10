const Engineer = require("../lib/Engineer");
const e = new Engineer('ki', '4', 'ki@yahoo.com', 'ki7');


test("get information from constructor", () => {
  expect(e.name).toBe('ki');
  expect(e.id).toBe('4');
  expect(e.email).toBe('ki@yahoo.com');
  expect(e.github).toBe('ki7');
});

test("gets github", () => {
    expect(e.getGithub()).toBe('ki7');
  });
  

test("gets role for engineer", () => {
    expect(e.getRole()).toBe('Engineer');
  });