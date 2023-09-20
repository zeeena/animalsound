var numberOfAnimationsButtons = document.querySelectorAll('.animal').length;

        for (var i = 0; i < numberOfAnimationsButtons; i++) {
            document.querySelectorAll('.animal')[i].addEventListener('click', function () {
                var buttons = this.innerText;
    

                switch (buttons) {
                    case "cat":
                        var cat = new Audio("sound/cat1.mp3");
                        cat.play();
                        break;


                    case "dog":
                        var dog = new Audio("sound/dogs.mp3");
                        dog.play();
                        break;

                        case "bird":
                        var bird = new Audio("sound/Birds.mp3");
                        bird.play();
                        break;

                        case "dolphin":
                        var dolphin = new Audio("sound/Dolphins.mp3");
                        dolphin.play();
                        break;

                        default:
                            break;


                    }
                });
            }