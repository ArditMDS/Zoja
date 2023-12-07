import styled from "styled-components";
import {themes} from "../../../styles/themes";

export const HeaderFilterStyle = styled.div `
  background-color: ${themes.color.primary.light};
  opacity: 0.3;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100% + 1px);
  z-index: 2;
`