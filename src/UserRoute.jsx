import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import SharedLayout from "./components/SharedLayout/SharedLayout";

const MainPage = lazy(() => import("./pages/MainPage/MainPage"));
const EventInfo = lazy(() => import("./pages/EventInfo/EventInfo"));
const CreateEvent = lazy(() => import("./pages/CreateEvent/CreateEvent"));
const EditEvent = lazy(() => import("./pages/EditEvent/EditEvent"));
// const NotFoundPage = lazy(() => import("pages/NotFoundPage/NotFoundPage"));

export default function UserRoute() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="create-event" element={<CreateEvent />} />
          <Route path="event/:eventId" element={<EventInfo />} />
          <Route path="edit-event/:eventId" element={<EditEvent />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
