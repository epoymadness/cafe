import Home from "./components/Home";
import { TokenProvider } from "./context/TokenContext";
function App() {
  return (
    <>
      <TokenProvider>
        <Home />
      </TokenProvider>
    </>
  );
}

export default App;
