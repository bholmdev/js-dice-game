function rollDice() {
    let goldCoins = 0;

    for (i = 0; i < 10; i++) {
        const roll = Math.floor(Math.random() * 6) + 1;

        alert("You roll a " + roll + ".");

        if (roll === 1) {
            alert("Game over!");
            break;
        }
        if (roll < 5) {
            continue;
        }
        alert("Congratulations!  You win " + roll + " gold coins!");
        goldCoins += roll;
    }
    alert("You have won a total of " + goldCoins + " gold coins!");
}