import React, { useEffect, useState } from "react";
import "./Profile.css";
import map from "../../img/map.svg";
import number from "../../img/number.svg";
import photo1 from "../../img/photo_2.svg";
import star from "../../img/component.svg";
import eye from "../../img/eyes.svg";
import btc from "../../img/logo1.svg";
import deleted from "../../img/delete-one.svg";
import Modal from "../../components/UI/Modal/Modal";
import { useNavigate } from "react-router-dom";
import { api } from "../../Api";
import Loading from "../../components/UI/Loading/Loading";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import add_photo from "../../img/add_photo.svg";
import timoutImage from "../../img/timout.svg";

const data = [
  {
    img: btc,
    name: "Bitcoin BTC",
    cours: "64.116",
    taimer: "12:30 20.03.2024",
    time: "12:30",
  },
];

const Profile = () => {
  const [modalLogou, setModalLogout] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalChange, setModalChange] = useState(false);
  const [modalDeleteCoin, setModalDeleteCoin] = useState(false);
  const [modalEditAccount, setModalEditAccount] = useState(false);
  const [modalEditCompanies, setModalEditCompanies] = useState(false);
  const [verification, setVerification] = useState(true);
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
  const [dataCompanies, setDataCompanies] = useState({
    name: "",
    address: "",
    number: "",
    license: "",
    logo: null,
  });
  const [verificationValue, setVerificationValue] = useState({
    name: "",
    logo: null,
    desc: "",
    address: "",
    number: "",
    license: "",
    front: null,
    back: null,
  });
  const [count, setCount] = useState({
    first: false,
    second: false,
    third: false,
  });
  const [empty, setEmpty] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setVerification(true);
  }, []);

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

  useEffect(() => {
    if (dataCompanies.logo) {
      const image = dataCompanies.logo;
      const formData = new FormData();
      formData.append("photo", image);
      const dash = {
        photo: image,
      };
      console.log(dash);
    }
  }, [dataCompanies]);

  return (
    <div className="profile">
      {verification && (
        <Modal close={true} setModal={setEmpty}>
          {count.third ? (
            <h5>Ожидание проверки</h5>
          ) : (
            <>
              <h5>Заполните данные о компании</h5>
              <div className="verification_block">
                <div className="verification_box active">
                  1<p className="absolute_text active">Информация</p>
                </div>
                <div className="line active"></div>
                <div className={`verification_box ${count.first && "active"}`}>
                  2{" "}
                  <p className={`absolute_text ${count.first && "active"}`}>
                    Данные
                  </p>
                </div>
                <div className={`line ${count.first && "active"}`}></div>
                <div className={`verification_box ${count.second && "active"}`}>
                  3{" "}
                  <p className={`absolute_text ${count.second && "active"}`}>
                    Верификация
                  </p>
                </div>
              </div>
            </>
          )}
          {count.first ? (
            count.second ? (
              count.third ? (
                <form style={{ width: 360 }} className="form_password">
                  <div className="timout">
                    <img src={timoutImage} alt="" />
                    <p className="text">
                      Ваш аккаунт находится на стадии проверки. Ожидайте
                      потверждение верификации
                    </p>
                  </div>
                  <button
                    onClick={() => setVerification(false)}
                    style={{
                      marginTop: 20,
                    }}
                    className="button_form"
                  >
                    Поянтно
                  </button>
                </form>
              ) : (
                <form style={{ width: 850 }} className="form_password">
                  <h1 onClick={() => setCount({ ...count, third: true })}>
                    verification
                  </h1>

                  {/* <button
                    onClick={() => setCount({ ...count, third: true })}
                    style={{
                      marginTop: 20,
                    }}
                    className="button_form"
                  >
                    Далее
                  </button> */}
                </form>
              )
            ) : (
              <form style={{ width: 850 }} className="form_password">
                <div className="grid">
                  <div>
                    <div className="input_box">
                      <label className="label_form">Адрес</label>
                      <input
                        className="input_form"
                        value={dataCompanies.address}
                        onChange={(e) =>
                          setDataCompanies({
                            ...dataCompanies,
                            address: e.target.value,
                          })
                        }
                        type="text"
                        placeholder="Адрес"
                        required
                      />
                    </div>
                    <div className="input_box">
                      <label className="label_form">Номер телефона</label>
                      <input
                        className="input_form"
                        value={dataCompanies.number}
                        onChange={(e) =>
                          setDataCompanies({
                            ...dataCompanies,
                            number: e.target.value,
                          })
                        }
                        type="text"
                        placeholder="Номер телефона"
                        required
                      />
                    </div>
                    <div className="input_box">
                      <label className="label_form">Лицензия</label>
                      <input
                        className="input_form"
                        value={dataCompanies.license}
                        onChange={(e) =>
                          setDataCompanies({
                            ...dataCompanies,
                            license: e.target.value,
                          })
                        }
                        type="text"
                        placeholder="Лицензия"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <div style={{ margin: 0 }} className="grid">
                      <div className="image_box">
                        <label className="label_form">Логотип компании</label>
                        <div style={{ height: 235 }} className="image_block">
                          <label style={{ width: "100%", height: "100%" }}>
                            {verificationValue.logo ? (
                              <img
                                src={
                                  verificationValue.logo &&
                                  URL.createObjectURL(verificationValue.logo)
                                }
                                alt=""
                              />
                            ) : (
                              <div className="empty_img">
                                <img src={add_photo} alt="" />
                                <div>
                                  <div className="button_form white">
                                    + Загрузить фото
                                  </div>
                                </div>
                              </div>
                            )}
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(event) =>
                                setVerificationValue({
                                  ...verificationValue,
                                  logo:
                                    event.target.files && event.target.files[0],
                                })
                              }
                              style={{ display: "none" }}
                            />
                          </label>
                        </div>
                      </div>
                      <div className="image_box">
                        <label className="label_form">Логотип компании</label>
                        <div style={{ height: 235 }} className="image_block">
                          <label style={{ width: "100%", height: "100%" }}>
                            {verificationValue.logo ? (
                              <img
                                src={
                                  verificationValue.logo &&
                                  URL.createObjectURL(verificationValue.logo)
                                }
                                alt=""
                              />
                            ) : (
                              <div className="empty_img">
                                <img src={add_photo} alt="" />
                                <div>
                                  <div className="button_form white">
                                    + Загрузить фото
                                  </div>
                                </div>
                              </div>
                            )}
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(event) =>
                                setVerificationValue({
                                  ...verificationValue,
                                  logo:
                                    event.target.files && event.target.files[0],
                                })
                              }
                              style={{ display: "none" }}
                            />
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setCount({ ...count, second: true })}
                  style={{
                    marginTop: 20,
                  }}
                  className="button_form"
                >
                  Далее
                </button>
              </form>
            )
          ) : (
            <form style={{ width: 850 }} className="form_password">
              {" "}
              <div className="grid">
                {" "}
                <div>
                  <div className="input_box">
                    <label className="label_form">Название компании</label>
                    <input
                      className="input_form"
                      value={dataCompanies.name}
                      onChange={(e) =>
                        setDataCompanies({
                          ...dataCompanies,
                          name: e.target.value,
                        })
                      }
                      type="text"
                      placeholder="Название компании"
                      required
                    />
                  </div>
                  <div className="image_box">
                    <label className="label_form">Логотип компании</label>
                    <div className="image_block">
                      <label style={{ width: "100%", height: "100%" }}>
                        {verificationValue.logo ? (
                          <img
                            src={
                              verificationValue.logo &&
                              URL.createObjectURL(verificationValue.logo)
                            }
                            alt=""
                          />
                        ) : (
                          <div className="empty_img">
                            <img src={add_photo} alt="" />
                            <div>
                              <div className="button_form white">
                                + Загрузить фото
                              </div>
                            </div>
                          </div>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(event) =>
                            setVerificationValue({
                              ...verificationValue,
                              logo: event.target.files && event.target.files[0],
                            })
                          }
                          style={{ display: "none" }}
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div style={{ height: "100%" }} className="input_box">
                  <label className="label_form">
                    Условия сделки (до 500 символов)
                  </label>
                  <textarea
                    style={{ height: "100%" }}
                    className="input_form"
                    value={verificationValue.desc}
                    onChange={(e) =>
                      setVerificationValue({
                        ...verificationValue,
                        desc: e.target.value,
                      })
                    }
                    type="text"
                    placeholder="Напишите несколько предложений о вашей компании"
                    required
                  />
                </div>
              </div>
              <button
                onClick={() => setCount({ ...count, first: true })}
                style={{
                  marginTop: 20,
                }}
                className="button_form"
              >
                Далее
              </button>
            </form>
          )}
        </Modal>
      )}
      <div className="container">
        <h1>Личный кабинет</h1>
        <div className="grid d">
          <div className="white_block">
            <div style={{ margin: 0 }} className="between al">
              <h2>Данные компании</h2>
              <div>
                <button
                  onClick={() => setModalEditCompanies(true)}
                  className="button_form white"
                >
                  Редактировать
                </button>
              </div>
            </div>
            <p className="title">MSC</p>
            <div className="profile_block">
              <img className="images" src={photo1} alt="" />
              <div
                style={{ justifyContent: "space-between" }}
                className="column"
              >
                <div style={{ gap: 30 }} className="flex">
                  <p style={{ maxWidth: "50%" }} className="text">
                    <img className="icon" src={map} alt="" />
                    ул. Мичурина, 56
                  </p>
                  <div className="flex">
                    <img className="icon" src={number} alt="" />
                    <div>
                      {" "}
                      <p className="text">0 (555) 155523</p>
                      <p className="text">0 (555) 155523</p>
                    </div>
                  </div>
                </div>
                <p className="text g">
                  MSC - сервис обмена валют, поддерживающий множество
                  направлений. Работает на протяжении пяти лет, отзывы в
                  основном положительные. Обменник выделяется некоторыми
                  конкурентоспособными преимуществами.
                </p>
                <div className="between">
                  <p className="star">
                    <img className="icon" src={star} alt="" /> Лицензия НБКР
                    №5708
                  </p>
                  <p className="star">
                    <img className="icon" src={eye} alt="" />
                    234
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="white_block">
            <div className="between al">
              <h2>Данные аккаунта</h2>
              <div>
                <button
                  onClick={() => setModalEditAccount(true)}
                  className="button_form white"
                >
                  Редактировать
                </button>
              </div>
            </div>
            <div className="column">
              <div className="between">
                <p className="text g">Имя</p>
                <div className="texting">Асанбекова Нурзида</div>
              </div>
              <div className="between">
                <p className="text g">Номер телефона</p>
                <div className="texting">+996502800202</div>
              </div>
              <div className="between">
                <p className="text g">Пароль</p>
                <div className="texting">**********</div>
              </div>
              <div className="between">
                <p onClick={() => setModalLogout(true)} className="text red">
                  Выйти с аккаунта
                </p>
                <p onClick={() => setModalChange(true)} className="text blue">
                  Сменить пароль
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="white_block">
          <div className="between al">
            <h2>Мои криптовалюты</h2>
            <div>
              <button
                onClick={() => navigate("/add-coin")}
                className="button_form"
              >
                + Добавить новую валюту
              </button>
            </div>
          </div>
          <div className="offers">
            <div className="offer">
              <p className="offer_text">Валюты</p>
              <p className="offer_text">Покупка</p>
              <p className="offer_text">Продажа</p>
              <p className="offer_text">Таймер до</p>
              <p className="offer_text">Время</p>
              <p style={{ textAlign: "end" }} className="offer_text">
                Редактирование
              </p>
            </div>
            <div className="offer_blocks">
              {data.map((el, id) => (
                <div className="offer_block">
                  <div className="flex">
                    <img className="btc" src={el.img} alt="" />
                    <p className="offer_block_title">{el.name}</p>
                  </div>
                  <p className="offer_block_text">{el.cours}</p>
                  <p className="offer_block_text">{el.cours}</p>
                  <p className="offer_block_time">{el.taimer}</p>
                  <p className="offer_block_time">{el.time}</p>
                  <div className="flex">
                    <img
                      onClick={() => setModalDeleteCoin(true)}
                      className="deleted"
                      src={deleted}
                      alt=""
                    />
                    <button
                      onClick={() => navigate("/up-date-coin")}
                      className="button_form white"
                    >
                      Обновить курс
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {modalEditCompanies && (
        <Modal setModal={setModalEditCompanies}>
          <h5>Редактировать данные о компании</h5>
          <form style={{ width: 500 }} className="form_password">
            {" "}
            <div>
              {" "}
              <div className="input_box">
                <label className="label_form">Название компании</label>
                <input
                  className="input_form"
                  value={dataCompanies.name}
                  onChange={(e) =>
                    setDataCompanies({
                      ...dataCompanies,
                      name: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Название компании"
                  required
                />
              </div>
              <div className="input_box">
                <label className="label_form">Адрес</label>
                <input
                  className="input_form"
                  value={dataCompanies.address}
                  onChange={(e) =>
                    setDataCompanies({
                      ...dataCompanies,
                      address: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Адрес"
                  required
                />
              </div>
              <div className="input_box">
                <label className="label_form">Номер телефона</label>
                <input
                  className="input_form"
                  value={dataCompanies.number}
                  onChange={(e) =>
                    setDataCompanies({
                      ...dataCompanies,
                      number: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Номер телефона"
                  required
                />
              </div>
              <div className="input_box">
                <label className="label_form">Лицензия</label>
                <input
                  className="input_form"
                  value={dataCompanies.license}
                  onChange={(e) =>
                    setDataCompanies({
                      ...dataCompanies,
                      license: e.target.value,
                    })
                  }
                  type="text"
                  placeholder="Лицензия"
                  required
                />
              </div>
            </div>
            <div className="image_box">
              <label className="label_form">Логотип компании</label>
              <div className="image_block">
                <img
                  src={
                    dataCompanies.logo &&
                    URL.createObjectURL(dataCompanies.logo)
                  }
                  alt=""
                />
                <div className="absolute">
                  <label className="button_form white">
                    Изменить фото
                    <input
                      className="input_form"
                      type="file"
                      accept="image/*"
                      onChange={(event) =>
                        setDataCompanies({
                          ...dataCompanies,
                          logo: event.target.files && event.target.files[0],
                        })
                      }
                      style={{ display: "none" }}
                    />
                  </label>
                </div>
                <div className="not"></div>
              </div>
            </div>
            <button
              style={{
                marginTop: 20,
              }}
              className="button_form"
            >
              Сохранить изменения
            </button>
          </form>
        </Modal>
      )}
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
              <label className="label_form">Повторите пароль</label>
              <input
                className="input_form"
                value={password.confirm_password}
                onChange={(e) =>
                  setPassword({ ...password, confirm_password: e.target.value })
                }
                type={visible.visible3 ? "text" : "password"}
                placeholder="Повторите пароль"
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
      {modalDeleteCoin && (
        <Modal setModal={setModalDeleteCoin}>
          <h5>Удалить Bitcoin (BTC)?</h5>
          <p style={{ width: 340, margin: "24px 0" }} className="modal_text">
            Вы уверены, что хотите удалить валюту? После удаления все данные
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

export default Profile;
