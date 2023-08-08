import React from "react";
import { HeaderWrapper, Title, WrapperSearchLang } from "./Header.styled";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Input from "@mui/joy/Input";

import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Search from "@mui/icons-material/Search";

export default function Header() {
  return (
    <HeaderWrapper>
      <Title>Event Planner</Title>
      <WrapperSearchLang>
        <Select
          defaultValue="UK"
          indicator={<KeyboardArrowDown />}
          sx={{
            width: 70,
            fontSize: 16,
            fontWeight: "500",
            border: "none",
            borderRadius: 8,
            boxShadow: "2px 4px 9px 0px rgba(166, 141, 174, 0.28);",

            [`& .${selectClasses.indicator}`]: {
              width: 20,
              transition: "0.2s",
              [`&.${selectClasses.expanded}`]: {
                transform: "rotate(-180deg)",
              },
            },
          }}
        >
          <Option
            value="UK"
            sx={{
              color: "#ACA7C3",
              borderBottom: 1,
              borderBottomColor: "#ACA7C3",
              borderStyle: "solid",
              justifyContent: "flex-start",
            }}
          >
            UK
          </Option>
          <Option
            value="UA"
            sx={{
              justifyContent: "flex-start",
              color: "#ACA7C3",
              borderBottom: 1,
              borderBottomColor: "#ACA7C3",
              borderStyle: "solid",
            }}
          >
            UA
          </Option>
        </Select>
        <Input
          placeholder="Search by keywords"
          // value={value}
          startDecorator={
            <Search
              sx={{
                color: "#7B61FF",
              }}
            />
          }
          onChange={(event) => setValue(event.target.value)}
          sx={{
            fontFamily: "Poppins",
            fontWeight: "300",
            border: "none",
            borderRadius: 8,
            boxShadow: "2px 4px 9px 0px rgba(166, 141, 174, 0.28);",
          }}
        />
      </WrapperSearchLang>
    </HeaderWrapper>
  );
}
