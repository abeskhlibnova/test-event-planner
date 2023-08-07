import React, { useState } from "react";
import { HeaderWrapper, Title } from "./Header.styled";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import Input from "@mui/joy/Input";

import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Search from "@mui/icons-material/Search";

export default function Header() {
  const [valueInput, setValue] = useState("");

  return (
    <HeaderWrapper>
      <Title>Event Planner</Title>
      <Select
        defaultValue="UK"
        indicator={<KeyboardArrowDown />}
        sx={{
          width: 70,
          fontSize: 16,
          [`& .${selectClasses.indicator}`]: {
            transition: "0.2s",
            [`&.${selectClasses.expanded}`]: {
              transform: "rotate(-180deg)",
            },
          },
        }}
      >
        <Option value="UK">UK</Option>
        <Option value="UA">UA</Option>
      </Select>
      <Input
        placeholder="Search by keywords"
        startDecorator={<Search />}
        // value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </HeaderWrapper>
  );
}
