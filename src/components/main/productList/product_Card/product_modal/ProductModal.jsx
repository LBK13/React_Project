import React from "react";
import crossImg from "../../../../../assets/images/cross.svg"
import OptionSelect from "./option_select/OptionSelect";

const ProductModal = ({ active ,setModalActive }) => {
    const closeModal = () =>{
        setModalActive(false)
        document.body.style.overflow = 'hidden scroll'
    }
  return (
      <>
    <div className={active ? "product_modal active" : "product_modal"}>
      <div className="modal_header">
        <button className="modal_close_btn" onClick={() => {
            closeModal();
        }}>
            <img src={crossImg} alt="" />
        </button>
      </div>
      <div className="modal_main">
        <div className="modal_left">
          <div className="product_img">
            <div className="img_small">
              <img
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/0a72035efc5f40459ec312a6cddc9f32_1875x1875.jpeg"
                alt="pizza"
              />
              <div className="medium_circle"></div>
              <div className="large_circle"></div>
            </div>
            <div className="img_medium active">
              <img
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/cbaea8960cf74534886d295f3450b5d8_1875x1875.jpeg"
                alt="pizza"
              />
              <div className="large_circle"></div>
            </div>
            <div className="img_big">
              <img
                src="https://dodopizza-a.akamaihd.net/static/Img/Products/00e3eb388c304f4da042bcb19f5759ad_1875x1875.jpeg"
                alt="pizza"
              />
            </div>
          </div>
        </div>
        <div className="modal_right">
          <h2 className="product_title">Пицца "Диабло"</h2>
          <OptionSelect data={['Маленькая', 'Средняя', "Большая"]}/>
          <OptionSelect data={['Традиционное', 'Тонкое']}/>
        </div>
      </div>
    </div>
    <div className="bg-dark"></div>
    </>
  );
};

export default ProductModal;
