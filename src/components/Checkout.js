import React from "react";
import { useStateValue } from "../reducers/StateProvider";
import ProductCart from "./ProductCart";
import "../css/carrito.css";
import Subtotal from "./Subtotal";
import { useTranslation } from "react-i18next";
function Checkout() {
  
  const [t] = useTranslation("common");
  const [{ basket }] = useStateValue();
  console.log({basket})
  return (
    <div className="checkout">
      <section>
      <div className="checkout_left">
        {basket.length === 0 ? (
          <div className="vacio">
            <h2 className="checkout_title">{t("carrito.principal")}</h2>
            <p className="checkout_title">{t("carrito.cesta")}</p>
            <img
              className="carrito"
              src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTExLjM0MyA1MTEuMzQzIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMS4zNDMgNTExLjM0MyIgd2lkdGg9IjUxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJtNDkwLjMzNCAxMDYuNjY4aC0zOTkuODA4bC01Ljk0My02Ni4yMDdjLS45NzItMTAuODI3LTEwLjA0Ni0xOS4xMjMtMjAuOTE2LTE5LjEyM2gtNDIuNjY3Yy0xMS41OTggMC0yMSA5LjQwMi0yMSAyMXM5LjQwMiAyMSAyMSAyMWgyMy40NjhjMTIuODI1IDE0Mi44ODItMjAuMzIxLTIyNi40MTUgMjQuMTUzIDI2OS4wODkgMS43MTQgMTkuMzk0IDEyLjE5MyA0MC40MzkgMzAuMjQ1IDU0LjczOS0zMi41NDcgNDEuNTY0LTIuODA5IDEwMi44MzkgNTAuMTM0IDEwMi44MzkgNDMuOTQyIDAgNzQuOTM1LTQzLjgyNiA1OS44NjYtODUuMzM0aDExNC45MzZjLTE1LjA1IDQxLjQ1NSAxNS44NzYgODUuMzM0IDU5Ljg2NiA4NS4zMzQgMzUuMTA2IDAgNjMuNjY3LTI4LjU2MSA2My42NjctNjMuNjY3cy0yOC41NjEtNjMuNjY3LTYzLjY2Ny02My42NjdoLTIzNC41MjZjLTE1Ljk1MiAwLTI5Ljg1My05LjYyNC0zNS44NTMtMjMuNjQ2bDMzNS42MDgtMTkuNzI0YzkuMTYyLS41MzggMTYuOTE0LTYuOTY2IDE5LjE0MS0xNS44N2w0Mi42Ny0xNzAuNjdjMy4zMDgtMTMuMjM0LTYuNzEtMjYuMDkzLTIwLjM3NC0yNi4wOTN6bS0zNDEuMzM0IDM0MS4zMzdjLTExLjk0NiAwLTIxLjY2Ni05LjcyLTIxLjY2Ni0yMS42NjdzOS43Mi0yMS42NjcgMjEuNjY2LTIxLjY2N2MxMS45NDcgMCAyMS42NjcgOS43MiAyMS42NjcgMjEuNjY3cy05LjcyIDIxLjY2Ny0yMS42NjcgMjEuNjY3em0yMzQuNjY3IDBjLTExLjk0NyAwLTIxLjY2Ny05LjcyLTIxLjY2Ny0yMS42NjdzOS43Mi0yMS42NjcgMjEuNjY3LTIxLjY2NyAyMS42NjcgOS43MiAyMS42NjcgMjEuNjY3LTkuNzIgMjEuNjY3LTIxLjY2NyAyMS42Njd6bTQ3LjM2Ni0xNjkuNzI2LTMyMy4zOTcgMTkuMDA1LTEzLjM0LTE0OC42MTdoMzY5LjE0MnoiLz48L3N2Zz4="
            />
          </div>
        ) : (
          <div>
            <h2 className="shoppingbaskettitle">Tus artículos</h2>
            {basket.map((item) => (
              <ProductCart
                id={item.id}
                nombre={item.nombre}
                imagen={item.imagen}
                stock={item.stock}
                precio={item.precio}
                descripcion={item.descripcion}
                cantidad={item.cantidad}
              />
            ))}
          </div>
        )}
      </div>
      </section>
      <section className="sectionright">
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
      </section>
      
    </div>
  );
}
export default Checkout;
