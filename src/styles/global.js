import styled from "styled-components";
import {Checkbox, Form, Input} from "antd";
import {themes} from "./themes";
import {Link} from "react-router-dom";

export const CustomInput = styled(Input) `
  background-color: ${themes.color.primary.light};
  border: none;
  border-radius: 0;
  height: 40px;
`

export const CustomFormItem = styled(Form.Item) `
  width: 100%;
  .ant-form-item-label {
    font-family: Garamond;
    font-weight: bold;
  }
`

export const CustomForm = styled(Form) `
  width: 40%;
`

export const CustomCheckbox = styled(Checkbox) `
  font-family: Garamond;
  font-weight: bold;
  span.ant-checkbox-inner {
    border-radius: 0;
  }
`

export const CustomNormalLink = styled(Link) `
  color: ${themes.color.secondary.classic};
  font-family: Garamond;
  font-weight: bold;
  text-decoration: none;
  white-space: nowrap;
`

export const CustomSubmitButton = styled.button `
  background-color: ${themes.color.red.classic};
  color: ${themes.color.white.classic};
  border: none;
  padding: 10px 70px;
  font-size: 32px;
  font-family: "Playfair Display";
`

export const FormLayoutTouching = styled.div `
  display: flex;
  justify-content: space-between;
  gap: 32px;
`