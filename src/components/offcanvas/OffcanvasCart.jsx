import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext/CartContext";

const OffcanvasCart = ({ id, ariaLabelledby }) => {
  const { cartList, setCartList } = useContext(CartContext);
  const [cartSubtotalPrice, setCartSubtotalPrice] = useState(0);
  const [cartTotalSpedition, setCartTotalSpedition] = useState(0);

  useEffect(() => {
    let total = 0;
    let spedition = 0;
    cartList.forEach((el) => {
      total += el.price * el.quantity;
      spedition += el.spedition;
    });

    setCartSubtotalPrice(total);
    setCartTotalSpedition(spedition);
  }, [cartList]);

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id={id}
      aria-labelledby={ariaLabelledby}
    >
      <div className="offcanvas-header">
        <h2 className="offcanvas-title" id={ariaLabelledby}>
          Carrello
        </h2>
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>

      <div className="offcanvas-body">
        {cartList.length === 0 ? (
          <p>il tuo carrello è momentaneamente vuoto...</p>
        ) : (
          cartList.map((el, index) => (
            <div
              key={index}
              className="d-flex flex-column gap-3 border border-1 border-dark p-3  mb-3"
            >
              <div className="d-flex">
                <img src={el.imgUrl} alt={el.imgAlt} width={20} height={20} />
                <p>{el.title}</p>
              </div>

              <div className="ms-4 d-flex flex-column gap-2">
                <div className="d-flex justify-content-between">
                  <p>Prezzo</p>
                  <p>${el.price}</p>
                </div>

                <div className="d-flex justify-content-between">
                  <label htmlFor={el.title + el.date}>Quantità</label>
                  <input
                    id={el.title + el.date}
                    type="number"
                    aria-describedby="quantità del prodotto"
                    defaultValue={el.quantity}
                    step={1}
                    min={0}
                  />
                </div>
                <div className="text-end">
                  <span role="button" className="text-danger">
                    Rimuovi
                  </span>
                </div>
              </div>
            </div>
          ))
        )}

        <div className="divider"></div>

        <div className="d-flex justify-content-between mb-4">
          <p>Subtotale</p>
          <p>
            <b>${cartSubtotalPrice}</b>
          </p>
        </div>

        <div className="d-flex justify-content-between">
          <p>Costi di spedizione</p>
          {cartTotalSpedition === 0 ? (
            <p>
              <b>Gratis</b>
            </p>
          ) : (
            <p>
              <b>${cartTotalSpedition}</b>
            </p>
          )}
        </div>

        <div className="divider"></div>

        <div className="d-flex justify-content-between">
          <h3>Totale</h3>
          <p>
            <b>${cartSubtotalPrice + cartTotalSpedition}</b>
          </p>
        </div>

        <div className="d-flex justify-content-center mt-2">
          <button className="btn btn-primary"> Vai al pagamento</button>
        </div>
      </div>
    </div>
  );
};

export default OffcanvasCart;
