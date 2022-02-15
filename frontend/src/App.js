import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WithNav from "./Components/WithNav";
import WithOutNav from "./Components/WithoutNav";
import LandingPage from "./Components/LandingPage";
import LoginPage from "./Components/LoginPage";
import SignUp from "./Components/SignUp";
import GetApp from "./Components/GetApp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route element={<WithNav />}>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<SignUp />} />
            <Route path="/getapp" element={<GetApp />} />
          </Route>
          <Route element={<WithOutNav />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
