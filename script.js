
$(document).ready(function () {
    var gameId;
    var world = $('.world');
    var world2 = $('.world2');
    var pipe = $('.pipe');
    var startButton = $('#btnStart');
    var gameOver = false;


    startButton.click(function () {
        gameOver = false;
        startButton.prop('disabled', true); // Disable the START button
        var game = function () {
            if (gameOver) {
                stopGame();
                determineWinner();
                return;
            }
             
            applyAnimations()
            var iteration1 = parseInt(world.css('left'));
            var iteration2 = parseInt(world2.css('left'));
            // console.log("world: " + iteration1 + ", word 2: " + iteration2 );
        
            if (collision(world, pipe) || collision(world2, pipe)  ) {
                gameOver = true;
            } else {
                var randomMovement1 = Math.floor(Math.random() * 3) + 1;
                var randomMovement2 = Math.floor(Math.random() * 3) + 1;
                world2.css('left', iteration2 + randomMovement2);
                world.css('left', iteration1 + randomMovement1);
                console.log(randomMovement1)
            }

            gameId = requestAnimationFrame(game);
        };

        gameId = requestAnimationFrame(game);
    });

    function stopGame() {
        if (gameId) {
            cancelAnimationFrame(gameId);
            console.log(gameId)
            gameId = null;
        }
    }

    function determineWinner() {
        var position1 = parseInt(world.css('left'));
        var position2 = parseInt(world2.css('left'));
       
        if (position1 > position2) {
            alert("HASAN Wins!");
            stopAnimations()
        } else if (position2 > position1) {
            alert("UGUR Wins!");
            stopAnimations()
        } else {
            alert("It's a Tie!");
            stopAnimations()
        }
       
    }

    function collision(duck, pipe) {
        var birdLeft = duck.offset().left;
        var birdWidth = duck.width();
        var birdRight = birdLeft + birdWidth;
        var pipeLeft = pipe.offset().left;
        var pipeWidth = pipe.width();
        var pipeRight = pipeLeft + pipeWidth;

        if (birdLeft < pipeRight) 
            return false;
        

        return true;
    }

    function applyAnimations() {
        // Apply animations to all .arm.left and their .bottom
        document.querySelectorAll('.arm.left').forEach(armLeft => {
          armLeft.style.animation = 'run 0.8s linear infinite 0.1s';
          armLeft.querySelector('.bottom').style.animation = 'arm-bottom 0.4s linear infinite 0.1s';
        });
      
        // Apply animations to all .arm.right and their .bottom
        document.querySelectorAll('.arm.right').forEach(armRight => {
          armRight.style.animation = 'run 0.8s linear infinite 0.4s';
          armRight.querySelector('.bottom').style.animation = 'arm-bottom 0.4s linear infinite 0.4s';
        });
      
        // Apply animations to all .leg.left and their .bottom
        document.querySelectorAll('.leg.left').forEach(legLeft => {
          legLeft.style.animation = 'run 0.4s linear infinite 0.1s';
          legLeft.querySelector('.bottom').style.animation = 'leg-bottom 0.4s linear infinite 0.1s';
        });
      
        // Apply animations to all .leg.right and their .bottom
        document.querySelectorAll('.leg.right').forEach(legRight => {
          legRight.style.animation = 'run 0.4s linear infinite 0.2s';
          legRight.querySelector('.bottom').style.animation = 'leg-bottom 0.4s linear infinite 0.2s';
        });

        const clouds = document.querySelectorAll('.cloud');
        clouds.forEach((cloud, index) => {
          let delay = 0; // Default delay
          let duration = '3s'; // Default duration
      
          // Customize delay and duration based on cloud index or class
          if (cloud.classList.contains('one')) {
            delay = '0s';
            duration = '3s';
          } else if (cloud.classList.contains('two')) {
            delay = '0.5s';
            duration = '2.6s';
          } else if (cloud.classList.contains('three')) {
            delay = '1s';
            duration = '3.2s';
          }
      
          cloud.style.animation = `cloud ${duration} linear infinite ${delay}`;
        });
    }//
      function stopAnimations() {
        // Stop animations for all .arm.left and their .bottom
        document.querySelectorAll('.arm.left').forEach(armLeft => {
          armLeft.style.animation = '';
          armLeft.querySelector('.bottom').style.animation = '';
        });
      
        // Stop animations for all .arm.right and their .bottom
        document.querySelectorAll('.arm.right').forEach(armRight => {
          armRight.style.animation = '';
          armRight.querySelector('.bottom').style.animation = '';
        });
      
        // Stop animations for all .leg.left and their .bottom
        document.querySelectorAll('.leg.left').forEach(legLeft => {
          legLeft.style.animation = '';
          legLeft.querySelector('.bottom').style.animation = '';
        });
      
        // Stop animations for all .leg.right and their .bottom
        document.querySelectorAll('.leg.right').forEach(legRight => {
          legRight.style.animation = '';
          legRight.querySelector('.bottom').style.animation = '';
        });

        const clouds = document.querySelectorAll('.cloud');
        clouds.forEach(cloud => {
          cloud.style.animation = '';
        });
     }//
      
    });
    
    function refreshPage() {
        window.location.reload();
    }
  
      
 


