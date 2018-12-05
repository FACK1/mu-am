fetch('/getcities')
.then(response => {
    return response.json();
})
.then((cities)=>{
    var list = document.getElementById("select_city");
    cities.forEach(element => {
        var op = document.createElement("option");
        op.innerText= element.city_name;
        op.value = element.id;
        list.appendChild(op);
    });
})