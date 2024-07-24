import Inputs from "./Components/Inputs";
import TempAndDetail from "./Components/TempAndDetail";
import TimeAndLocation from "./Components/TimeAndLocation";
import TopButtons from "./Components/TopButtons";
import Forecast from "./Components/Forecast";

function App() {
  return (
    <div className="mx-auto max-w-screen-lg mt-4 py-5 px-32 bg-gradient-to-br shadow-xl shadow-gray-400 from-cyan-600 to-blue-700">
      <TopButtons />
      <Inputs/>
      <TimeAndLocation/>
      <TempAndDetail/>
      <Forecast/>
      <Forecast/>
    </div>
  );
}

export default App;
