import React from "react";
import "../css/login.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { startLogin } from "../actions/auth";
import { useForm } from "../hooks/useForm";
import { useTranslation } from "react-i18next";

export const LoginScreen = () => {
  const [t, i18n] = useTranslation("common");
  const solonumeros = (e) => {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) e.preventDefault();
  };
  const dispatch = useDispatch();

  const [formValues, handleInputChange] = useForm({
    cedula: "",
    contrasenia_usuario: "",
  });

  const { cedula, contrasenia_usuario } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(startLogin(cedula, contrasenia_usuario));
    localStorage.setItem("cedula", cedula);
  };
  return (
  <div className="my-account pt-80 pb-80">
    <div className="container">
        <div className="row">
            <div className="col-12">
                <h3 className="title text-capitalize mb-30 pb-25"> Log in to your account</h3>
                <form className="log-in-form" onSubmit={handleSubmit}>
                    <div className="form-group row">
                        <label for="staticEmail" className="col-md-3 col-form-label">Email</label>
                        <div className="col-md-6">
                        <input
                            type="text"
                            id="staticEmail"
                            className="form-control"
                            value={cedula}
                            name="cedula"
                            placeholder={t("welcome.usuario")}
                            onKeyPress={ solonumeros }
                            onChange={ handleInputChange }
                            autoComplete="off"
                          />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="inputPassword" className="col-md-3 col-form-label">Password</label>
                        <div className="col-md-6">
                            <div className="input-group mb-2 mr-sm-2">
                            <input
                                type="password"
                                id="inputPassword"
                                placeholder={t("welcome.contrasenia")}
                                className="form-control"
                                value={contrasenia_usuario}
                                name="contrasenia_usuario"
                                onChange={handleInputChange}
                              />
                                <div className="input-group-prepend">
                                    <button type="button"
                                        className="input-group-text  theme-btn--dark1 btn--md show-password">show</button>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className="form-group row pb-3 text-center">
                        <div className="col-md-6 offset-md-3">
                            <div className="login-form-links">
                              <button className="sign-btn btn theme-btn--dark1 btn--md" type="submit">
                                {t("welcome.boton_inicio")}
                              </button>
                            </div>
                        </div>
                    </div>
                    <div className="form-group row text-center mb-0">
                        <div className="col-12">
                            <Link  className="border-top no-account" id="enlace" to="/registro">
                                {t("welcome.boton_registrarte")}
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  );
};
