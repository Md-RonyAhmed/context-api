import "./App.css";
import GrandFather from "./components/GrandFather";
import { RingProvider } from "./contexts/RingContext";

export const App = () => {
  return (
    <RingProvider>
      <div className="App">
        <GrandFather />
      </div>
    </RingProvider>
  );
};
