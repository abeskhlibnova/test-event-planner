import styled from "styled-components";
import { Link } from "react-router-dom";

export const InfoEventWrapper = styled.div`
  padding: 24px;
`;

export const BackBtn = styled.button`
  border: none;
  background-color: inherit;
  margin-bottom: 24px;
`;

export const BackLink = styled(Link)`
  text-decoration: none;
  color: #7b61ff;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 500;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
`;

export const TitleEvent = styled.h3`
  margin-bottom: 24px;

  @media screen and (min-width: 768px) {
    font-size: 32px;
    font-weight: 600;
  }
`;

export const InfoWrapper = styled.div`
  position: relative;
  margin: 0 auto;

  width: 272px;
  height: 480px;
  border-radius: 12px;
  background-color: #ffffff;
  overflow: hidden;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  @media screen and (min-width: 768px) {
    width: 688px;
    height: 504px;
  }
  @media screen and (min-width: 1280px) {
    width: 628px;
    height: 492px;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 272px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const TextWrapper = styled.div`
  padding: 24px 16px 0 16px;
`;

export const Description = styled.p`
  margin-bottom: 24px;
  color: #49454f;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.42;
`;

export const EventData = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 40px;
`;

export const EventDataItem = styled.li`
  text-align: center;
  height: 32px;
  background-color: #ffffff;
  margin-right: 12px;
  padding: 6px 12px;
  border-radius: 8px;
  box-shadow: 4px 5px 9px 0px rgba(166, 141, 174, 0.28);
`;

export const TextData = styled.p`
  color: #7b61ff;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`;

export const PriorityHighText = styled(TextData)`
  color: #ff2b77;
`;
export const PriorityMediumText = styled(TextData)`
  color: #e2a300;
`;
export const PriorityLowText = styled(TextData)`
  color: #6bd475;
`;

export const BtnList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (min-width: 768px) {
    justify-content: flex-end;
  }
`;

export const BtnItem = styled.li`
  &:not(:last-child) {
    margin-right: 16px;
  }
`;

export const BtnEdit = styled.button`
  width: 108px;
  padding: 8px 16px;
  border: 1px solid #7b61ff;
  background-color: #ffffff;
  color: #7b61ff;
  border-radius: 4px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
`;

export const BtnDelete = styled.button`
  width: 108px;
  padding: 8px 16px;
  border: 1px solid #7b61ff;
  background-color: #7b61ff;
  color: #ffffff;
  border-radius: 4px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
`;
