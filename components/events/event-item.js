import Link from "next/link";
import classes from '../events/event-item.module.css'
import Button from "../../UI/button";
function EventItem(props) {
  const { title, image, date, location, id } = props;
  //created a new object Date to translate date into a readable form
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  });
  //transfroming address
  const formattedAddress = location.replace(",", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <img src={"/" + image} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}>
          <h1>{title}</h1>
          <div className={classes.date}>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button link={exploreLink}>Explore</Button>
        </div>
      </div>
    </li>
  ); 
}

export default EventItem;
