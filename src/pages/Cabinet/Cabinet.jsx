import React, { useState } from "react";
import "./Cabinet.css";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/UI/Modal/Modal";
import { api } from "../../Api";
import Loading from "../../components/UI/Loading/Loading";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const data = [
  {
    id: 1,
  },
  {
    id: 2,
  },
];

const Cabinet = () => {
  const [modalLogou, setModalLogout] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalChange, setModalChange] = useState(false);
  const [modalDeleteApplication, setModalDeleteApplication] = useState(false);
  const [modalEditAccount, setModalEditAccount] = useState(false);
  const [visible, setVisible] = useState({
    visible1: false,
    visible2: false,
    visible3: false,
  });
  const [password, setPassword] = useState({
    old_password: "",
    new_password: "",
    confirm_password: "",
  });
  const [loading, setLoading] = useState(false);
  const [dataAccount, setDataAccount] = useState({
    name: "Beka",
    number: "0990260795",
    password: "00000000",
  });
  const navigate = useNavigate();

  const ChangeFunc = async (e) => {
    e.preventDefault();
    if (
      password.new_password !== "" &&
      password.old_password !== "" &&
      password.confirm_password !== ""
    ) {
      if (password.new_password == password.confirm_password) {
        if (
          password.new_password.length >= 8 &&
          password.confirm_password.length >= 8
        ) {
          setLoading(true);
          try {
            const token = localStorage.getItem("token");
            const response = await api.post(
              "/auth/change-password/",
              {
                old_password: password.old_password,
                new_password: password.new_password,
                confirm_password: password.confirm_password,
              },
              {
                headers: {
                  Authorization: `Token ${token}`,
                },
              }
            );
            if (response.data.response === true) {
              alert(response.data.message, "success");
              setPassword({
                ...password,
                old_password: "",
                new_password: "",
                confirm_password: "",
              });
            } else {
              alert(response.data.message, "error");
            }
            setLoading(false);
          } catch (error) {
            setLoading(false);
            console.log(error);
          }
        } else {
          alert("Новый пароль должен быть не менее 8-ми символов", "error");
        }
      } else {
        alert("Пароли не совпадают", "error");
      }
    } else {
      alert("Заполните все поля!", "error");
    }
  };

  return (
    <div className="cabinet">
      <div className="container">
        <h1>Профиль</h1>
        <div className="white_block">
          <div className="between al">
            <h2 className="title">Данные аккаунта</h2>
            <div>
              <button
                onClick={() => setModalEditAccount(true)}
                className="button_form white"
              >
                Редактировать
              </button>
            </div>
          </div>
          <div className="grid">
            <div className="col">
              <p className="text">Имя</p>
              <div>
                <button className="texting">Асанбекова Нурзида</button>
              </div>
            </div>
            <div className="col">
              <p className="text">Номер телефона</p>
              <div>
                <button className="texting">+996502800202</button>
              </div>
            </div>
            <div className="col">
              <p className="text">Пароль</p>
              <div>
                <button className="texting">**********</button>
              </div>
            </div>
            <div style={{ marginTop: 35 }} className="between">
              <p onClick={() => setModalChange(true)} className="text blue">
                Сменить пароль
              </p>
              <p onClick={() => setModalLogout(true)} className="text red">
                Выйти с аккаунта
              </p>
            </div>
          </div>
        </div>
        <div style={{ marginTop: 20 }} className="white_block">
          <div className="between al">
            <h2 className="title">Мои заявки</h2>
            <div>
              <button
                onClick={() => navigate("/post-application")}
                className="button_form"
              >
                + Опубликовать заявку
              </button>
            </div>
          </div>
          {data.map((el, index) => (
            <div className="applications_block">
              <div className="between">
                <div className="flex">
                  <h2 className="title">Заявка {index + 1}</h2>
                  <div className="sell_buy">продажа</div>
                </div>
                <div className="flex">
                  <p
                    onClick={() => setModalDeleteApplication(true)}
                    className="text red"
                  >
                    Удалить заявку
                  </p>
                  <button
                    onClick={() => navigate("/change-post-application")}
                    style={{ width: 160 }}
                    className="button_form white"
                  >
                    Редактировать
                  </button>
                </div>
              </div>
              <div className="grid_two">
                <div className="white_block">
                  <h3>Информация</h3>
                  <div className="column">
                    <div className="between">
                      <p className="text">Валюта</p>
                      <div>
                        <button className="texting">Биткоин (BTC)</button>
                      </div>
                    </div>
                    <div className="between">
                      <p className="text">Количество</p>
                      <div>
                        <button className="texting">2</button>
                      </div>
                    </div>
                    <div className="between">
                      <p className="text">По курсу</p>
                      <div>
                        <button className="texting">64.11512</button>
                      </div>
                    </div>
                    <div className="between">
                      <p className="text">Оплата</p>
                      <div>
                        <button className="texting">Банковский перевод</button>
                      </div>
                    </div>
                    <div className="between">
                      <p className="text">Место сделки</p>
                      <div>
                        <button className="texting">
                          г. Бишкек, ул. Тоголок Молдо 54/7
                        </button>
                      </div>
                    </div>
                    <div className="between">
                      <p className="text">Время</p>
                      <div>
                        <button className="texting">12:30</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="white_block">
                  <h3>Условия сделки</h3>
                  <p className="desc">
                    🚫No third party payment accepted. 🚫Do not make payment
                    from scam money. ✅Please pay I'm online. Send me Receipt
                    Name should be visible in receipt. 🚫Do not buy for any
                    illegal activities. 🚫I'm not responsible if you lose your
                    valuable money for any scam scheme. 🚫 Please don’t write in
                    Remarks any words like Crypto, Binance, USDT, BNB, ETH etc.{" "}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {modalEditAccount && (
        <Modal setModal={setModalEditAccount}>
          <h5>Редактировать данные аккаунта</h5>
          <form style={{ width: 500 }} className="form_password">
            <div className="input_box">
              <label className="label_form">Имя</label>
              <input
                className="input_form"
                value={dataAccount.name}
                onChange={(e) =>
                  setDataAccount({ ...dataAccount, name: e.target.value })
                }
                type="text"
                placeholder="ФИО"
                required
              />
            </div>
            <div className="input_box">
              <label className="label_form">Номер телефона</label>
              <input
                className="input_form disablet"
                value={dataAccount.number}
                onChange={(e) =>
                  setDataAccount({ ...dataAccount, number: e.target.value })
                }
                type="number"
                disabled={true}
                required
              />
            </div>
            <div className="input_box">
              <label className="label_form">Пароль</label>
              <input
                className="input_form disablet"
                value={dataAccount.password}
                onChange={(e) =>
                  setDataAccount({ ...dataAccount, password: e.target.value })
                }
                type="password"
                disabled={true}
                required
              />
            </div>
            <p
              onClick={() => setModalDelete(true) || setModalEditAccount(false)}
              className="text red"
            >
              Удалить аккаунт
            </p>
            <button
              onClick={() => setModalEditAccount(false)}
              style={{ marginTop: 20 }}
              className="button_form"
            >
              Сохранить изменения
            </button>
          </form>
        </Modal>
      )}
      {modalChange && (
        <Modal setModal={setModalChange}>
          <h5>Сменить пароль</h5>
          <p className="modal_text">
            Придумайте новый пароль и введите его ещё раз для потверждения
          </p>
          <form onSubmit={ChangeFunc} className="form_password">
            <div className="input_box">
              <label className="label_form">Старый пароль</label>
              <input
                className="input_form"
                value={password.old_password}
                onChange={(e) =>
                  setPassword({ ...password, old_password: e.target.value })
                }
                type={visible.visible1 ? "text" : "password"}
                placeholder="Старый пароль"
                required
              />
              <span
                className="span-icon"
                onClick={() =>
                  setVisible({ ...visible, visible1: !visible.visible1 })
                }
              >
                {visible.visible1 ? <FaEye /> : <FaEyeSlash />}{" "}
              </span>
            </div>
            <div className="input_box">
              <label className="label_form">Новый пароль</label>
              <input
                className="input_form"
                value={password.new_password}
                onChange={(e) =>
                  setPassword({ ...password, new_password: e.target.value })
                }
                type={visible.visible2 ? "text" : "password"}
                placeholder="Новый пароль"
                required
              />
              <span
                className="span-icon"
                onClick={() =>
                  setVisible({ ...visible, visible2: !visible.visible2 })
                }
              >
                {visible.visible2 ? <FaEye /> : <FaEyeSlash />}{" "}
              </span>
            </div>
            <div className="input_box">
              <label className="label_form">Повторите новый пароль</label>
              <input
                className="input_form"
                value={password.confirm_password}
                onChange={(e) =>
                  setPassword({ ...password, confirm_password: e.target.value })
                }
                type={visible.visible3 ? "text" : "password"}
                placeholder="Повторите новый пароль"
                required
              />
              <span
                className="span-icon"
                onClick={() =>
                  setVisible({ ...visible, visible3: !visible.visible3 })
                }
              >
                {visible.visible3 ? <FaEye /> : <FaEyeSlash />}{" "}
              </span>
            </div>
            <button
              style={{ marginTop: 20 }}
              disabled={loading}
              onSubmit={ChangeFunc}
              className="button_form"
            >
              {loading ? <Loading /> : "Сменить пароль"}
            </button>
          </form>
        </Modal>
      )}
      {modalDeleteApplication && (
        <Modal setModal={setModalDeleteApplication}>
          <h5>Удалить Заявку</h5>
          <p style={{ width: 340, margin: "24px 0" }} className="modal_text">
            Вы уверены, что хотите удалить заявку? После удаления все данные
            валюты не подлежат восстановлению
          </p>
          <div className="btns">
            <button className="button_form off">Отмена</button>
            <button className="button_form on">Удалить</button>
          </div>
        </Modal>
      )}
      {modalDelete && (
        <Modal setModal={setModalDelete}>
          <h5>Удалить аккаунт?</h5>
          <p style={{ width: 340, margin: "24px 0" }} className="modal_text">
            Вы уверены, что хотите удалить аккаунт? После удаления все данные
            аккаунта не подлежат восстановлению
          </p>
          <div className="btns">
            <button className="button_form off">Отмена</button>
            <button className="button_form on">Удалить</button>
          </div>
        </Modal>
      )}
      {modalLogou && (
        <Modal setModal={setModalLogout}>
          <h5>Выйти с аккаунта?</h5>
          <p style={{ width: 340, margin: "24px 0" }} className="modal_text">
            Вы уверены, что хотите выйти с аккаунта? Вы можете в любое время
            снова войти в свой аккаунт
          </p>
          <div className="btns">
            <button className="button_form off">Отмена</button>
            <button className="button_form on">Выйти</button>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Cabinet;
