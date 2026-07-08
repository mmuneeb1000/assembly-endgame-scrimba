import { getFarewellText } from "../utils/helper";

function Result({
  isGameWon,
  isGameLost,
  isGameOver,
  isLastGuessIncorrect,
  notMatchCount,
  languages,
}) {
  return (
    <>
      {!isGameOver && !isLastGuessIncorrect && (
        <section className="flex w-88 h-15 text-center text-body"></section>
      )}
      {isGameWon && (
        <section
          className="flex flex-col w-88 h-15 justify-center 
         rounded bg-win text-center text-white"
        >
          <h2 className="text-lg">You Win! </h2>
          <p>Well Done! 🎉</p>
        </section>
      )}

      {isGameLost && (
        <section
          className="flex flex-col w-88 h-15 justify-center
        rounded bg-lose text-center text-white"
        >
          <h2 className="text-lg">Game Over!</h2>
          <p>You Lose! Better start learning Assembly</p>
        </section>
      )}
      {!isGameOver && isLastGuessIncorrect && (
        <section
          className="flex flex-col w-88 h-15 justify-center
        rounded bg-farewell text-center text-white"
        >
          <p> {getFarewellText(languages[notMatchCount - 1].name)}</p>
        </section>
      )}
    </>
  );
}
export default Result;
