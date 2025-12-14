function play(user) {
    let options = ["rock", "paper", "scissors"];
    let computer = options[Math.floor(Math.random() * 3)];

    let result = "";

    if (user === computer) {
        result = "It's a draw!";
    } else if (
        (user === "rock" && computer === "scissors") ||
        (user === "paper" && computer === "rock") ||
        (user === "scissors" && computer === "paper")
    ) {
        result = "You WIN! 🎉 Computer chose " + computer;
    } else {
        result = "You LOSE! 😢 Computer chose " + computer;
    }

    document.getElementById("result").innerHTML = result;
}
