import React, { useState, useEffect } from "react";
import { Link, useLocation, useParams, useNavigate } from "react-router-dom";
import { storage, db } from "../../../firebase/config";

import {
  getDocs,
  collection,
  doc,
  onSnapshot,
  deleteDoc,
} from "firebase/firestore";
import photo from "../../images/photo.jpg";

export default function EventInfo() {
  const [eventInfo, setEventInfo] = useState("");
  const { eventId } = useParams();

  const location = useLocation();
  const goBack = location.state?.from ?? "/";

  useEffect(() => {
    getEventInfo();
  }, []);

  //
  const getEventInfo = async () => {
    const unsubscribe = onSnapshot(doc(db, "events", eventId), (doc) => {
      setEventInfo(doc.data());
    });

    return () => unsubscribe(); // Отписываемся при размонтировании компонента
  };

  const deleteEvent = async () => {
    if (window.confirm("Are you sure you want to delete this event?")) {
      await deleteDoc(doc(db, "events", eventId));
      navigate(goBack);
    }
  };

  const navigate = useNavigate();

  if (!eventInfo) {
    return <div>Loading event info...</div>;
  }

  //
  // const getEventInfo = async () => {
  //   onSnapshot(doc(db, "events", eventId), (doc) => {
  //     setEventInfo(doc.data());
  //   });
  // };

  // const deleteEvent = async () => {
  //   await deleteDoc(doc(db, "events", eventId));
  // };
  return (
    <div>
      <button>
        <Link to={goBack}>&larr; Back</Link>
      </button>
      <div>
        <img src={photo} width="146" height="" />
        <ul>
          <li>{eventInfo.category}</li>
          <li>{eventInfo.priority}</li>
          <li>{eventInfo.locations}</li>
          <li>
            {eventInfo.data} at {eventInfo.time}
          </li>
        </ul>
        <ul>
          <li>
            <button>Edit</button>
          </li>
          <li>
            <button onClick={deleteEvent}>
              {/* <Link to={goBack}>Delete event</Link> */}
              Delete event
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
