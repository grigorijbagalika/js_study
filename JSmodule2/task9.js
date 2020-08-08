function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  let isLoginValid = false;
  if (login.length >= min && login.length <= max) {
    isLoginValid = true;
  }
  return isLoginValid;
}

function isLoginUnique(allLogins, login) {
  "use strict";
  // Write code under this line
  let isLoginUnique = true;
  for (const element of allLogins) {
    if (login === element) {
      isLoginUnique = false;
    }
  }
  return isLoginUnique;
}

function addLogin(allLogins, login) {
  "use strict";
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;
  // Write code under this line
  if (isLoginValid(login)) {
  } else {
    message = ERROR;
    console.log(message);
    return message;
  }
  if (isLoginUnique(allLogins, login)) {
    allLogins.push(login);
    message = SUCCESS;
    //console.log(message);
  } else {
    message = REFUSAL;
    //console.log(message);
  }
  return message;
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

// console.log(addLogin(logins, "Ajax"));
// 'Логин успешно добавлен!'

// console.log(addLogin(logins, "robotGoogles"));
// 'Такой логин уже используется!'

// console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

// console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
