function krito() {
    const choices = ["камень", "ножницы", "бумага"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function Game() {
    let oroz2 = 0;
    let computerScore = 0;

    while (true) {
        let userChoice = prompt("Выберите: камень, ножницы или бумага? (для выхода введите 'отмена')").toLowerCase();
        while (userChoice !== "камень" && userChoice !== "ножницы" && userChoice !== "бумага" && userChoice !== "отмена") {
            userChoice = prompt("Неверный ввод. Попробуйте снова: камень, ножницы или бумага? (для выхода введите 'отмена')").toLowerCase();
        }
        
        if (userChoice === "отмена") {
            break;
        }
        
        const computerChoice = krito();
        console.log(`Компьютер выбрал: ${computerChoice}`);

        if (userChoice === computerChoice) {
            console.log("Ничья!");
        } else if ((userChoice === "камень" && computerChoice === "ножницы") ||
                   (userChoice === "ножницы" && computerChoice === "бумага") ||
                   (userChoice === "бумага" && computerChoice === "камень")) {
            console.log("Вы выиграли!");
            oroz2++;
        } else {
            console.log("Компьютер выиграл!");
            computerScore++;
        }

        console.log(`Текущий счет: Вы ${oroz2}, Компьютер ${computerScore}`);
    }

    if (oroz2 > computerScore) {
        console.log("Вы победили!");
    } else if (oroz2 < computerScore) {
        console.log("Компьютер победил!");
    } else {
        console.log("Ничья!");
    }
}

Game();


const words = ["автомобиль", "книга", "кот", "дом", "школа"];
let chosenWord = '';
let guessedWord = '';
let triesLeft = 6;
let guessedLetters = [];

function chooseWord() {
    const randomIndex = Math.floor(Math.random() * words.length);
    chosenWord = words[randomIndex];
}

function initializeGame() {
    guessedWord = '_'.repeat(chosenWord.length);
    triesLeft = 6;
    guessedLetters = [];
}

function displayGameStatus() {
    console.log("Слово: " + guessedWord);
    console.log("Оставшиеся попытки: " + triesLeft);
    console.log("Уже введенные буквы: " + guessedLetters.join(', '));
}

function getUserGuess() {
    let guess = prompt("Введите букву:");
    if (guess === null) {
        return null;
    }
    guess = guess.toLowerCase();
    if (!/[a-z]/.test(guess) || guess.length !== 1) {
        console.log("Пожалуйста, введите одну букву от a до z.");
        return getUserGuess();
    }
    return guess;
}

function updateGuessedWord(guess) {
    let newGuessedWord = '';
    for (let i = 0; i < chosenWord.length; i++) {
        if (chosenWord[i] === guess) {
            newGuessedWord += guess;
        } else {
            newGuessedWord += guessedWord[i];
        }
    }
    guessedWord = newGuessedWord;
}

function playHangman() {
    chooseWord();
    initializeGame();

    while (true) {
        displayGameStatus();
        let guess = getUserGuess();
        if (guess === null) {
            console.log("Игра завершена.");
            break;
        }

        if (guessedLetters.includes(guess)) {
            console.log("Вы уже вводили эту букву.");
            continue;
        }

        guessedLetters.push(guess);

        if (chosenWord.includes(guess)) {
            updateGuessedWord(guess);
            if (guessedWord === chosenWord) {
                console.log("Поздравляем! Вы угадали слово: " + chosenWord);
                break;
            }
        } else {
            triesLeft--;
            console.log("Такой буквы нет в слове.");
            if (triesLeft === 0) {
                console.log("Вы проиграли. Было загадано слово: " + chosenWord);
                break;
            }
        }
    }
}

playHangman();



