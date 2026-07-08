import { useState } from "react";
import { getRandWord } from "./assets/utils/helper";
import Header from "./assets/components/Header";
import Elimination from "./assets/components/Elimination";
import Keyboard from "./assets/components/Keyboard";
import Match from "./assets/components/Match";
import Confetti from "react-confetti";
function App() {
  const languages = [
    { name: "HTML", color: "#E2680F", text: "#F9F4DA" },
    { name: "CSS", color: "#328AF1", text: "#F9F4DA" },
    { name: "JavaScript", color: "#F4EB13", text: "#1E1E1E" },
    { name: "React", color: "#2ED3E9", text: "#1E1E1E" },
    { name: "TypeScript", color: "#298EC6", text: "#F9F4DA" },
    { name: "Node.js", color: "#599137", text: "#F9F4DA" },
    { name: "Python", color: "#FFD742", text: "#1E1E1E" },
    { name: "Ruby", color: "#D02B2B", text: "#F9F4DA" },
    { name: "Assembly", color: "#2D519F", text: "#F9F4DA" },
  ];

  const [guessWord, setGuessWord] = useState(() => getRandWord());
  const [matchLetter, setMatchLetter] = useState([]);

  const numGuessesLeft = languages.length - 1;
  const notMatchCount = matchLetter.filter(
    (letter) => !guessWord.includes(letter),
  ).length;
  const isGameWon = guessWord
    .split("")
    .every((letter) => matchLetter.includes(letter));
  const isGameLost = notMatchCount >= numGuessesLeft;
  const isGameOver = isGameWon || isGameLost;
  const lastGuessedLetter = matchLetter[matchLetter.length - 1];
  const isLastGuessIncorrect =
    lastGuessedLetter && !guessWord.includes(lastGuessedLetter);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  function addMatchLetter(letter) {
    setMatchLetter((prevLetters) =>
      prevLetters.includes(letter) ? prevLetters : [...prevLetters, letter],
    );
  }
  function startNewGame() {
    setGuessWord(getRandWord());
    setMatchLetter([]);
  }

  return (
    <>
      {isGameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      <main
        className="flex flex-col justify-center items-center 
        mx-auto p-6 w-150 h-180 bg-app-bg gap-10"
      >
        <Header
          isGameWon={isGameWon}
          isGameLost={isGameLost}
          isGameOver={isGameOver}
          isLastGuessIncorrect={isLastGuessIncorrect}
          languages={languages}
          notMatchCount={notMatchCount}
        />
        <Elimination languages={languages} notMatchCount={notMatchCount} />
        <Match
          guessWord={guessWord}
          matchLetter={matchLetter}
          isGameLost={isGameLost}
        />
        <section className="sr-only" aria-live="polite" role="status">
          <p>
            {guessWord.includes(lastGuessedLetter)
              ? `Correct! The letter ${lastGuessedLetter} is in the word.`
              : `Sorry, the letter ${lastGuessedLetter} is not in the word.`}
            You have {numGuessesLeft} attempts left.
          </p>
          <p>
            Current word:
            {guessWord
              .split("")
              .map((letter) =>
                matchLetter.includes(letter) ? letter + "." : "blank.",
              )
              .join(" ")}
          </p>
        </section>
        <Keyboard
          alphabet={alphabet}
          addMatchLetter={addMatchLetter}
          guessWord={guessWord}
          matchLetter={matchLetter}
          isGameOver={isGameOver}
          startNewGame={startNewGame}
        />
      </main>
    </>
  );
}

export default App;
