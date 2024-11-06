import React, { useCallback, useEffect, useState } from "react";
import './Form.css';
import { useTelegram } from "../../hooks/useTelegram";

const ProductList = () => {

    const [name, setName] = useState('')
    const [country, setCountry] = useState('')
    const [phone, setPhone] = useState('+7')
    const {tg} = useTelegram();

    const onSendData = useCallback(() => {
        const data = {
            name,
            country,
            phone
        }
        console.log(data)
        tg.sendData(JSON.stringify(data));
    }, [])

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        console.log("нажали")
        return() => {
            tg.offEvent('mainButtonClicked', onSendData)
        }
    },[])



    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отдать все свои данные'
        })
    },[country, phone, name])


    useEffect(() => {
        if(!country || !phone || !name){
            tg.MainButton.hide();
        }else{
            tg.MainButton.show();
        }

    },[country,phone])



    const onChangeName = (e) => {
        setName(e.target.value)
    }
    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangePhone = (e) => {
        setPhone(e.target.value)
    }


    return(
        <div className={"form"}>
            <h3>Введите ваши данные</h3>

            <input
                className={"input"} 
                placeholder="Ваше имя" 
                type="text"
                value={name}
                onChange={onChangeName}
                />

            <input 
                className={"input"} 
                placeholder="Страна" 
                type="text"
                value={country}
                onChange={onChangeCountry}
                />

            <input 
                className={"input"} 
                placeholder="Номер телефона" 
                type="text"
                value={phone}
                onChange={onChangePhone}
                />



        </div>
    )
};










export default ProductList