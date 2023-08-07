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

export const EventItem = styled.li`
  width: 146px;
  border-radius: 12px;
  background-color: #ffffff;
  /* background: url(<path-to-image>), lightgray 50% / cover no-repeat; */

  /* sdw2 */
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;
