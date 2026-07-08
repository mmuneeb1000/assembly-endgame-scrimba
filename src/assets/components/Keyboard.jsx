function Keyboard() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  return (
    <div className="grid grid-cols-10 gap-2 justify-center ">
      {alphabet.map((letter) => (
        <button
          className="w-10 h-10 cursor-pointer bg-keyboard text-black 
        font-bold rounded hover:bg-keyboard transition"
        >
          {letter}
        </button>
      ))}
    </div>
  );
}
export default Keyboard;
