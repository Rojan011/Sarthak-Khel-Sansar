// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Causes from "./pages/Causes";
import Contact from "./pages/Contact";
import News from "./pages/News";
import Events from "./pages/Event";
import Login from "./pages/Login";
import UseGlobal from "./hooks/UseGlobal";
import { useEffect, useState } from "react";
import axios from "axios";
// import LoggedIn from "./components/LoggedIn";
import Register from "./components/Register";
import SignUp from "./components/SignUp";
import SignUpTo from "./components/SignUpTo";

function App() {
  const { getUser } = UseGlobal();
  const [User, setUser] = useState(getUser());
  useEffect(() => {
    window.scrollTo(0, 0);
    const checkSession = async () => {
      const res = await axios.get("http://localhost:8000/user/login", {
        withCredentials: true,
      });
      setUser(res.data.session);
    };
    checkSession();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout User={User} setUser={setUser} />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="causes" element={<Causes />} />
          <Route path="contact" element={<Contact />} />
          <Route path="news" element={<News />} />
          <Route path="events" element={<Events />} />
          <Route path="registers" element={<Register />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signupto" element={<SignUpTo />} />
          <Route
            path="login"
            element={<Login User={User} setUser={setUser} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
