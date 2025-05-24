const users = [
  { name: "Olena", email: "olena@gmail.com", age: 28 },
  { name: "Dmytro", email: "dmytro@gmail.com", age: 35 },
  { name: "Ihor", email: "ihor@gmail.com", age: 22 }
];

for (const { name, email, age } of users) {
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Age: ${age}`);
  console.log('------------------');
}





