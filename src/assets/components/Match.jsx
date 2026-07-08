import { useState } from "react";

function Match({ guessWord, matchLetter, isGameLost }) {
  return (
    <section className="flex gap-1">
      {guessWord.split("").map((letter, index) => {
        const shouldRevealLetter = isGameLost || matchLetter.includes(letter);
        const isMissedLetter = isGameLost && !matchLetter.includes(letter);

        return (
          <div
            key={index}
            className={`w-10 h-10 bg-[#323232] border-b-2 border-gray-300 flex 
            items-center justify-center text-xl font-semibold uppercase
            ${isMissedLetter ? "text-lose" : ""}`}
          >
            {shouldRevealLetter ? letter : ""}
          </div>
        );
      })}
    </section>
  );
}

export default Match;
