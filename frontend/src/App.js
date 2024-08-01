import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Messenger from "./pages/messenger/Messenger";
import Register from "./pages/register/Register";
import Error from "./pages/error/Error";
import { MainContextProvider } from "./MainContext.js";

function App() {
  
  return (
    <>
      <MainContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/home" element={<Messenger />} />
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/error" element={<Error />} />
          </Routes>
        </BrowserRouter>
      </MainContextProvider>
    </>
  );
}

export default App;
