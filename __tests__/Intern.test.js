import Intern from "../lib/Intern";

// set school
test('sets school', () => {
    const sch = "UW";
    const emp = new Intern("Patrick", 1, "patrick@patrick.com", sch);
    expect(emp.school).toBe(sch);
});

// get school

// get role
test('gets role', () => {
    const rol = "Intern";
    const emp = new Intern("Patrick", 2, "patrick@patrick.com", "UW");
    expect(emp.getRole()).toBe(rol);
});