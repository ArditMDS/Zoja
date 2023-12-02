import styled from "styled-components";

export const CustomSeparateLine = styled.div `
  background-color: ${(props) => (props.color)};
  width: ${(props) => (props.width)}%;
  height: 3px;
  margin: 50px 0 0px 0;
`