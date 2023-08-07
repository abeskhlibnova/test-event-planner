import React from "react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
// import Navbar from "../Navbar/Navbar";
// import { BoxPage } from "./SharedLayout.styled";
import Loader from "../Loader/Loader";
// import { Footer, Span } from "./SharedLayout.styled";
import Header from "../Header/Header";

export default function SharedLayout() {
  return (
    <div>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      {/* <Footer>
        <Span>Copyright 2022 &copy;</Span>
      </Footer> */}
    </div>
  );
}
