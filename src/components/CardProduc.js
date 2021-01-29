import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import CardActions from "@material-ui/core/CardActions";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import "../css/cards.css";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { useStateValue } from "../reducers/StateProvider";
function CardProduc({ name, imagen, descripcion, precio,id}) { 
  const classes = useStyles();
  const history = useHistory();
  //const dispatch = useDispatch();
  const [{ basket }, dispatch] = useStateValue();
  if (basket.length===0) {
    console.log("vacio");
          
  }else{
    console.log("lleno")
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
         cantidad:1
       },
    });
     
  };
  const detalle = (e) => {
    var t0 = performance.now();
    history.push(`/DetalleProducto/${id}`);
    var t1 = performance.now();
    console.log("Tiempo para cargar la pagina detalle " + (t1 - t0) + " millisegundos.")
  };
  
  return (
    <div className="contentido">
      <Card className={classes.item} >
        <div className="trasimg">
          <CardMedia className={classes.media} image={imagen} onClick={detalle}></CardMedia>
        </div>
        <CardContent onClick={detalle}>
          <Typography component="p">{name}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {descripcion}
          </Typography>
          <h3 className="precio">${precio}</h3>
        </CardContent>
        <CardActions className="btnproducto">
          <ShoppingCartIcon onClick={addToBasket}> </ShoppingCartIcon>
        </CardActions>
      </Card>
    </div>
  );
}

const useStyles = makeStyles({
  item: {
    minWidth: "100px",
    margin: "0.6em",
    boxSizing: "border-box",
  },
  media: {
    width: "220px",
    height: "200px"
  },
});

export default CardProduc;
