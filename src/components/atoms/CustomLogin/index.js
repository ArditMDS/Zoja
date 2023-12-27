import React, {useContext} from "react";
import {CustomDiv, CustomLoginStyle, CustomRegisterStyle} from "./style";
import {AuthContext} from "../../../pages/AuthContext";
import useAuth from "../../../hooks/useAuth";

function CustomLogin() {
    const { user } = useContext(AuthContext)
    const {logout} = useAuth();

    function handleLogout() {
        logout();
    }

    return (
        <>
            {
                user.id ? (
                    <CustomDiv>
                        <CustomLoginStyle to="myAccount">
                            My account
                        </CustomLoginStyle>
                        <CustomRegisterStyle onClick={handleLogout}>
                            Logout
                        </CustomRegisterStyle>
                    </CustomDiv>
                ) : (
                    <CustomDiv>
                        <CustomLoginStyle to="login">
                            Login
                        </CustomLoginStyle>
                        <CustomRegisterStyle to='register'>
                            Sign up
                        </CustomRegisterStyle>
                    </CustomDiv>
                )
            }
        </>
    )
}

export default CustomLogin