import React, { useState } from "react";
import Toolbar from "./Toolbar";

export default function LandingPage(props) {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);

    const onClickLogin = () => {
        setIsLoggedIn(true);
    }
    const onClickLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <div>
            <Toolbar
            isLoggedIn={ isLoggedIn }
            onClickLogin={ onClickLogin }
            onClickLogout={ onClickLogout}
            />
            <hr />
            <div style={{padding:10}}>
                { isLoggedIn ? <span>정준석</span> :
                <span>로그인해주세요!</span>}
            </div>
        </div>
    );
}
