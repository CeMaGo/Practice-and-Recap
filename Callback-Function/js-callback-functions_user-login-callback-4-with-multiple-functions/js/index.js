console.clear();

function handleUserLogin(onSuccess, onError, userName) {
  if (userName === "Jane Doe") {
    onSuccess(userName, "admin");
  } else {
    onError(`Unknown user "${userName}"`);
  }
}

// The exercise starts here!

function showWelcomeMessage(userName, userRole) {
  console.log(`Welcome ${userName}! You are now logged in as ${userROLE}!}`);
}

function showErrorMessage(errorMessage) {
  console.log(`Login error ${errorMessage}`);
}
const userName = "Jane Doe"
const userRole = "admin"

handleUserLogin(showWelcomeMessage, showErrorMessage, userName)
