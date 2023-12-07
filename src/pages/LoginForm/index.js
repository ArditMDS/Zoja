import React from "react";
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
import {themes} from "../../styles/themes";
import useAuth from "../../hooks/useAuth";

function LoginForm() {
    const { login } = useAuth()
    const onFinish = async (formValues) => {
        await login({ email: formValues.email, password: formValues.password, remember: formValues.remember })
    }
    return (
        <div>
            <MainTitle>Login</MainTitle>
            <ContainerForm>
                <CustomForm
                    layout="vertical"
                    onFinish={onFinish}
                    initialValues={{
                        email: "",
                        password: "",
                        remember: false
                    }}
                >
                    <CustomFormItem
                        name="email"
                        label="Email"
                        rules={[
                            {
                                type: 'email',
                                message: "This email is not valid",
                            },
                            {
                                required: true,
                                message: 'You need to enter an email',
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
                                message: 'You need to enter a password',
                            },
                        ]}
                    >
                        <CustomInput type="password"/>
                    </CustomFormItem>
                    <ContainerFormCheck>
                        <CustomFormItem>
                            <CustomFormItem name="remember" valuePropName="checked">
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
                <div className="g-signin2" data-onsuccess="onSignIn" data-theme="dark" data-clientid="zoja-407407"></div>
            </ContainerForm>
        </div>
    )
}

export default LoginForm