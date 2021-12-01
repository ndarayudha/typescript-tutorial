var userInput;
var userName;
userInput = 5;
userInput = "Yofan";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { message: message, code: code };
}
generateError('Error from server', 500);
