import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Login from "./components/login/Login";
import "./App.css";
import {Route, Routes} from "react-router-dom";
import SignUp from "./components/signup/SignUp";
import Dashboard from "./components/dashboard/Dashboard";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
            </Routes>
        </div>
    );
}

export default App;
