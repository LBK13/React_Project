import React from "react";

import ProductCard from "./product_Card";

const ProductList = ({ title, data, fixedPrice, btnText, setModalActive}) => {
  return (
    <section>
      <h2 className="product_list_header">{title}</h2>
      <div className="product_list_container">
        {data.map((datum) => (
          <ProductCard
            datum={datum}
            fixedPrice={fixedPrice}
            btnText={btnText}
            setModalActive={setModalActive}
            key={Math.random()}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
