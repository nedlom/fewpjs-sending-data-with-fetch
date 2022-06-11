// Add your code here

function submitData(name, email) {

  const formData = {
    name: name,
    email: email
  };
  
  const configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };
  
  return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
      return response.json();
    })
    .then(function(object) {
      const h1 = document.createElement('h1');
      h1.innerHTML = object.id;
      document.body.appendChild(h1)
    }).catch(function(error) {
      const h1 = document.createElement('h1');
      h1.innerHTML = error.message;
      document.body.appendChild(h1)
    });;

}