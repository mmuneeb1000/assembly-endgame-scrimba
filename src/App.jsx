import Header from "./assets/components/Header";
import Elimination from "./assets/components/Elimination";
import Keyboard from "./assets/components/Keyboard";
import Match from "./assets/components/Match";

function App() {
  return (
    <>
      <main className="w-100">
        <Header />
        <Elimination />
        <Match />
        <Keyboard />
      </main>
    </>
  );
}

export default App;
