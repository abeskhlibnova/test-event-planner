import styled from "styled-components";
import { Link } from "react-router-dom";

// import Select, { selectClasses } from "@mui/joy/Select";
// import Option from "@mui/joy/Option";

// export const SelectPriority = styled(Select)``;

export const CreateEventWrapper = styled.div`
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

export const TitleInput = styled.h3`
  margin-bottom: 24px;
`;
export const FormWrapper = styled.div`
  justify-content: center;
  padding: 40px 16px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  @media screen and (min-width: 768px) {
    position: relative;

    width: 688px;
    height: 656px;
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    height: 490px;
  }
`;

export const Form = styled.form`
  @media screen and (min-width: 768px) {
    width: 688px;
    height: 600px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px 42px;
    /* grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    align-content: start; */
    /* display: grid; */
    /* grid-template-columns: repeat(2, 1fr); */
    /* grid-template-rows: repeat(2, 1fr);  */
    /* grid-gap: 10px; */

    /* gap: 20px; */
  }
  @media screen and (min-width: 1280px) {
    width: 1280px;
    height: 400px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 308px;
    margin-bottom: 8px;
  }
  @media screen and (min-width: 1280px) {
    width: 348px;
  }
`;

export const Label = styled.label`
  margin-bottom: 8px;
  color: #7b61ff;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  letter-spacing: 0.4px;
`;

export const Input = styled.input`
  margin-bottom: 20px;
  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid #aca7c3;

  &:focus {
    border-color: #7b61ff;
    outline: none;
  }
  @media screen and (min-width: 768px) {
    /* width: 308px; */
    margin-bottom: 8px;
  }
`;

export const Textarea = styled.textarea`
  min-height: 128px;
  margin-bottom: 20px;
  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid #aca7c3;

  &:focus {
    border-color: #7b61ff;
    outline: none;
  }
`;

export const Select = styled.select`
  margin-bottom: 20px;

  background-color: #ffffff;
  color: #333;
  border: 1px solid #aca7c3;
  border-radius: 8px;
  padding: 16px 12px;
  color: #3f3f3f;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;

export const Option = styled.option`
  padding: 16px 12px;
  border-radius: 8px;
  border: 1px solid #aca7c3;
  background-color: #ffffff;

  ${Select} &:not(:first-child) {
    background-color: #fff;
    color: #333;
  }
`;

export const SubmitBtn = styled.button`
  width: 100%;
  margin: 0 auto;
  padding: 12px 16px;
  border: none;
  background-color: #7b61ff;
  color: #ffffff;
  border-radius: 8px;
  box-shadow: 2px 4px 9px 0px rgba(166, 141, 174, 0.28);
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: 40px;
    right: 24px;
    width: 192px;
  }
  @media screen and (min-width: 1280px) {
    bottom: 54px;
    right: 40px;
  }
`;
