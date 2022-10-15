import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CallPage from "./components/CallPage/CallPage";
import HomePage from "./components/HomePage/HomePage";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route exact path="/:id"> */}
          <Route path="/:id" element={<CallPage />} />

          {/* <Route exact path="/"> */}
          <Route path="/" element={<HomePage />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
