import React, { useState } from "react";
import { CategoryBtn } from "./EventList.styled";
import { FiFilter } from "react-icons/fi";
import photo from "../../images/photo.jpg";
import { EventItem } from "./EventList.styled";

export default function EventList() {
  const [selectedSort, setSelectedSort] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // Состояние для выбранной категории

  const handleCategoryChange = (event) => {
    setSelectedSort(event.target.value); // Обработчик выбора категории
  };

  // Массив с праздниками и их категориями (здесь можно использовать данные из API или статически задать)
  const holidays = [
    { name: "by name ↑", sort: "by name " },
    { name: "Свадьба", sort: "День свадьбы" },
    { name: "Корпоратив", sort: "Корпоратив" },
    // Другие праздники и категории
  ];

  // Фильтрация праздников по выбранной категории
  const sortEvents = selectedSort
    ? holidays.filter((holiday) => holiday.sort === selectedSort)
    : holidays;
  ////////

  const filteredHolidays = selectedCategory
    ? holidays.filter((holiday) => holiday.category === selectedCategory)
    : holidays;

  return (
    <div>
      <label htmlFor="sort"></label>
      <select id="sort" value={selectedSort} onChange={handleCategoryChange}>
        <option value="">Sort by</option>
        <option value="by name up">by name &uarr;</option>
        <option value="by name down">by name &darr;</option>
        <option value="by data up">by data &uarr;</option>
        <option value="by data down">by data &darr;</option>
        <option value="by priority up">by priority &uarr;</option>
        <option value="by priority down">by priority &darr;</option>

        {/* Добавьте другие категории */}
      </select>

      <label htmlFor="category"></label>
      <select
        id="category"
        value={selectedCategory}
        onChange={handleCategoryChange}
      >
        <option value="">Category</option>
        <option value="Art">Art</option>
        <option value="Music">Music</option>
        <option value="Business">Business</option>
        <option value="Conference">Conference</option>
        <option value="Workshop">Workshop</option>
        <option value="Party">Party</option>
        <option value="Sport">Sport</option>

        {/* Добавьте другие категории */}
      </select>

      <button> Add new event</button>

      <h3>My events</h3>

      {/* <ul>
        {sortEvents.map((holiday, index) => (
          <li key={index}>{holiday.name}</li>
        ))}
      </ul> */}

      <ul>
        <EventItem>
          <img src={photo} width="146" height="" />
          {/* ниже список категорий события которые долны приходить с бека */}
          <ul>
            <li>
              <p>art</p>
            </li>
            <li>
              <p>music</p>
            </li>
          </ul>
          {/* конец списка категорий события */}
          <p>data time location</p>
          <h4>Title event</h4>
          <p>descripton</p>
          {/* Кнопка появляется при наведении на событие */}
          <button>More info</button>
          {/* Конец кнопки */}
        </EventItem>
      </ul>
    </div>
  );
}
