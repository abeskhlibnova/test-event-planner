import React from "react";
import CategoryPriority from "../../components/category/CategoryPriority";
import {
  EventListWrapper,
  EventItem,
  WrapperImg,
  Img,
  CategoryPriorityWrap,
  CategoryPriorityItem,
  CategoryText,
  DataWrapper,
  DataText,
  MoreInfoLink,
  DescriptionWrapper,
  TitleEvent,
  DescriptionInfo,
} from "./EventList.styled";
import photo from "../../images/defaultPhoto.png";

const TextWithLimit = ({ text, limit }) => {
  if (text.length <= limit) {
    return <DescriptionInfo>{text}</DescriptionInfo>;
  } else {
    const truncatedText = text.substring(0, limit) + "...";
    return <DescriptionInfo title={text}>{truncatedText}</DescriptionInfo>;
  }
};

export default function EventList({ events, location }) {
  return (
    <EventListWrapper>
      {events.map(
        ({
          id,
          title,
          description,
          data,
          time,
          locations,
          category,
          priority,
        }) => (
          <EventItem key={id}>
            <WrapperImg>
              <Img src={photo} alt={title} loading="lazy" />
              <CategoryPriorityWrap>
                <CategoryPriorityItem>
                  <CategoryText>{category}</CategoryText>
                </CategoryPriorityItem>
                {priority ? <CategoryPriority item={priority} /> : <p>Non</p>}
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
              {description ? (
                <TextWithLimit text={description} limit={20} />
              ) : (
                <DescriptionInfo>No description</DescriptionInfo>
              )}
            </DescriptionWrapper>
            <MoreInfoLink to={`/event/${id}`} state={{ from: location }}>
              More info
            </MoreInfoLink>
          </EventItem>
        )
      )}
    </EventListWrapper>
  );
}
