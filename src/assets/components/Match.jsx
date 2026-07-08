import { useState } from "react";

function Match({ guessWord, matchLetter }) {
  return (
    <section className="flex gap-1">
      {guessWord.split("").map((letter, index) => (
        <div
          key={index}
          className="w-10 h-10 bg-[#323232] border-b-2 border-gray-300 flex items-center justify-center text-xl font-semibold uppercase"
        >
          {matchLetter.includes(letter) ? letter : ""}
        </div>
      ))}
    </section>
  );
}

export default Match;
