import { useState } from "react";
import { AppBox } from "./App.styled";
// import Header from "./components/Header/Header";
// import MainPage from "./pages/MainPage/MainPage";
import UserRoute from "./UserRoute";

function App() {
  return (
    <AppBox>
      <UserRoute />
    </AppBox>
  );
}

export default App;
