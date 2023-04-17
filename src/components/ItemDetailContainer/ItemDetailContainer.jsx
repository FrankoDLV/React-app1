import React from "react";
import { useState, useEffect } from "react";
import { getProductsById } from "../../asyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";

import { useParams } from "react-router";

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);

  const { itemId } = useParams();

  useEffect(() => {
    getProductsById(itemId)
      .then((response) => {
        setProduct(response);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [itemId]);

  return (
    <div>
      <ItemDetail {...product} />
          
    </div>
  );
}
