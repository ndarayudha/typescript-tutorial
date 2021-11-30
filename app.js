// object type asignment
// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Yofan",
//   age: 21,
// };
// console.log(person);
var person = {
    name: "Yofan",
    age: 21,
    hobbies: ['Gaming', 'Learning']
};
var favoriteActivities;
favoriteActivities = ['Gaming', 'Learning'];
console.log(person);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
