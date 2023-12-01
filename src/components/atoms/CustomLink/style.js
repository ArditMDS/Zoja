import styled from "styled-components";
import {Link} from "react-router-dom";

export const CustomLinkStyle = styled(Link) `
  color: ${(props) => (props.color)};
  font-family: Garamond,serif;
  font-size: 140%;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  z-index: 2;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
`