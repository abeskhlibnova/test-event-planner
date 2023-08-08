import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { db } from "../../../firebase/config";
import { getDocs, collection, orderBy, query } from "firebase/firestore";
import photo from "../../images/defaultPhoto.png";

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

export default function MainPage() {
  const [events, setEvents] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

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

  const handleSelectedCategory = (e) => {
    setSelectedCategory(e.target.value);
  };

  const elements = events.map(
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
        <select id="sort" value={selectedSort} onChange={handleSelectSort}>
          <option value="">Sort by</option>
          <option value="by name up">by name &uarr;</option>
          <option value="by name down">by name &darr;</option>
          <option value="by data up">by data &uarr;</option>
          <option value="by data down">by data &darr;</option>
          <option value="by priority up">by priority &uarr;</option>
          <option value="by priority down">by priority &darr;</option>
        </select>
        <label htmlFor="category"></label>
        <select
          id="category"
          value={selectedCategory}
          onChange={handleSelectedCategory}
        >
          <option value="">Category</option>
          <option value="Art">Art</option>
          <option value="Music">Music</option>
          <option value="Business">Business</option>
          <option value="Conference">Conference</option>
          <option value="Workshop">Workshop</option>
          <option value="Party">Party</option>
          <option value="Sport">Sport</option>
        </select>
      </div>

      <AddEventBtn>
        <Link to="/create-event">Add new event</Link>
      </AddEventBtn>

      <Title>My events</Title>
      <EventList>{elements}</EventList>
    </MainPageWrapper>
  );
}
