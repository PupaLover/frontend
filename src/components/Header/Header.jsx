import React from "react";
import Button from '../Button/Button';
import { useTelegram } from '../../hooks/useTelegram';
import './Header.css'

const Header = () => {

    const {user, onClose} = useTelegram();

    const tg = window.Telegram.WebApp;
    

    return (
        <div className={'header'}>
            <h1 className="hdrText">Привет! Уходи💅🥐</h1>

            <span className={'username'}>Zabadooj
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;