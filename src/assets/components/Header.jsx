import Result from "./Result";

function Header() {
  return (
    <header className="w-88">
      <h1 className="text-lg text-center">Assembly: Endgame</h1>
      <p className="text-sm text-center">
        Guess the word in under 8 attempts to keep the programming world safe
        from Assembly!
      </p>
      <Result />
    </header>
  );
}
export default Header;
