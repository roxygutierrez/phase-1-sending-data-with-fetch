// Add your code here

const submitData = (userName, userEmail) => {
  const body = { name: userName, email: userEmail };

  const configurationObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  };

  return fetch("http://localhost:3000/users", configurationObj)
    .then((response) => {
      return response.json();
    })
    .then((newObject) => {
      const usersList = document.querySelector("#users");
      const newChild = document.createElement("li");
      newChild.textContent = newObject.id;
      usersList.appendChild(newChild);
    })
    .catch((error) => {
      document.querySelector("div#error-message").textContent =
        error["message"];
    });
};
