import React from "react";
import NavBar from "../../components/organisms/NavBar";
import MainTitle from "../../components/atoms/MainTitle";
import {
    CustomCheckbox,
    CustomForm,
    CustomFormItem,
    CustomInput,
    CustomNormalLink,
    CustomSubmitButton
} from "../../styles/global";
import {ContainerForm, ContainerFormCheck} from "./style";

function LoginForm() {
    return (
        <div>
            <NavBar></NavBar>
            <MainTitle>Login</MainTitle>
            <ContainerForm>
                <CustomForm layout="vertical">
                    <CustomFormItem name="Email" label="Email">
                        <CustomInput type="email"/>
                    </CustomFormItem>
                    <CustomFormItem name="password"  label="Password">
                        <CustomInput type="password"/>
                    </CustomFormItem>
                    <ContainerFormCheck>
                        <CustomFormItem>
                            <CustomFormItem name="remember" valuePropName="checked" noStyle>
                                <CustomCheckbox>Remember me</CustomCheckbox>
                            </CustomFormItem>
                        </CustomFormItem>
                        <CustomNormalLink to="forgotten-password">
                            Forgot password ?
                        </CustomNormalLink>
                    </ContainerFormCheck>
                    <CustomFormItem>
                        <CustomSubmitButton type="primary" htmlType="submit" className="login-form-button">
                            Submit
                        </CustomSubmitButton>
                    </CustomFormItem>
                </CustomForm>
            </ContainerForm>
        </div>
    )
}

export default LoginForm