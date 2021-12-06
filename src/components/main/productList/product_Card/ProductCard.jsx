import React from "react";

const ProductCard = ({ datum, fixedPrice, btnText, setModalActive }) => {
  const { img, name, desc, price } = datum;

  const ShowModal = () => {
    setModalActive(true);
    document.body.style.overflow = "hidden";
  };
  return (
    <div className="product_card" onClick={ShowModal}>
      <main className="product_card_body">
        <img src={img} alt="" className="product_card_pic" />
        <h3 className="product_card_title">{name}</h3>
        <p className="product_card_desc">{desc}</p>
      </main>
      <footer className="product_card_footer">
        <div className="product_card_price">
          {fixedPrice ? "" : "от "}
          {price} сумов
        </div>
        <button className="product_card_btn">{btnText}</button>
      </footer>
    </div>
  );
};

export default ProductCard;
