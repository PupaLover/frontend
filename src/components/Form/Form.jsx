import React from "react";
import './Form.css';

const ProductList = () => {
    return(
        <div className={"form"}>
            <h3>Введите ваши данные</h3>

            <input className={"input"} placeholder="Ваше имя" type="text"/>
            <input className={"input"} placeholder="Страна" type="text"/>
            <input className={"input"} placeholder="Номер телефона" type="text"/>

        </div>
    )
};

export default ProductList