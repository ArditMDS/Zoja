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
import Footer from "../../components/organisms/Footer";
import {themes} from "../../styles/themes";
import useAuth from "../../hooks/useAuth";

function LoginForm() {
    const { login } = useAuth()
    const onFinish = async (formValues) => {
        await login({ email: formValues.email, password: formValues.password })
    }
    return (
        <div>
            <NavBar/>
            <MainTitle>Login</MainTitle>
            <ContainerForm>
                <CustomForm
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <CustomFormItem
                        name="email"
                        label="email"
                        rules={[
                            {
                                type: 'email',
                                message: "This email is not valid",
                            },
                            {
                                required: true,
                                message: 'You need an email',
                            },
                        ]}
                    >
                        <CustomInput type="email"/>
                    </CustomFormItem>
                    <CustomFormItem
                        name="password"
                        label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'You need a password',
                            },
                        ]}
                    >
                        <CustomInput type="password"/>
                    </CustomFormItem>
                    <ContainerFormCheck>
                        <CustomFormItem>
                            <CustomFormItem name="remember" valuePropName="checked" noStyle>
                                <CustomCheckbox>Remember me</CustomCheckbox>
                            </CustomFormItem>
                        </CustomFormItem>
                        <CustomNormalLink color={themes.color.secondary.classic} to="forgotten-password">
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
            <Footer/>
        </div>
    )
}

export default LoginForm