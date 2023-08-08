import React, { useState, useEffect } from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import { db } from "../../../firebase/config";

import { doc, onSnapshot, deleteDoc } from "firebase/firestore";
import {
  BackBtn,
  BackLink,
  TitleEvent,
  InfoWrapper,
  Img,
  TextWrapper,
  InfoEventWrapper,
  Description,
  EventData,
  EventDataItem,
  TextData,
  BtnList,
  BtnItem,
  BtnEdit,
  BtnDelete,
  PriorityHighText,
  PriorityMediumText,
  PriorityLowText,
} from "./EventInfo.styled";
import photo from "../../images/defaultPhoto.png";

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

    return () => unsubscribe();
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

  return (
    <InfoEventWrapper>
      <BackBtn>
        <BackLink to={goBack}>&larr; &nbsp; Back</BackLink>
      </BackBtn>
      <TitleEvent>{eventInfo.title}</TitleEvent>
      <InfoWrapper>
        <Img src={photo} />
        <TextWrapper>
          <Description>{eventInfo.description}</Description>
          <EventData>
            <EventDataItem>
              <TextData>{eventInfo.category}</TextData>
            </EventDataItem>
            <EventDataItem>
              {(eventInfo.priority === "High" && (
                <PriorityHighText>{eventInfo.priority}</PriorityHighText>
              )) ||
                (eventInfo.priority === "Low" && (
                  <PriorityLowText>{eventInfo.priority}</PriorityLowText>
                )) ||
                (eventInfo.priority === "Medium" && (
                  <PriorityMediumText>{eventInfo.priority}</PriorityMediumText>
                ))}
            </EventDataItem>
            <EventDataItem>
              <TextData>{eventInfo.locations}</TextData>
            </EventDataItem>
            <EventDataItem>
              <TextData>
                {eventInfo.data.split("-").slice(1).reverse().join(".")} at
                &nbsp;
                {eventInfo.time}
              </TextData>
            </EventDataItem>
          </EventData>
          <BtnList>
            <BtnItem>
              <BtnEdit>Edit</BtnEdit>
            </BtnItem>
            <BtnItem>
              <BtnDelete onClick={deleteEvent}>Delete event</BtnDelete>
            </BtnItem>
          </BtnList>
        </TextWrapper>
      </InfoWrapper>
    </InfoEventWrapper>
  );
}
