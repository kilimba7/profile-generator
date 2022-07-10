const Employee = require("../lib/Employee");

test("Instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});

test("Creates a new name for the employee", () => {
  const name = "bob";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Creates a new id for the employee", () => {
    const test = 1;
    const e = new Employee('bob', test);
    expect(e.id).toBe(test);
  });

  test("Creates a new email for the employee", () => {
    const test = "bob@yahoo.com";
    const e = new Employee('bob', 1, test);
    expect(e.email).toBe(test);
  });

  test("gets name for the employee", () => {
    const name = "bob";
    const e = new Employee(name);
    expect(e.getName()).toBe(name);
  });
  
  test("gets id for the employee", () => {
      const test = 1;
      const e = new Employee('bob', test);
      expect(e.getId()).toBe(test);
    });
  
    test("Gets email for the employee", () => {
      const test = "bob@yahoo.com";
      const e = new Employee('bob', 1, test);
      expect(e.getEmail()).toBe(test);
    });

  test("gets role for employee", () => {
    const test = "Employee";
    const e = new Employee('bob', 1, 'bob@yahoo.com');
    expect(e.getRole()).toBe(test);
  });