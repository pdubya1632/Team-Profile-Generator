const Manager = require('../lib/Manager');

// set office number
test('sets number', () => {
  const num = '206-856-6985';
  const emp = new Manager('Patrick', 1, 'patrick@patrick.com', num);
  expect(emp.number).toBe(num);
});

// get office number
test('gets number', () => {
  const num = '206-896-5698';
  const emp = new Manager('Patrick', 1, 'patrick@patrick.com', num);
  expect(emp.getNumber()).toBe(num);
});

// get role
test('gets role', () => {
  const rol = 'Manager';
  const emp = new Manager('Patrick', 2, 'patrick@patrick.com');
  expect(emp.getRole()).toBe(rol);
});
