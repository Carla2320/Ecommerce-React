import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import "../css/cards.css";
import { useStateValue } from "../reducers/StateProvider";
function CardProduc({ name, imagen, descripcion, precio, id }) {
  const history = useHistory();
  //const dispatch = useDispatch();
  const [{ basket }, dispatch] = useStateValue();
  if (basket.length === 0) {
    console.log("vacio");
  } else {
    console.log("lleno");
  }
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        nombre: name,
        imagen: imagen,
        precio: precio,
        descripcion: descripcion,
        cantidad: 1,
      },
    });
  };
  const detalle = (e) => {
    history.push(`/DetalleProducto/${id}`);
  };

  return (
    <div class="tab-content" id="pills-tabContent">
      <div
        class="tab-pane fade show active"
        id="pills-home"
        role="tabpanel"
        aria-labelledby="pills-home-tab"
      >
        <div class="product-slider-init theme1 slick-nav">
          <div class="slider-item">
            <div className="product-list mb-30">
              <div className="card product-card">
                <div className="card-body p-0">
                  <div className="media flex-column">
                    <div className="product-thumbnail position-relative">
                      <a onClick={detalle}>
                        <img
                          className="first-img"
                          src={imagen}
                          alt="thumbnail"
                          width="250"
                          height="250"
                        />
                      </a>
                    </div>
                    <div className="media-body" onClick={detalle}>
                      <div className="product-desc">
                        <h3 className="title">
                          <a>{name}</a>
                        </h3>

                        <h3 className="title">{descripcion}</h3>

                        <div className="d-flex align-items-center justify-content-between">
                          <h6 className="product-price">
                            <span className="onsale">${precio}</span>
                          </h6>

                          <button
                            className="pro-btn"
                            data-toggle="modal"
                            data-target="#add-to-cart"
                            onClick={addToBasket}
                          >
                            <i className="icon-basket"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



export default CardProduc;
