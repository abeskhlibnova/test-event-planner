import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { storage, db } from "../../../firebase/config";

import { getDocs, collection, orderBy, query } from "firebase/firestore";

// import { CategoryBtn } from "./EventList.styled";
import { FiFilter } from "react-icons/fi";
import photo from "../../images/photo.jpg";
import { EventItem } from "./MainPage.styled";

export default function MainPage() {
  const [events, setEvents] = useState([]);
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredEvents, setFilteredEvents] = useState([]);

  const location = useLocation();

  useEffect(() => {
    getAllEvents();
    // handleSelectedCategory({ target: { value: selectedCategory } });
    // handleSelectedCategory();
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

      // handleSelectedCategory({ target: { value: selectedCategory } });
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
            const priorityOrder = { high: 1, medium: 2, low: 3 };
            return priorityOrder[a.priority] - priorityOrder[b.priority];
          });
        });
        break;
      case "by priority down":
        setEvents((prevEvents) => {
          return [...prevEvents].sort((a, b) => {
            const priorityOrder = { low: 1, medium: 2, high: 3 };
            return priorityOrder[a.priority] - priorityOrder[b.priority];
          });
        });
        break;
      default:
        console.log("no sort");
    }
  };

  // const handleSelectedCategory = async (e) => {
  //   const selectedValue = e.target.value;
  //   setSelectedCategory(selectedValue);

  //   if (selectedValue === "All") {
  //     setFilteredEvents(events); // Если выбрана пустая категория, показываем все события
  //   } else {
  //     const filtered = events.filter(
  //       (event) => event.category === selectedValue
  //     );
  //     setFilteredEvents(filtered);
  //   }
  // };

  const handleSelectedCategory = (e) => {
    setSelectedCategory(e.target.value);
    // console.log("Selected category:", e.target.value);
    // const selectedValue = e.target.value;
    // setSelectedCategory(selectedValue);

    // if (selectedValue === "") {
    //   setFilteredEvents(events); // Показываем все события, если выбрана пустая категория
    // } else if (selectedValue === "All") {
    //   setFilteredEvents(events); // Показываем все события при выборе "All"
    // } else {
    //   const filtered = events.filter(
    //     (event) => event.category === selectedValue
    //   );
    //   setFilteredEvents(filtered);
    // }
  };

  // const elements = filteredEvents.map(
  //   ({ id, title, description, data, time, locations, category, priority }) => {
  //     return (
  //       <EventItem key={id}>
  //         <img src={photo} width="146" height="" />
  //         {/* ниже список категорий события которые долны приходить с бека */}
  //         <ul>
  //           <li>
  //             <p>{category}</p>
  //           </li>
  //           <li>
  //             <p>{priority}</p>
  //           </li>
  //         </ul>
  //         {/* конец списка категорий события */}
  //         <p>
  //           {data} at {time} {locations}
  //         </p>
  //         <h4>{title}</h4>
  //         <p>{description}</p>
  //         {/* Кнопка появляется при наведении на событие */}
  //         <button>
  //           <Link to={`/event/${id}`} state={{ from: location }}>
  //             More info
  //           </Link>
  //         </button>
  //         {/* Конец кнопки */}
  //       </EventItem>
  //     );
  //   }
  // );

  const elements = events.map(
    ({ id, title, description, data, time, locations, category, priority }) => {
      return (
        <EventItem key={id}>
          <img src={photo} width="146" height="" />
          {/* ниже список категорий события которые долны приходить с бека */}
          <ul>
            <li>
              <p>{category}</p>
            </li>
            <li>
              <p>{priority}</p>
            </li>
          </ul>
          {/* конец списка категорий события */}
          <p>
            {data} at {time} {locations}
          </p>
          <h4>{title}</h4>
          <p>{description}</p>
          {/* Кнопка появляется при наведении на событие */}
          <button>
            <Link to={`/event/${id}`} state={{ from: location }}>
              More info
            </Link>
          </button>
          {/* Конец кнопки */}
        </EventItem>
      );
    }
  );

  return (
    <div>
      <label htmlFor="sort"></label>
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
        {/* <option value="All">All</option> */}
        <option value="Art">Art</option>
        <option value="Music">Music</option>
        <option value="Business">Business</option>
        <option value="Conference">Conference</option>
        <option value="Workshop">Workshop</option>
        <option value="Party">Party</option>
        <option value="Sport">Sport</option>
      </select>

      <button>
        <Link to="/create-event">Add new event</Link>
      </button>

      <h3>My events</h3>
      <ul>{elements}</ul>
    </div>
  );
}
