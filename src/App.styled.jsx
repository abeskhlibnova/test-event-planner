import styled from "styled-components";
import background from "./images/background.png";
// import { FiFilter } from "react-icons/fi";

export const AppBox = styled.div`
  height: 100vh;
  /* display: flex; */
  /* width: 100vw; */
  /* background-color: white; */

  /* font-size: 20px; */

  background-attachment: local;

  background-image: url(${background});
  background-size: 100% 100%;
  padding: 24px;
`;
