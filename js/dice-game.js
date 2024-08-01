function rollDice() {
    let goldCoins = 0;

    for (i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;

        alert("You roll a " + roll + ".");

        if (roll === 1) {
            alert("Game over!");
            break;
        }
        if (roll === 4) {
            if (goldCoins > 0) {
                goldCoins -= 1;
                alert("You lost a gold coin!\n\nYou currently have " + goldCoins + " gold coins!");
            } else {
                alert("You have " + goldCoins + " coins, you won't lose points this time.");
            }
        }
        if (roll < 5) {
            continue;
        }
        alert("Congratulations!  You win " + roll + " gold coins!");
        goldCoins += roll;
        alert("You currently have " + goldCoins + " gold coins!");
    }
    alert("You have won a total of " + goldCoins + " gold coins!");
}

"You currently have " + goldCoins + " gold coins!"