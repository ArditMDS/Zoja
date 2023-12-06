import React from "react";
import MainTitle from "../../components/atoms/MainTitle";
import {ContainerForm} from "../LoginForm/style";
import {CustomForm, CustomFormItem, CustomInput, CustomSubmitButton, FormLayoutTouching} from "../../styles/global";
import {message} from "antd";
import {useNavigate} from "react-router-dom";
import routes from "../../router";

function RegisterForm() {
    const navigate = useNavigate()

    const onFinish = async(formValues) => {
        if (formValues.password === formValues.confirm_password) {
            fetch(`/api/register`, {
                method: 'POST',
                body: JSON.stringify({
                    first_name: formValues.first_name,
                    last_name: formValues.last_name,
                    auth_name: formValues.authentification_name,
                    email: formValues.email,
                    password: formValues.password,
                    roles: {role: "CLIENT"}
                })
            })
                .then((res) => res.json())
                .then((response) => {
                    if (response.code_response === 200) {
                        message.success('Mot de passe modifié')
                        navigate(routes.login.path)
                    } else if (response.code_response == 409){
                        message.error(
                            "This ID is already taken",
                        )
                    } else if (response.code_response == 400) {
                        message.error(
                            "This email is already taken",
                        )
                    } else {
                        message.error(
                            "Something went wrong, try again later",
                        )
                    }
                })
        } else {
            message.error(
                "Passwords are not identical",
            )
        }
    }

   return (
       <div>
           <MainTitle>Sign Up</MainTitle>
           <ContainerForm>
               <CustomForm
                   layout="vertical"
                   onFinish={onFinish}
                   initialValues={{
                       authentification_name: "",
                       first_name:"",
                       last_name: "",
                       email: "",
                       password: "",
                       confirm_password: ""
                   }}
                   >
                   <FormLayoutTouching>
                       <CustomFormItem name="last_name" label="Last Name">
                           <CustomInput width={10} type="text"/>
                       </CustomFormItem>
                       <CustomFormItem name="first_name" label="First Name">
                           <CustomInput type="text"/>
                       </CustomFormItem>
                   </FormLayoutTouching>
                   <CustomFormItem name="authentification_name" label="ID">
                       <CustomInput type="text"/>
                   </CustomFormItem>
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
                   <CustomFormItem name="password" label="Password">
                       <CustomInput type="password"/>
                   </CustomFormItem>
                   <CustomFormItem name="confirm_password" label="Confirm Password">
                       <CustomInput type="password"/>
                   </CustomFormItem>
                   <CustomSubmitButton>Submit</CustomSubmitButton>
               </CustomForm>
           </ContainerForm>
       </div>
   )
}

export default RegisterForm