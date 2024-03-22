import { useEffect } from "react";
import "./App.css";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./pages/Main/Main";
import ApplicationsDetails from "./pages/ApplicationsDetails/ApplicationsDetails";

import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Activation from "./pages/Activation/Activation";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";

import Profile from "./pages/Profile/Profile";
import AddCoin from "./pages/AddCoin/AddCoin";
import UpDateCoin from "./pages/UpDateCoin/UpDateCoin";
import Favorites from "./pages/Favorites/Favorites";

import Choice from "./pages/Choice/Choice";
import News from "./pages/News/News";
import NewsDetail from "./pages/NewsDetail/NewsDetail";
import History from "./pages/History/History";

import ExchangeBureaus from "./pages/ExchangeBureaus/ExchangeBureaus";
import ExchangeDetail from "./pages/ExchangeDetail/ExchangeDetail";
import PageCoin from "./pages/PageCoin/PageCoin";
import Cryptocurrencies from "./pages/Cryptocurrencies/Cryptocurrencies";

import Cabinet from "./pages/Cabinet/Cabinet";
import PostApplication from "./pages/PostApplication/PostApplication";
import ChangePostApplication from "./pages/ChangePostApplication/ChangePostApplication";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";


function App() {
  const location = useLocation();

  useEffect(() => {
    handleScroll();
  }, [location]);

  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const PrivateRoute = ({ element }) => {
    const token = localStorage.getItem("token");

    return token ? element : <Navigate to="/login" replace />;
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="login" element={<Login />} />
        <Route path="register" element={<Choice />} />
        <Route path="register/:name" element={<Register />} />
        <Route path="activation" element={<Activation />} />
        <Route path="activation/:verify" element={<Activation />} />
        <Route path="forgot-password" element={<ForgotPassword />} />

        <Route path="news" element={<News />} />
        <Route path="news-datail/:id" element={<NewsDetail />} />

        <Route
          path="applications-details/:id"
          element={<ApplicationsDetails />}
        />

        <Route path="dashboard" element={<Profile />} />
        <Route path="favorites" element={<Favorites />} />

        <Route path="add-coin" element={<AddCoin />} />
        <Route path="up-date-coin" element={<UpDateCoin />} />

        <Route path="cabinet" element={<Cabinet />} />

        <Route path="post-application" element={<PostApplication />} />
        <Route
          path="change-post-application"
          element={<ChangePostApplication />}
        />

        <Route path="exchange-bureaus" element={<ExchangeBureaus />} />
        <Route path="exchange-detail/:id" element={<ExchangeDetail />} />

        <Route path="cryptocurrencies" element={<Cryptocurrencies />} />
        <Route path="page-coin/:id" element={<PageCoin />} />

        <Route path="cryptocurrency-archive" element={<History />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
