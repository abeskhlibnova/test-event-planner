import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../../firebase/config";
import { getDocs, collection, orderBy, query } from "firebase/firestore";
import EventList from "../../components/EventList/EventList";
import { FormControl, MenuItem, Select } from "@mui/material";
import Icon from "../../images/icons/Icon";

import {
  MainPageWrapper,
  AddEventLink,
  AddBtnText,
  PlusIcon,
  Title,
} from "./MainPage.styled";

import { handleSelectSort } from "../../helpers/SelectSort";

const optionsSort = [
  { value: "", label: "Sort by" },
  { value: "by name up", label: "by name ↑" },
  { value: "by name down", label: "by name ↓" },
  { value: "by data up", label: "by data ↑" },
  { value: "by data down", label: "by data ↓" },
  { value: "by priority up", label: "by priority ↑" },
  { value: "by priority down", label: "by priority ↓" },
];

const optionsCategory = [
  { value: "", label: "Category" },
  { value: "Art", label: "Art" },
  { value: "Music", label: "Music" },
  { value: "Business", label: "Business" },
  { value: "Conference", label: "Conference" },
  { value: "Workshop", label: "Workshop" },
  { value: "Party", label: "Party" },
  { value: "Sport", label: "Sport" },
];

export default function MainPage() {
  const [events, setEvents] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const location = useLocation();

  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = async () => {
    try {
      const eventsRef = collection(db, "events");
      const q = query(eventsRef, orderBy("data", "desc"));

      const querySnapshot = await getDocs(q);
      const eventsData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setEvents(eventsData);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const filteredEvents = selectedCategory
    ? events.filter((event) => event.category === selectedCategory)
    : events;

  const handleSelectedCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  return (
    <MainPageWrapper>
      <div>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleSelectedCategory}
        >
          {optionsCategory.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <FormControl>
        <Select
          id="sort"
          value={selectedSort}
          onChange={(e) => handleSelectSort(e.target.value, setEvents, events)}
          IconComponent={Icon}
        >
          {optionsSort.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <AddEventLink to="/create-event">
        <PlusIcon />
        <AddBtnText> Add new event</AddBtnText>
      </AddEventLink>

      <Title>My events</Title>
      <EventList events={filteredEvents} location={location} />
    </MainPageWrapper>
  );
}
