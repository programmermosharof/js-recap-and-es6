const employees = {
    name: 'John',
    age: 30,
    position: 'Software Engineer',
    department: 'IT',
    salary: 5000 ,



}
// Looping through the properties of the employees object
for (const key in employees) {
    // if (employees.hasOwnProperty(key)) {
    //     console.log(`${key}: ${employees[key]}`);
    // } else {
    //     console.log(`Property ${key} is inherited and not an own property.`);
    // }
    const value = employees[key];
    console.log(key, value);
}