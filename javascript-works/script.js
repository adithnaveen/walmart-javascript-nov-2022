function fnGetRecords() {
    fetch("https://jsonplaceholder.typicode.com/users/")
        .then(data => data.json())
        .then(jsonResponse => {

            let content =
                "<table>".concat(
                    jsonResponse.map(data =>
                        "<tr><td>" + data.name + "</td><td>" + data.username + "</td></tr>").toString() + "</table>");
            document.getElementById("mydiv").innerHTML = content;
        })

}