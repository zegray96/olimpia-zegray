import React, { useState, useContext } from "react";
import { Image } from "primereact/image";
import ItemCount from "../Item/ItemCount";
import { Divider } from "primereact/divider";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { convertStringToPascalCase } from "../../utils/convertString";

export default function ItemDetail({ article }) {
  const { addItem } = useContext(CartContext);
  const [showGoCart, setShowGoCart] = useState(false);
  const [outStockMsg, setOutStockMsg] = useState(null);

  const addToCart = (quantity) => {
    let msg = addItem(article, quantity);
    if (msg != "Cantidad supera el stock actual") {
      setShowGoCart(true);
    } else {
      setOutStockMsg(msg);
    }
  };

  return (
    <>
      <div className="mt-5 mb-5">
        <div className="row articleDetail">
          <div className="image col-12 md:col-6">
            <Image src={article.image_url} alt="Image" width="100%" preview />
          </div>

          <div className="content col-12 md:col-6">
            <div className="title">{convertStringToPascalCase(article.title)}</div>
            <div className="price mt-2"> $ {article.price}</div>
            <div className="description mt-4">
              <Divider />
              <p>{article.description}</p>
              <Divider />
            </div>

            <div className="mt-4">
              <span className="mr-2">Categoria:</span>
              <span className="category-tag  mr-2">
                <span>{article.category.name}</span>
              </span>
            </div>

            <div className="mt-8">
              {showGoCart ? (
                <>
                  <Button
                    className="w-full mt-3 p-button-info"
                    label="Seguir Comprando"
                    onClick={() => setShowGoCart(false)}
                  />
                  <Link to="/cart" className="no-underline">
                    <Button
                      className="w-full mt-3 p-button-success"
                      label="Finalizar Compra"
                    />
                  </Link>
                </>
              ) : (
                <>
                  <span className="mr-2">Stock Disponible:</span>
                  <span className="mr-2">
                    <span>{article.stock}</span>
                  </span>

                  {outStockMsg && (
                    <p className="p-error font-bold">{outStockMsg}</p>
                  )}

                  <ItemCount
                    addToCart={addToCart}
                    stock={article.stock}
                    initial={0}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
