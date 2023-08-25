import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.header`
  border-bottom: 1px solid #7b61ff;
  background-color: #ffffff;
  padding: 24px;
`;

export const WrapperSearchLang = styled.div`
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
`;

export const LogoLink = styled(Link)`
  cursor: pointer;
`;
export const LogoTitle = styled.h1`
  color: #7b61ff;
  font-family: Alata;
  font-size: 24px;
  font-weight: 400;
`;
