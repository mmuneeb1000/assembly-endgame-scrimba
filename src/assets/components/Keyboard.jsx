function Keyboard({
  alphabet,
  addMatchLetter,
  guessWord,
  matchLetter,
  isGameOver,
  startNewGame,
}) {
  return (
    <section className="flex flex-col gap-10">
      <div className="flex flex-wrap justify-center w-88 gap-2 ">
        {alphabet.map((letter) => {
          const isGuessed = matchLetter.includes(letter);
          const isCorrect = isGuessed && guessWord.includes(letter);
          const isWrong = isGuessed && !guessWord.includes(letter);
          return (
            <button
              key={letter}
              onClick={() => addMatchLetter(letter)}
              disabled={isGameOver}
              aria-disabled={isGameOver}
              aria-label={`Letter ${letter}`}
              className={`
              w-10 h-10 rounded border-2 font-bold transition cursor-pointer
              ${
                isCorrect
                  ? "bg-win border-win text-white"
                  : isWrong
                    ? "bg-lose border-lose text-white"
                    : "bg-keyboard border-body text-black hover:border-background"
              }
            `}
            >
              {letter}
            </button>
          );
        })}
      </div>
      {!isGameOver && <div className="h-12"></div>}

      {isGameOver && (
        <button
          onClick={startNewGame}
          className="bg-game w-50 rounded mx-auto text-black text-sm border-body border px-4 py-2 cursor-pointer "
        >
          New Game
        </button>
      )}
    </section>
  );
}
export default Keyboard;
