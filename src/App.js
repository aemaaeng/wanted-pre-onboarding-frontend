import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signup" element={<Auth pageTitle="회원가입" />} />
        <Route path="/signin" element={<Auth pageTitle="로그인" />} />
        <Route path="/todo" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
