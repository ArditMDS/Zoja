import styled from "styled-components";
import {themes} from "../../../styles/themes";

export const NavBarStyle = styled.nav `
  display: flex;
  max-width: 100%;
  height: 150px;
  justify-content: space-between;
  padding: 0 40px;
  align-items: center;
  background-color: ${themes.color.primary.classic};
  filter: drop-shadow(0px 7px 4px rgba(0, 0, 0, 0.25));
`