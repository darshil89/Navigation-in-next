import React from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
const EventDetailPage = () => {
  const router = useRouter();
  //this will give a concrete value when the url /events/something is there . we will get the value of something with the help of this
  //router.query.eventId

  // then we will pass this id and get the output

  const eventId = router.query.eventId;

  // passing
  const event = getEventById(eventId);

  if (!event) {
    return <h1 style={{textAlign:'center',fontFamily:'-moz-initial'}}>No event found</h1>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title}/>
      <EventLogistics 
      date={event.date}
      address={event.location}
      image={event.image}
      imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};

export default EventDetailPage;
