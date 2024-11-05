import React from "react";
import Button from "../button/Button";
import { useTelegram } from "../../hooks/UseTelegram";

const Header = () => {

    const {user, onClose} = useTelegram();

    const tg = window.Telegram.WebApp;
    

    return (
        <div className={'header'}>
            <Button onClick={onClose}>Zaкрыть</Button>

            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;