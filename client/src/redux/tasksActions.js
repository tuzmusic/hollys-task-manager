const fetch = require("node-fetch");


function getTasks() {
  const indexURL = 'http://localhost:3001/tasks'
  fetch(indexURL)
  .then(res => res.json())
  .then(json => {
    console.log(json);
  });
}

getTasks()