import styled from "styled-components";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import filterCategory from "../../images/icons/filters-3.svg";

export const CategoryBtn = styled.select`
  width: 40px;
  height: 40px;
  background-image: url(${filterCategory});
  background-color: inherit;
  background-size: cover;
  /* color: red; */
`;
