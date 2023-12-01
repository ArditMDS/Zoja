import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const CustomLinkIconStyle = styled(FontAwesomeIcon) `
  color: ${(props) => (props.color)};
  width: 80px;
  height: 80px;
  z-index: 1;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0.5;
  transform: translate(-50%, -50%);
`