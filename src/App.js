import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Todo from "./pages/Todo";
import PrivateRoute from "./util/PrivateRoute";
import AuthenticatedRoute from "./util/AuthenticatedRoute";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AuthenticatedRoute />}>
          <Route path="/" element={<Main />} />
          <Route path="/signup" element={<Auth pageTitle="회원가입" />} />
          <Route path="/signin" element={<Auth pageTitle="로그인" />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
