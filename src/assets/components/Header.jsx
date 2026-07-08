import Result from "./Result";

function Header({
  isGameWon,
  isGameLost,
  isGameOver,
  isLastGuessIncorrect,
  languages,
  notMatchCount,
}) {
  return (
    <header className="flex flex-col w-88 gap-5">
      <div>
        <h1 className="text-lg text-center text-heading">Assembly: Endgame</h1>
        <p className="text-sm text-center text-body">
          Guess the word in under 8 attempts to keep the programming world safe
          from Assembly!
        </p>
      </div>
      <Result
        isGameWon={isGameWon}
        isGameLost={isGameLost}
        isGameOver={isGameOver}
        isLastGuessIncorrect={isLastGuessIncorrect}
        languages={languages}
        notMatchCount={notMatchCount}
        aria-live="polite"
        role="status"
      />
    </header>
  );
}
export default Header;
