let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Yofan";

if (typeof userInput === "string") {
  userName = userInput;
}


function generateError(message: string, code: number): never{
  throw {message: message, code: code}
}

generateError('Error from server', 500);