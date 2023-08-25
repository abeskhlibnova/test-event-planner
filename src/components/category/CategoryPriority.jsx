import React from "react";
import {
  CategoryPriorityItem,
  PriorityHighText,
  PriorityMediumText,
  PriorityLowText,
} from "./CategoryPriority.styled";

export default function CategoryPriority({ item }) {
  return (
    <CategoryPriorityItem>
      {(item === "High" && <PriorityHighText>{item}</PriorityHighText>) ||
        (item === "Low" && <PriorityLowText>{item}</PriorityLowText>) ||
        (item === "Medium" && <PriorityMediumText>{item}</PriorityMediumText>)}
    </CategoryPriorityItem>
  );
}
