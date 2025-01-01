const poll = {
    question: "What is your favourite programming language?",
    options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
    answers: new Array(4).fill(0), // This generates [0, 0, 0, 0].
};

poll.registerNewAnswer = () => {
    const userChoice = prompt(`${poll.question}\n${poll.options.join('\n')}\n\n (Write option number)`)
    console.log(userChoice);
    if (userChoice !== null && userChoice >= 0 && userChoice < 4) {
        poll.answers[userChoice]++;
        console.log(poll.answers);
        document.getElementById("output").textContent = poll.answers;
    } else {
        console.warn("Invalid answer");
    }
}

poll.registerNewAnswer();
