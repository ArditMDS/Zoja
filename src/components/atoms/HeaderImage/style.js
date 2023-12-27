import styled from "styled-components";

export const HeaderImageStyle = styled.div `
  width: 100%;
  background-image: url("../../../assets/images/headerHomepage.svg");

  /* Set a specific height */
  min-height: 500px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`