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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "Yofan",
    age: 21,
    hobbies: ["Gaming", "Learning"],
    role: Role.ADMIN
};
if (person.role === Role.ADMIN) {
    console.log("this is admin");
}
var favoriteActivities;
favoriteActivities = ["Gaming", "Learning"];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
