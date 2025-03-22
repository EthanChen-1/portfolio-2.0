import "./App.css";
import Header from "./components/shared/header";
import HomePage from "./homepage/homepage";

function App() {
  return (
    <div className="flex flex-col h-screen w-full items-center">
      <Header />
      <main className="wrapper flex-1 border-l border-zinc-200">
        <HomePage />
      </main>
    </div>
  );
}

export default App;
