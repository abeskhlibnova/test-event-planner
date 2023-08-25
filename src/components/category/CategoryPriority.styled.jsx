import styled from "styled-components";

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

export const PriorityHighText = styled(CategoryText)`
  color: #ff2b77;
`;
export const PriorityMediumText = styled(CategoryText)`
  color: #e2a300;
`;
export const PriorityLowText = styled(CategoryText)`
  color: #6bd475;
`;
