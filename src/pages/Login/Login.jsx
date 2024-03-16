import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { api } from "../../Api";
import Loading from "../../components/UI/Loading/Loading";
import photo_auth from "../../img/photo_auth.svg";

const Login = () => {
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLogin, setErrorLogin] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await api.post("/auth/login/", {
        email,
        password,
      });
      localStorage.setItem("email", email);
      if (response.data.response === true) {
        const { token } = response.data;
        localStorage.setItem("token", token);
        navigate("/dashboard");
        alert(response.data.message);
      } else {
        if (response.data.message) {
          alert(response.data.message, "error");
        }
        if (response.data.isactivated == false) {
          alert(response.data.message, "error");
          navigate("/activation");
        }
        setErrorLogin(response.data);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <div className="block">
          <form onSubmit={handleSubmit}>
            <div className="login_form_head">
              <div></div>
              <span className="text_center">Войти</span>
            </div>
            <div className="input_box">
              <label className="label_form">Почта</label>
              <input
                className="input_form"
                value={email}
                type="text"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Электронная почта"
              />
              {errorLogin.email && <p className="red">{errorLogin.email}</p>}
            </div>
            <div className="input_box d">
              <label className="label_form">Пароль</label>
              <input
                className="input_form"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={visible ? "text" : "password"}
                placeholder="Введите пароль"
              />
              <span className="span-icon" onClick={() => setVisible(!visible)}>
                {visible ? <FaEye /> : <FaEyeSlash />}{" "}
              </span>
              {errorLogin.password && (
                <p className="red">{errorLogin.password}</p>
              )}
            </div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "var(--blue)",
                  fontSize: 14,
                  fontWeight: 400,
                }}
                to="/forgot-password"
              >
                Забыл(-а) пароль?
              </NavLink>
            </div>
            <button
              style={{ margin: "20px 0" }}
              onSubmit={handleSubmit}
              className="button_form"
            >
              {loading ? <Loading /> : "Войти"}
            </button>
            <p
              style={{
                textAlign: "center",
                fontSize: 14,
                fontWeight: 400,
                color: "var(--gray)",
              }}
            >
              Ещё нет аккаунта?
              <NavLink
                style={{
                  marginLeft: 5,
                  textDecoration: "none",
                  color: "var(--blue)",
                  fontSize: 14,
                  fontWeight: 400,
                }}
                to="/register"
              >
                Зарегистрироваться
              </NavLink>
            </p>
          </form>
          <img className="photo_auth" src={photo_auth} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
