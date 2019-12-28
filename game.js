var mycanvas = document.getElementById('mycanvas');
var ctx = mycanvas.getContext('2d');
var snakeSizeH = 5;
var snakeSizeW = 5;
var cvsH = mycanvas.height;
var cvsW = mycanvas.width;
var score = 0;
var snake;

var food;

// Module pattern
var drawModule = (function () {
    var bodySnake = function (x, y) {
        // This is the single square
        ctx.fillStyle = 'green';
        ctx.fillRect(x * snakeSizeW, y * snakeSizeH, snakeSizeW, snakeSizeH);
        // This is the border of the square
        ctx.strokeStyle = 'darkgreen';
        ctx.strokeRect(x * snakeSizeW, y * snakeSizeH, snakeSizeW, snakeSizeH);
    }

    var pizza = function (x, y) {
        // This is the border of the pizza
        ctx.fillStyle = 'red';
        ctx.fillRect(x * snakeSizeW , y * snakeSizeH , snakeSizeW , snakeSizeH );
    }

    var scoreText = function () {
        // How many pizzas did the snake eat
        var score_text = "Score: " + score;
        ctx.fillStyle = 'blue';
        ctx.fillText(score_text, 5, cvsH - 5);
    }

    var drawSnake = function () {
        // Initially the body of the snake
        var length = 2;
        snake = [];

        //with for loop we will push elements inside the array
        for (var i = length; i >= 0; i--) {
            snake.push({x: i, y: 0});
        }
    }

    var createFood = function() {
        food = {
            //Generate random numbers.
            x: Math.floor((Math.random()  /*(cvsW/snakeSizeW)-5)*/ *20) + 1),
            y: Math.floor((Math.random()  /*(cvsH/snakeSizeH)-5)*/ *20)+ 1)
        }

        //Look at the position of the snake's body.
        for (var i=0; i>snake.length; i++) {
            var snakeX = snake[0].x;
            var snakeY = snake[0].y;

            if (food.x===snakeX || food.y === snakeY || food.y === snakeY && food.x===snakeX) {
                food.x = Math.floor((Math.random()  /*(cvsW/snakeSizeW)-5)*/ *20) + 1);
                food.y = Math.floor((Math.random()  /*(cvsH/snakeSizeH)-5)*/ *20) + 1);
            }
        }
    }

    var checkCollision = function(x, y, array) {
        for(var i = 0; i < array.length; i++) {
            if(array[i].x === x && array[i].y === y)
                return true;
        }
        return false;
    }

    var paint = function () {
        //Let's draw the space in which the snake will move.
        ctx.fillStyle = 'lightgrey';
        ctx.fillRect(0, 0, cvsW, cvsH);

        //Give it a border.
        ctx.strokeStyle = 'black';
        ctx.strokeRect(0, 0, cvsW, cvsH);

        //Disable the button _start_ while you're playing.
        btn.setAttribute('disabled', true);

        var snakeX = snake[0].x;
        var snakeY = snake[0].y;

        /*
        Make the snake move.
        Use a variable ('direction') to control the movement.
        */
        if (direction == 'right') {
            snakeX++;
        } else if (direction == 'left') {
            snakeX--;
        } else if (direction == 'up') {
            snakeY--;
        } else if (direction == 'down') {
            snakeY++;
        }


        //If the snake touches the canvas path or itself, it will die!


        if (snakeX < 0 || snakeY < 0 || snakeX >= cvsW / snakeSizeW || snakeY >= cvsH / snakeSizeH || checkCollision(snakeX, snakeY, snake)) {
            //Stop the game.

            //Make the start button enabled again.
            //btn.removeAttribute('disabled', true);
            //location.reload();
            //alert('game over' +score);
            popup();
            document.getElementById('score').innerHTML = "Score: "+score;

            document.getElementById('score2').value = score;










            //Clean up the canvas.
            ctx.clearRect(0, 0, cvsW, cvsH);
            gameloop = clearInterval(gameloop);
            return;
        }




        document.addEventListener('onload', popup);
        function popup() {
            var module = document.getElementById('endgame');
            var span = document.getElementById('save')[0];
            module.style.display='block';
            //span.onclick().style.display='none';

        }




        //If the snake eats food it becomes longer and this means that, in this case, you shouldn't pop out the last element of the array.
        if (snakeX == food.x && snakeY == food.y) {
            //Create a new square instead of moving the tail.
            var tail = {
                x: snakeX,
                y: snakeY
            };
            score++;

            //Create new food.
            createFood();
        } else {

            //Pop out the last cell.
            var tail = snake.pop();
            tail.x = snakeX;
            tail.y = snakeY;
        }

        //Puts the tail as the first cell.
        snake.unshift(tail);

        //For each element of the array create a square using the bodySnake function we created before.
        for (var i = 0; i < snake.length; i++) {
            bodySnake(snake[i].x, snake[i].y);
        }

        //Create food using the _pizza_ function.
        pizza(food.x, food.y);

        //Put the score text.
        scoreText(score);

    }

    var init = function () {
        direction = 'right';
        drawSnake();
        createFood();
        gameloop = setInterval(paint, 80);
        btn.style.display='none';
    }

    //You need to return only the _init_ function at the end of the Module.
    return {
        init: init
    };

    //Close the Module.
}());


(function (window, document, drawModule, undefined) {

    //Connect the button
    var btn = document.getElementById('btn');
    btn.addEventListener("click", function () {
        drawModule.init();



    });

    document.onkeydown = function (event) {

        keyCode = window.event.keyCode;
        keyCode = event.keyCode;

        switch (keyCode) {

            case 37:
                if (direction != 'right') {
                    direction = 'left';
                }
                console.log('left');
                break;

            case 39:
                if (direction != 'left') {
                    direction = 'right';
                    console.log('right');
                }
                break;

            case 38:
                if (direction != 'down') {
                    direction = 'up';
                    console.log('up');
                }
                break;

            case 40:
                if (direction != 'up') {
                    direction = 'down';
                    console.log('down');
                }
                break;
        }
    }



})(window, document, drawModule);