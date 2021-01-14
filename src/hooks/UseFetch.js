import { useState, useEffect } from "react";

export const UseFetch = (url) => {
  const [datos, setDatos] = useState({
    data: null,
  });

  useEffect(() => {
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
        setDatos({
          data,
        });
      });
  }, [url]);

  return datos;
};
