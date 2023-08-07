import React from "react";
import Header from "../../components/Header/Header";
import { Main } from "./MainPage.styled";
import EventList from "../../components/EventList/EventList";

export default function MainPage() {
  return (
    <Main>
      <Header />
      <EventList />
    </Main>
  );
}
