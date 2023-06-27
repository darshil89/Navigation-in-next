import React from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventList from "../../components/events/event-list";
import { Fragment } from "react";
import ResultsTitle from "../../components/results-title/results-title";
import Button from "../../UI/button";
const FiltereventsPage = () => {
  const router = useRouter();
  const filterData = router.query.slug;
  console.log(filterData);

  if (!filterData) {
    return <div className="center">No Data Found</div>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  //since we got data in string then we need to convert it into number
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 20
  ) {
    return <h1 className="center">invalid filter</h1>;
  }

  const filteredEvents = getFilteredEvents({
    year: numYear,
    month: numMonth,
  });

  const date = new Date(numYear, numMonth - 1);

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <h1 className="center">No events found for the choossen event</h1>
        <div className="center">
          <Button link="/events">Show all events</Button>
        </div>
      </Fragment>
    );
  }
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents}></EventList>
    </Fragment>
  );
};

export default FiltereventsPage;
