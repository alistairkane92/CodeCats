var app = function(){
    var Cat = function(image, favouriteFood, name){
        this.image = image;
        this.favouriteFood = favouriteFood;
        this.name = name;
    }

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
        foodElement.innerText = "Favourite Food: " + food
        return foodElement;
    };

    var createName = function(name){
        var nameElement = document.createElement("li")
        nameElement.innerText = "Name: " + name
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
        var catFood = createFood(food);
        var catName = createName(name);
        var catImageHolder = createImageHolder();
        var catList = createList();

        appendItems(catImage, catImageHolder, catFood, catName, catList)
    };

    var createCatObject = function(cat){
        var catName = createName(cat.name);
        var catFood = createFood(cat.favouriteFood);
        var catImage = createImage(cat.image);
        var catImageHolder = createImageHolder();
        var catList = createList();

        appendItems(catImage, catImageHolder, catFood, catName, catList)
    };

    var createCatsFromArray = function(array){
        for(cat of array){
            createCatObject(cat);
        }
    }

    var Whiskers = new Cat("https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg", "Arrays", "CodeCat")
    var Grumpers = new Cat("http://i0.kym-cdn.com/entries/icons/facebook/000/011/365/GRUMPYCAT.jpg", "Choc ices", "Grumpers");
    var Flanders = new Cat("https://cdn.theatlantic.com/assets/media/img/mt/2017/08/GettyImages_161785570/lead_960.jpg?1502385684", "Hash Browns", "Flanders");

    var ArrayOfCats = [Whiskers, Grumpers, Flanders];

    // createCatObject(Whiskers);
    // createACat("https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg", "Abandoned Mice", "Bobby");
    createCatsFromArray(ArrayOfCats);
};

window.onload = app;
