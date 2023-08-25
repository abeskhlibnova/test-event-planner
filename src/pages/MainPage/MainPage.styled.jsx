import styled from "styled-components";
import { Link } from "react-router-dom";
import filterCategory from "../../images/icons/filter.svg";
import sortEvent from "../../images/icons/sort.svg";
import Select from "react-select";
import { HiOutlinePlus } from "react-icons/hi";
import plus from "../../images/icons/plus.svg";

export const MainPageWrapper = styled.div`
  padding: 24px;
  margin: auto 10px;
  @media screen and (min-width: 1280px) {
    padding: 60px 80px;
  }
`;

export const DropdownContent = styled.div`
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
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  background-size: 24px 24px;
  background-repeat: no-repeat;
  background-position: center;

  &::-ms-expand {
    display: none;
  }
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
`;

export const AddEventLink = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  color: #ffffff;
  border-radius: 8px;
  background: #7b61ff;
  cursor: pointer;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  transition: background-color 0.2s;

  &:hover {
    background-color: #6243ff;
  }

  @media screen and (min-width: 768px) {
    width: 192px;
  }
`;

export const AddBtnText = styled.span`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    padding-left: 16px;
    font-size: 16px;
    font-weight: 500;
  }
`;

export const PlusIcon = styled(HiOutlinePlus)`
  width: 24px;
  height: 24px;
  color: #ffffff;
`;
export const Title = styled.h2`
  opacity: 0;
  /* font-family: "Poppins"; */

  @media screen and (min-width: 768px) {
    opacity: 1;
    margin-bottom: 24px;
    color: #3f3f3f;
    font-size: 32px;
    font-weight: 600;
  }
  @media screen and (min-width: 768px) {
  }
`;

export const StyledSelect = styled(Select)`
  width: 100px;
`;
