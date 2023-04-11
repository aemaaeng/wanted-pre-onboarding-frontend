import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Main from "./pages/Main";
import Auth from "./pages/Auth";
import Todo from "./pages/Todo";
import PrivateRoute from "./util/PrivateRoute";
import AuthenticatedRoute from "./util/AuthenticatedRoute";
import "./App.css";
import "react-toastify/dist/ReactToastify.min.css";

function App() {
  return (
    <BrowserRouter basename="/wanted-pre-onboarding-frontend">
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
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{ fontSize: "0.9rem" }}
      />
    </BrowserRouter>
  );
}

export default App;
