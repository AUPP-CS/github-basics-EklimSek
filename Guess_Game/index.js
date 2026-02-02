
let playAgain = true;

while (playAgain) {
    let random = Math.floor(Math.random() * 100) + 1;
    let attempts = 7;

    while (attempts > 0) {

        let guess = parseInt(prompt("Guess a number between 1 and 100: "));

        if(attempts === 0){
            alert("Game over! The correct number was " + random + ".");
            break;
        }

        else{
            if(guess > random){
                attempts--;
                alert("Too high! You have " + attempts + " attempts left.");
            }
            else if(guess < random){
                attempts--;
                alert("Too low! You have " + attempts + " attempts left.");
            }
            else if(guess === random){
                alert("Congratulations! You've guessed the number!");
                break;
            }
        }
        
    }

    playAgain = confirm("Do you want to play again?");

    
    
}

