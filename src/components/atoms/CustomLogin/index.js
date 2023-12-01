import React from "react";
import {CustomDiv, CustomLoginStyle, CustomRegisterStyle} from "./style";

function CustomLogin() {
    return (
        <CustomDiv>
            <CustomLoginStyle to="login">
                Login
            </CustomLoginStyle>
            <CustomRegisterStyle to='test'>
                Register
            </CustomRegisterStyle>
        </CustomDiv>
    )
}

export default CustomLogin