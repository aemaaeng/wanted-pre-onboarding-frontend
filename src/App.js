import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Main />} />
        <Route path="/login" element={<Main />} />
        <Route path="/todo" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
