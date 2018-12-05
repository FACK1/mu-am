var list = document.getElementById("select_city");
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

document.getElementById("select_city").onchange = (event) =>{
    // You can use “this” to refer to the selected element.

    let id = event.target.value;
    console.log(id);
    fetch('/getcitiesinfo?id='+id)
    .then(response => {
        return response.json();
    })
    .then((city)=>{
      console.log(city);
    })
}
