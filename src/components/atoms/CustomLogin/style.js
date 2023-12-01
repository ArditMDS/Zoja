import styled from "styled-components";
import {Link} from "react-router-dom";
import {themes} from "../../../styles/themes";

export const CustomDiv = styled.div `
  display: flex;
  flex-direction: column;
  height: 100%;
`

export const CustomLoginStyle = styled(Link) `
  color: ${themes.color.white.classic};
  background-color: ${themes.color.secondary.classic};
  font-family: Garamond,serif;
  font-size: 24px;
  font-weight: bold;
  height: 100%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.6));
  z-index: 3;
`

export const CustomRegisterStyle = styled(Link) `
  color: ${themes.color.secondary.classic};
  background-color: ${themes.color.primary.classic};
  font-family: Garamond,serif;
  font-size: 24px;
  font-weight: bold;
  text-decoration: none;
  position: absolute;
  bottom: -50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  z-index: 2;
`