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
  const [deleteStatus, setDeleteStatus] = useState("idle");
  const { eventId } = useParams();
  //   const history = useHistory();
  const navigate = useNavigate();

  const location = useLocation();
  const goBack = location.state?.from ?? "/";

  useEffect(() => {
    getEventInfo();
  }, []);

  const getEventInfo = async () => {
    onSnapshot(doc(db, "events", eventId), (doc) => {
      setEventInfo(doc.data());
    });
  };

  const deleteEvent = async () => {
    await deleteDoc(doc(db, "events", eventId));
    navigate("/");
    setEventInfo("");
    // try {
    //   setDeleteStatus("loading");
    //   await deleteDoc(doc(db, "events", eventId));
    //   setDeleteStatus("success");
    //   navigate("/");
    // } catch (error) {
    //   console.error("Error deleting event:", error);
    //   setDeleteStatus("error");
    // }
  };
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
          <li>{eventInfo.location}</li>
          <li>
            {eventInfo.data} at {eventInfo.time}
          </li>
        </ul>
        <ul>
          <li>
            <button>Edit</button>
          </li>
          <li>
            <button onClick={deleteEvent} disabled={deleteStatus === "loading"}>
              Delete event
              {/* {deleteStatus === "loading" ? "Deleting..." : "Delete event"} */}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
