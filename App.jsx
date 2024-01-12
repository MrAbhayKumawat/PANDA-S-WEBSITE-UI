import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./Components/Auths/SignIn";
import ForgotPass from "./Components/ForgotResetPass/ForgotPass";
import ResetPass from "./Components/ForgotResetPass/ResetPass";
import SignUp from "./Components/Auths/SignUp";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path="/SignIn" element={<SignIn/>} />
          <Route path="/ForgotPass" element={<ForgotPass/>} />
          <Route path="/ResetPass" element={<ResetPass/>} />
          <Route path="/Home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
