import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Signup from "./pages/Signup";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Main />} />
        <Route path="/todo" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
