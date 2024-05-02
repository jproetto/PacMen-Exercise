

    // creating a variable to hold the height of the container holding the buttons
    // because with an absolute position for the images, relative to the game-container (the closest positioned ancestor), the images can start right after the button-container, since that is the placement of the game-comtainer in the flow of the document
    // meaning that when we are checking against window.height as our bottom border for border detection,
    // if we dont subtract the height of the button-container from window.height, the random number generated in line 22 for the y coordinate, can theoretically be slightly greater than the artificial window.height number
    // i.e. the balls can be created slightly outside the bottom border and also move slight past the bottom border
    const buttonContainer = document.getElementById('button-container')
    const buttonContainerHeight = 30
    buttonContainer.style.height = buttonContainerHeight

    const velocityControl = 10
    const xStartControl = window.innerWidth - 100 // substract 100 because that is the width of the image, and this coordinate sets the the start for the left side of the image from the left of the page //
    const yStartControl = window.innerHeight - buttonContainerHeight - 100 // subtract buttonContainerHeight because that is the height of the div holding the buttons right above the container holding the game and subtract 100 because that is the height of the image, and this coordinate sets the the start for the top side of the image from the top of page //
    
    const pacArray1 = ['./PacMan1.png', './PacMan2.png', './PacMan3.png', './PacMan4.png'];
    const pacMen = [];

    function setToRandomStartingInt(xScale, yScale) {
        return {
            x: Math.floor(Math.random() * xScale),
            y: Math.floor(Math.random() * yScale)
        }
    }

    function setToRandomVelocity(vScale) {
        return {
            x: Math.floor(Math.random() * vScale),
            y: Math.floor(Math.random() * vScale)
        }
    }

    // this function chooses a random interger less than x, inclusive of 0
    // i.e. it will pull in a random index # from pacArray1
    // i.e. it will pull in a random one of the 4 PacMan images supplied in pacArray1
    function getRandomIndex(x){
        return pacArray1[Math.floor(Math.random()*x)];
    }

    // Factory to make a PacMan 
    function makePac() {
        // returns an object with values scaled {x: 33, y: 21}
        let velocity = setToRandomVelocity(velocityControl);
        let position = setToRandomStartingInt(xStartControl, yStartControl);
        // Add image to div id = game-container
        let game = document.getElementById('game-container');
        let newimg = document.createElement('img');
        game.style.position = 'relative'
        newimg.style.position = 'absolute';
        newimg.src = getRandomIndex(pacArray1.length);
        newimg.width = 100;
        newimg.style.left = position.x;
        newimg.style.top = position.y;
        game.appendChild(newimg);
        // new style of creating an object
        return {
            position,
            velocity,
            newimg
        }
    }

    function update() {
        //loop over pacmen array and move each one and move image in DOM
        pacMen.forEach((element) => {
            checkCollisions(element)
            element.position.x += element.velocity.x;
            element.position.y += element.velocity.y;

            element.newimg.style.left = element.position.x;
            element.newimg.style.top = element.position.y;
        })
        setTimeout(update, 20);
    }

    function checkCollisions(item) {
        if (item.position.x + item.velocity.x + item.newimg.width > window.innerWidth ||
            item.position.x + item.velocity.x < 0) item.velocity.x = -item.velocity.x;
        if (item.position.y + item.velocity.y + item.newimg.height + buttonContainerHeight > window.innerHeight ||
            item.position.y + item.velocity.y < 0) item.velocity.y = -item.velocity.y;
    }

    function makeOne() {
        pacMen.push(makePac()); // add a new PacMan
    }
