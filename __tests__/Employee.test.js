const Employee = require('../lib/Employee');

// create new employee instance
test('creates employee instance', () => {
  const emp = new Employee();
  expect(typeof emp).toBe('object');
});

// set name
test('sets name', () => {
  const name = 'Patrick';
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

// set id
test('sets id', () => {
  const id = 2;
  const emp = new Employee('Patrick', 2);
  expect(emp.id).toBe(id);
});

// set email
test('sets email', () => {
  const email = 'patrick@patrick.com';
  const emp = new Employee('Patrick', 2, email);
  expect(emp.email).toBe(email);
});

// get name
test('gets name', () => {
  const name = 'Patrick';
  const emp = new Employee('Patrick');
  expect(emp.getName()).toBe(name);
});

// get id
test('gets id', () => {
  const id = 2;
  const emp = new Employee('Patrick', 2);
  expect(emp.getId()).toBe(id);
});

// get email
test('gets email', () => {
  const email = 'patrick@patrick.com';
  const emp = new Employee('Patrick', 2, email);
  expect(emp.getEmail()).toBe(email);
});

// get role
test('gets role', () => {
  const rol = 'Employee';
  const emp = new Employee('Patrick', 2, 'patrick@patrick.com');
  expect(emp.getRole()).toBe(rol);
});
