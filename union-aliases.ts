type Combineable = number | string;
type CombineDescription = "as-number" | "as-text";

function combine(
  input1: Combineable,
  input2: Combineable,
  resultConversion: CombineDescription
) {
  let result;

  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + " " + input2.toString();
  }

  return result;
}

const combineAge = combine(10, 22, "as-number");
console.log(combineAge);

const combineNameAge = combine("10", "22", "as-number");
console.log(combineNameAge);

const combineName = combine("Yofan", "Niki", "as-text");
console.log(combineName);
