import Header from "./assets/components/Header";
import Elimination from "./assets/components/Elimination";
import Keyboard from "./assets/components/Keyboard";
import Match from "./assets/components/Match";

function App() {
  return (
    <>
      <main
        className="flex flex-col justify-center items-center 
        mx-auto p-6 w-150 bg-app-bg gap-10"
      >
        <Header />
        <Elimination />
        <Match />
        <Keyboard />
      </main>
    </>
  );
}

export default App;
