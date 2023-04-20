import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import { React } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/" element={<Register />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
