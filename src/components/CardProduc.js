import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import CardActions from "@material-ui/core/CardActions";
import "../css/cards.css";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
function CardProduc({ name, imagen, descripcion, precio, id }) {
  const classes = useStyles();
  const history = useHistory();
  const detalle = (e) => {
    history.push(`/DetalleProducto/${id}`);
  };
  return (
    <div className="contentido">
      <Card className={classes.item}>
        <div className="trasimg">
          <CardMedia className={classes.media} image={imagen}></CardMedia>
        </div>
        <CardContent>
          <Typography component="p">{name}</Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {descripcion}
          </Typography>
          <h3>${precio}</h3>
        </CardContent>
        <CardActions className="btnproducto">
          <Button size="small" type="submit" color="primary" onClick={detalle}>
            Ver Detalle Producto
          </Button>
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
    width: "285px",
    height: "200px",
  },
});

export default CardProduc;
