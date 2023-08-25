import styled from "styled-components";
import { Link } from "react-router-dom";

export const EventListWrapper = styled.ul`
  display: grid;

  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
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

  ${EventItem}:hover & {
    height: 300px;
  }
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
  /* font-family: "Poppins"; */
`;

// export const PriorityHighText = styled(CategoryText)`
//   color: #ff2b77;
// `;
// export const PriorityMediumText = styled(CategoryText)`
//   color: #e2a300;
// `;
// export const PriorityLowText = styled(CategoryText)`
//   color: #6bd475;
// `;

export const DataWrapper = styled.div`
  position: absolute;
  bottom: 2px;
  width: 272px;
  display: flex;
  justify-content: space-between;
  background-color: rgba(255, 255, 255, 0.8);
`;

export const DataText = styled.p`
  color: #7b61ff;
  font-weight: 400;
  font-size: 14px;
  line-height: 1.71;
  padding: 8px 16px;
  /* font-family: "Poppins"; */
`;

export const MoreInfoBtn = styled.button``;

export const MoreInfoLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;

  position: absolute;
  bottom: 10px;
  right: 16px;
  padding: 10px 24px;
  background-color: #7b61ff;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s, bottom 0.3s;

  ${EventItem}:hover & {
    opacity: 1;
    bottom: 10px;
  }
`;

export const DescriptionWrapper = styled.div`
  padding: 16px;
`;
export const TitleEvent = styled.h3`
  font-size: 16px;
  font-weight: 500;
  line-height: 1.5;
  margin-bottom: 16px;
  /* font-family: "Poppins"; */
`;

export const DescriptionInfo = styled.p`
  padding-bottom: 16px;
  /* font-family: "Poppins"; */

  color: #49454f;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.42;
`;
