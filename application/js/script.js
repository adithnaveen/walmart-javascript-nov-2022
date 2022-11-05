function fnAddUser(evt) {
    let userObj = {};
    userObj.name = document.querySelector("#name").value;
    userObj.city = document.getElementById("city").value;
    console.log(userObj);
    evt.preventDefault();

    // make a post request to save 
    fetch("http://localhost:3000/users", {
        method: 'POST',
        body: JSON.stringify(userObj),
        headers: {
            'Content-Type': "application/json"
        }
    })
        .then(resp => resp.json())
        .then(data => {
            alert("Record Inserted " + data.name);
            window.location.assign("http://127.0.0.1:5501/application/index.html");
            return;
        })
        .catch(err => console.log("Error Inserting " + err));

}

function getUserById(evt) {
    let userId = document.querySelector("#id").value;
    fetch("http://localhost:3000/users/" + userId)
        .then(resp => resp.json())
        .then(data => console.log(data));
    // then render on the screen 
}