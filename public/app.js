var app = function(){
    //cat list section
    var catList = document.querySelector("#cats");

    //create the parent container
    var list = document.createElement("ul");
    list.classList.add("cats");

    //create name Item
    var name = document.createElement("li");
    name.innerText = "Name: Fluffers"

    //create fav food item
    var food = document.createElement("li");
    food.innerText = "Favourite Food: Abandoned mice"

    var imageHolder = document.createElement('li');

    var image = document.createElement('IMG');
    image.width = "300"
    image.src = "https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg"

    imageHolder.appendChild(image);
    food.appendChild(imageHolder);
    name.appendChild(food);
    list.appendChild(name);
    catList.appendChild(list);


};

window.onload = app;
