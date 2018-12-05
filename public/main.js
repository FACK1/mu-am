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
      document.getElementById("city_id").value=city[0].id;

        console.log(city);
        let cityinfo = document.getElementById('cityReviews');
        cityinfo.innerText = "";
        let cul = document.createElement('ul');
        let cName = document.createElement('li');
        cName.innerText = "City Name : " + city[0].city_name;
        let cPop = document.createElement('li');
        cPop.innerText = "Population : " + city[0].city_pop + " NFR";
        let cArea = document.createElement('li');
        cArea.innerText = "City Area : " + city[0].city_area + " km²";

        cul.appendChild(cName);
        cul.appendChild(cPop);
        cul.appendChild(cArea);

        cityinfo.appendChild(cul);
        if(city[1].length>0)
        {
            let postsul = document.createElement('ul');

            city[1].forEach(element =>{
                let visitorName = document.createElement('li');
                visitorName.innerText = " By: " + element.name_visitor;
                let postContent = document.createElement('li');
                postContent.innerText = element.post_content;

                postsul.appendChild(visitorName);
                postsul.appendChild(postContent);
            })
            cityinfo.appendChild(postsul);


        }
        else{

            let noReviews = document.createElement('h2');
            noReviews.innerText = "No Reviews";
            cityinfo.appendChild(noReviews);

        }





    })
}
