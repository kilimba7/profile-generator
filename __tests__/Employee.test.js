const Employee = require('..lib/Employee');

// Come back to this (example given for reading data from a file)
// const fs = require('fs');
// jest.mock('fs');
// fs.readFileSync.mockReturnValue('fake content');

test('creates a name object', () => {
    const employee = new Employee(`${nameInput}`);

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number))
    expect(employee.email).toEqual(expect.any(String));

})