import React, { useState, useEffect } from "react";
import "./Activation.css";
import { api } from "../../Api";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/UI/Loading/Loading";
import navigateImage from "../../img/navigate.svg";
import photo_auth from "../../img/photo_auth.svg";

const Activation = () => {
  const { verify } = useParams();
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("email");
    if (savedEmail) {
      setEmail(savedEmail);
    }
  }, []);

  const fetchData = async (e) => {
    e.preventDefault();
    if (code.length !== 6) {
      alert("Введите шестизначный код", "error");
    }
    if (code.length == 6) {
      setLoading(true);
      try {
        const activation =
          verify === "verify"
            ? "/auth/forgot-password-verify/"
            : "/auth/verify-email/";
        const response = await api.post(activation, {
          code,
          email: email,
        });
        if (response.data.response === true) {
          localStorage.setItem("email", email);
          localStorage.setItem("token", response.data.token);
        } else {
          alert(response.data.message, "error");
        }
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    }
  };

  const Again = async () => {
    const email = localStorage.getItem("email");
    try {
      const response = await api.post("/auth/re-send/", {
        email: email,
      });
      if (response.data.response == true) {
        alert(response.data.message, "success");
      } else {
        alert(response.data.message, "error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <div className="block">
          <img
            className="absolute"
            onClick={() => navigate(-1)}
            src={navigateImage}
            alt=""
          />
          <form onSubmit={fetchData}>
            <div className="login_form_head">
              <div></div>
              <div>
                <span className="text_center">Введите код</span>
                <p className="text_gray">
                  Мы отправили код на вашу электронную почту
                </p>
              </div>
            </div>
            <div className="input_box">
              <label className="label_form">Код</label>
              <input
                style={{ textAlign: "center" }}
                className="input_form"
                value={code}
                type="number"
                placeholder="Код потверждения"
                onChange={(e) => setCode(e.target.value)}
              />
            </div>
            <button
              style={{ marginBottom: 20 }}
              disabled={loading}
              onSubmit={fetchData}
              className="button_form"
            >
              {loading ? <Loading color={"#fff"} /> : "Подвердить"}
            </button>
            <p onClick={Again} className="re_send">
              Отправить снова
            </p>
          </form>
          <img className="photo_auth" src={photo_auth} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Activation;
