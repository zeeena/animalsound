var numberOfAnimationsButtons = document.querySelectorAll('.animal').length;

    for (var i = 0; i < numberOfAnimationsButtons; i++) {
    document.querySelectorAll('.animal')[i].addEventListener('click', function () {
    var buttons = this.innerText;

    switch (buttons) {
    case "Cat":
    var cat = new Audio("sound/cat1.mp3");
    cat.play();
    break;


    case "Dog":
    var dog = new Audio("sound/dogs.mp3");
    dog.play();
    break;

    case "Bird":
    var bird = new Audio("sound/Birds.mp3");
    bird.play();
    break;

    case "Dolphin":
    var dolphin = new Audio("sound/Dolphins.mp3");
    dolphin.play();
    break;

    default:
    audio = null;

    }
});
}