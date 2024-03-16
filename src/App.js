import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import { useEffect, useState } from "react";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Activation from "./pages/Activation/Activation";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Profile from "./pages/Profile/Profile";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Choice from "./pages/Choice/Choice";
import News from "./pages/News/News";
import History from "./pages/History/History";
import Cryptocurrencies from "./pages/Cryptocurrencies/Cryptocurrencies";
import ExchangeBureaus from "./pages/ExchangeBureaus/ExchangeBureaus";
import ExchangeDetail from "./pages/ExchangeDetail/ExchangeDetail";

function App() {
  const [local, setLocal] = useState();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setLocal(token);
  }, [location]);

  useEffect(() => {
    handleScroll();
  }, [location]);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="App">
      <Header local={local} />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/news" element={<News />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Choice />} />
        <Route path="register/:name" element={<Register />} />
        <Route path="activation" element={<Activation />} />
        <Route path="activation/:verify" element={<Activation />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
        <Route path="dashboard" element={<Profile />} />
        <Route path="exchange-bureaus" element={<ExchangeBureaus />} />
        <Route path="exchange-detail/:id" element={<ExchangeDetail />} />
        <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="cryptocurrency-archive" element={<History />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
