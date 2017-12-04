var app = function(){
    var createImage = function(src){
        var image = document.createElement('IMG')
        image.src = src
        image.width="300"
        return image;
    };

    var createImageHolder = function(){
        var imageHolder = document.createElement('li');
        return imageHolder;
    }

    var createFood = function(food){
        var foodElement = document.createElement("li")
        foodElement.innerText = food
        return foodElement;
    };

    var createName = function(name){
        var nameElement = document.createElement("li")
        nameElement.innerText = name
        return nameElement;
    };

    var createList = function(){
        var list = document.createElement("ul")
        list.classList.add("cats")
        return list;
    };

    var appendItems = function(catImage, catImageHolder, catFood, catName, catList){
        catImageHolder.appendChild(catImage);
        catFood.appendChild(catImageHolder);
        catName.appendChild(catFood);
        catList.appendChild(catName);

        var ParentList = document.querySelector("#cats");
        ParentList.appendChild(catList);
    };

    var createACat = function(image, food, name){
        var catImage = createImage(image);
        var catImageHolder = createImageHolder();
        var catFood = createFood(food);
        var catName = createName(name);
        var catList = createList();


        appendItems(catImage, catImageHolder, catFood, catName, catList)
    };

    createACat("https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg", "Abandoned Mice", "Bobby");

};

window.onload = app;
