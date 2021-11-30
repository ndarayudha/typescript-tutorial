// object type asignment
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Yofan",
//   age: 21,
// };

// console.log(person);

// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string]
// } = {
//   name: "Yofan",
//   age: 21,
//   hobbies: ['Gaming', 'Learning'],
//   role: [2, 'author']
// };

// person.role.push('admin'); // ERROR tuple
// person.role[1] = 10;        // ERROR tuple
// person.role = [12, "sdlfj"] // correct using tuple

// ENUMS
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Yofan",
  age: 21,
  hobbies: ["Gaming", "Learning"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log("this is admin");
}

let favoriteActivities: string[];
favoriteActivities = ["Gaming", "Learning"];

console.log(person);

for (const hobby of person.hobbies) {
  console.log(hobby);
}
