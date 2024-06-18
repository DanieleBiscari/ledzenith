import { CartContext } from "./CartContext";
import { useState } from "react";

export function MeteoContextProvider({ children }) {
  const [cartList, setCartList] = useState([
    {
      title: "prodotto1",
      price: 12.45,
      quantity: 20,
      imgUrl: "",
      imgAlt: "img",
      spedition: 3.25,
      date: "123113"
    },
    {
        title: "prodotto1",
        price: 12.45,
        quantity: 20,
        imgUrl: "",
        imgAlt: "img",
        spedition: 3.25,
        date: "12311133"
      },
  ]);

  return (
    <CartContext.Provider value={{ cartList, setCartList }}>
      {children}
    </CartContext.Provider>
  );
}
