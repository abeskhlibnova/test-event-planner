import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { db } from "../../../firebase/config";
import { getDocs, collection, orderBy, query } from "firebase/firestore";
import photo from "../../images/defaultPhoto.png";
import { FormControl, MenuItem, Select } from "@mui/material"; // Import standard Material-UI components

import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; // Change to the desired icon

import {
  MainPageWrapper,
  EventItem,
  AddEventBtn,
  EventList,
  Img,
  CategoryPriorityWrap,
  CategoryPriorityItem,
  WrapperImg,
  CategoryText,
  PriorityHighText,
  PriorityMediumText,
  PriorityLowText,
  DataWrapper,
  DataText,
  MoreInfoBtn,
  MoreInfoLink,
  TitleEvent,
  DescriptionWrapper,
  DescriptionInfo,
  Title,
} from "./MainPage.styled";

const optionsSort = [
  { value: "", label: "Sort by" },
  { value: "by name up", label: "by name ↑" },
  { value: "by name down", label: "by name ↓" },
  { value: "by data up", label: "by data ↑" },
  { value: "by data down", label: "by data ↓" },
  { value: "by priority up", label: "by priority ↑" },
  { value: "by priority down", label: "by priority ↓" },
];

export default function MainPage() {
  const [events, setEvents] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  // const [filteredEvents, setFilteredEvents] = useState([]);

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

  const handleSelectSort = (e) => {
    setSelectedSort(e.target.value);
    switch (e.target.value) {
      case "by name up":
        setEvents((prevEvents) => {
          return [...prevEvents].sort((a, b) => a.title.localeCompare(b.title));
        });
        break;
      case "by name down":
        setEvents((prevEvents) => {
          return [...prevEvents].sort((a, b) => b.title.localeCompare(a.title));
        });
        break;
      case "by data up":
        setEvents((prevEvents) => {
          return [...prevEvents].sort((a, b) => a.data < b.data);
        });
        break;
      case "by data down":
        setEvents((prevEvents) => {
          return [...prevEvents].sort((a, b) => b.data < a.data);
        });
        break;
      case "by priority up":
        setEvents((prevEvents) => {
          return [...prevEvents].sort((a, b) => {
            const priorityOrder = { High: 1, Medium: 2, Low: 3 };
            return priorityOrder[a.priority] - priorityOrder[b.priority];
          });
        });
        break;
      case "by priority down":
        setEvents((prevEvents) => {
          return [...prevEvents].sort((a, b) => {
            const priorityOrder = { Low: 1, Medium: 2, High: 3 };
            return priorityOrder[a.priority] - priorityOrder[b.priority];
          });
        });
        break;
      default:
        console.log("no sort");
    }
  };
  const filteredEvents = selectedCategory
    ? events.filter((event) => event.category === selectedCategory)
    : events;

  const handleSelectedCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const elements = filteredEvents.map(
    ({ id, title, description, data, time, locations, category, priority }) => {
      return (
        <EventItem key={id}>
          <WrapperImg>
            <Img src={photo} />
            <CategoryPriorityWrap>
              <CategoryPriorityItem>
                <CategoryText>{category}</CategoryText>
              </CategoryPriorityItem>
              <CategoryPriorityItem>
                {(priority === "High" && (
                  <PriorityHighText>{priority}</PriorityHighText>
                )) ||
                  (priority === "Low" && (
                    <PriorityLowText>{priority}</PriorityLowText>
                  )) ||
                  (priority === "Medium" && (
                    <PriorityMediumText>{priority}</PriorityMediumText>
                  ))}
              </CategoryPriorityItem>
            </CategoryPriorityWrap>
            <DataWrapper>
              <DataText>
                {data.split("-").slice(1).reverse().join(".")} at {time}{" "}
              </DataText>
              <DataText>{locations}</DataText>
            </DataWrapper>
          </WrapperImg>
          <DescriptionWrapper>
            <TitleEvent>{title}</TitleEvent>
            <DescriptionInfo>{description}</DescriptionInfo>
          </DescriptionWrapper>
          <MoreInfoBtn>
            <MoreInfoLink to={`/event/${id}`} state={{ from: location }}>
              More info
            </MoreInfoLink>
          </MoreInfoBtn>
        </EventItem>
      );
    }
  );

  return (
    <MainPageWrapper>
      <div>
        <FormControl>
          <Select
            id="sort"
            // defaultValue=""
            value={selectedSort}
            onChange={handleSelectSort}
            IconComponent={ExpandMoreIcon}
          >
            {optionsSort.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* <label htmlFor="category"></label> */}
        <FormControl>
          <Select
            id="category"
            value={selectedCategory}
            onChange={handleSelectedCategory}
          >
            <MenuItem value="">Category</MenuItem>
            <MenuItem value="Art">Art</MenuItem>
            <MenuItem value="Music">Music</MenuItem>
            <MenuItem value="Business">Business</MenuItem>
            <MenuItem value="Conference">Conference</MenuItem>
            <MenuItem value="Workshop">Workshop</MenuItem>
            <MenuItem value="Party">Party</MenuItem>
            <MenuItem value="Sport">Sport</MenuItem>
          </Select>
        </FormControl>
      </div>

      <AddEventBtn>
        <Link to="/create-event">Add new event</Link>
      </AddEventBtn>

      <Title>My events</Title>
      <EventList>{elements}</EventList>
    </MainPageWrapper>
  );
}
