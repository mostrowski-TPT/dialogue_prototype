var dialogues = [
    {
        id: "start",
        header_text: "Would you like a coffee or a tea?",
        content: "<img src='img/waitress.jpg'>",
        options: [{
            option_text: "Coffee please!",
            option_link: "coffee"
}, {
            option_text: "Tea please!",
            option_link: "tea"
}]
        },
    {
        id: "coffee",
        header_text: "Do you want your coffee with milk?",
        content: "<img src='img/waitress.jpg'>",
        options: [{
            option_text: "Yes please!",
            option_link: "milk"
}, {
            option_text: "No thank you!",
            option_link: "nomilk"
}]
        },
    {
        id: "tea",
        header_text: "Do you want sugar to your tea?",
        content: "<img src='img/waitress.jpg'>",
        options: [{
            option_text: "Yes please!",
            option_link: "sugar"
}, {
            option_text: "No thank you!",
            option_link: "nosugar"
}]
        },
    {
        id: "milk",
        header_text: "Coffee with milk",
        content: "<img src='img/coffemilk.jpeg'>",
        options: [{
            option_text: "Return",
            option_link: "start"
}]
        },
    {
        id: "nomilk",
        header_text: "Coffee without milk",
        content: "<img src='img/coffeblack.JPG'>",
        options: [{
            option_text: "Return",
            option_link: "start"
}]
        },
    {
        id: "sugar",
        header_text: "Tea with sugar",
        content: "<img src='img/teasugar.jpg'>",
        options: [{
            option_text: "Return",
            option_link: "start"
}]
        },
    {
        id: "nosugar",
        header_text: "Tea without sugar",
        content: "<img src='img/waitress.jpg'>",
        options: [{
            option_text: "Return",
            option_link: "start"
}]
        }
]


//initialize with initial values
var currentdialogue = dialogues[0];
console.log(currentdialogue);
var currentheader = currentdialogue.header_text;
var currentcontent = currentdialogue.content;
var currentoptions = currentdialogue.options;
var headertemplate = _.template("<h1><%= currentheader%></h1><br>");



//create first dialogue
window.addEventListener("load", function (e) {


    $('#container').html(currentcontent).append("<br>").append(headertemplate).css('opacity', 0).delay(300).animate({
        opacity: 1
    });

    _.each(currentoptions, function (option) {

        var optiontemplate = _.template("<button class='<%= mylink %>'><%= mytext %></button><br>");
        var mytext = option.option_text;
        var mylink = option.option_link;
        $('#container').append(optiontemplate({
            mylink: mylink,
            mytext: mytext
        }));
        $("." + mylink).on("click", function () {
            renderNewDialogue(mylink);
        })
        // $('#container').append("<p class=\"" + mylink + "\">" + mytext + "<\/p><br>");
    });
});


//picking an option and rendering new dialogue
function renderNewDialogue(optionlink) {
    currentdialogue = _.findWhere(dialogues, {
        id: optionlink
    });
    console.log(currentdialogue);
    currentheader = currentdialogue.header_text;
    currentoptions = currentdialogue.options;
    currentcontent = currentdialogue.content;

    $('#container').html(currentcontent).append("<br>").append(headertemplate).css('opacity', 0).delay(300).animate({
        opacity: 1
    });

    _.each(currentoptions, function (option) {
        var optiontemplate = _.template("<button class='<%= mylink %>'><%= mytext %></button><br>");
        var mytext = option.option_text;
        var mylink = option.option_link;
        $('#container').append(optiontemplate({
            mylink: mylink,
            mytext: mytext
        }));
        $("." + mylink).on("click", function () {
            renderNewDialogue(mylink);
        })
    });
};
