import "./App.scss";
import CallPage from "./components/CallPage/CallPage";
import HomePage from "./components/HomePage/HomePage";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <>
      <CallPage />
      <HomePage />
      <NoMatch />
    </>
  );
}

export default App;
