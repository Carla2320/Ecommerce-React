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
    console.log(cedula);
    localStorage.setItem("cedula", cedula);
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <form className="col form" onSubmit={handleSubmit}>
          <section id="fondo">
            <h1>{t("welcome.inicio")}</h1>
            <div className="form-group">
              <input
                type="text"
                id="cedulas"
                className="form-control"
                value={cedula}
                name="cedula"
                placeholder={t("welcome.usuario")}
                onKeyPress={solonumeros}
                onChange={handleInputChange}
                autoComplete="off"
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                id="contrasenias"
                placeholder={t("welcome.contrasenia")}
                className="form-control"
                value={contrasenia_usuario}
                name="contrasenia_usuario"
                onChange={handleInputChange}
              />
            </div>
            <div id="btnlogin">
              <button id="ingreso" type="submit">
                {t("welcome.boton_inicio")}
              </button>
            </div>
            <div className="form-group form-check" id="divingre">
              <div className="row">
                <div className="col">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="ingre"
                  />
                </div>
                <div className="col" id="btnregister">
                  <Link id="enlace" to="/registro">
                    <button type="submit" id="registro" href="/home">
                      {t("welcome.boton_registrarte")}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </form>
      </div>
    </div>
  );
};
