import Engineer from "../lib/Engineer";

// set github
test('sets github username', () => {
    const git = "githubmaster";
    const emp = new Engineer("Patrick", 1, "patrick@patrick.com", git);
    expect(emp.github).toBe(git);
});

// get github

// get role
test('gets role', () => {
    const rol = "Engineer";
    const emp = new Engineer("Patrick", 2, "patrick@patrick.com", "githubmaster");
    expect(emp.getRole()).toBe(rol);
});