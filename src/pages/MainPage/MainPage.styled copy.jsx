import styled from "styled-components";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import filterCategory from "../../images/icons/filter.svg";
import sortEvent from "../../images/icons/sort.svg";

export const MainPageWrapper = styled.div`
  padding: 24px;
`;
// export const SortBtn = styled.span`
//   visibility: hidden;
//   @media screen and (min-width: 768px) {
//     visibility: visible;
//   }
// `;

export const DropdownContent = styled.div`
  /* display: none; */
  /* position: absolute; */
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 10px;
`;
export const SortBtn = styled.button`
  box-sizing: border-box;
  width: 56px;
  height: 56px;
  padding: 16px;
  border-radius: 8px;
  background-image: url(${sortEvent});
  background-color: #ffffff;
  /* sdw2 */
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: center;

  &::-ms-expand {
    display: none;
  }
  /* color: red; */
`;

export const CategoryBtn = styled.select`
  width: 56px;
  height: 56px;
  padding: 16px;
  border-radius: 8px;
  background-image: url(${filterCategory});
  background-color: #ffffff;
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: center;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  /* color: red; */
`;

export const AddEventBtn = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 8px;
  background: #7b61ff;

  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
`;
//форматирование списка//
export const EventList = styled.ul`
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr); /* Две колонки */
    gap: 20px;
  }
`;
export const EventItem = styled.li`
  position: relative;
  width: 272px;
  height: 480px;
  border-radius: 12px;
  background-color: #ffffff;
  margin-bottom: 24px;
  overflow: hidden;

  /* background: url(<path-to-image>), lightgray 50% / cover no-repeat; */

  /* sdw2 */
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);

  @media screen and (min-width: 768px) {
  }
`;

export const WrapperImg = styled.div`
  position: relative;
`;

export const Img = styled.img`
  width: 100%;
  height: 336px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const CategoryPriorityWrap = styled.ul`
  display: flex;
  position: absolute;
  top: 12px;
  left: 12px;
`;

export const CategoryPriorityItem = styled.li`
  text-align: center;
  height: 32px;
  background-color: #ffffff;
  margin-right: 12px;
  padding: 6px 12px;
  border-radius: 8px;
`;

export const CategoryText = styled.p`
  text-align: center;
  color: #7b61ff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`;

export const PriorityHighText = styled.p`
  color: #ff2b77;
`;
export const PriorityMediumText = styled.p`
  color: #e2a300;
`;
export const PriorityLowText = styled.p`
  color: #6bd475;
`;

export const DataWrapper = styled.div`
  position: absolute;
  bottom: 2px;
  width: 272px;
  display: flex;
  justify-content: space-between;
  /* padding: 8px 16px; */
  /* padding-right: 16px;
  padding-left: 16px; */
  background-color: rgba(255, 255, 255, 0.8);
`;

export const DataText = styled.p`
  color: #7b61ff;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.71;
  padding: 8px 16px;
`;

export const LocationWrapper = styled.span``;

///конец форматирования списка///
