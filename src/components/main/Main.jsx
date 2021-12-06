import React, { useState, useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux"

import ProductList from "./productList";
import ProductModal from "./productList/product_Card/product_modal/ProductModal";

const Main = ({products, dispatch}) => {
  // const [products, setProducts] = useState([]);
  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    axios.get("http://localhost:3001").then((res) => {
      dispatch({
        type: "GET_PRODUCT",
        payload: res.data
      })
      console.log('ok');
    });
  }, [dispatch]);

  return (
    <main>
      {products.map(({ title, data, fixedPrice, btnText }) => (
        <ProductList
          title={title}
          data={data}
          fixedPrice={fixedPrice}
          btnText={btnText}
          setModalActive={setModalActive}
          key={Math.random()}
        />
      ))}
      <ProductModal active={modalActive} key={Math.random()} setModalActive={setModalActive} />
    </main>
  );
};

const mapStateToProps = (state) => {
  return { products: state.products}
}

const mapDispatchToProps = (dispatch) =>{
  return {dispatch: dispatch}
}


export default connect(mapStateToProps, mapDispatchToProps)(Main);
