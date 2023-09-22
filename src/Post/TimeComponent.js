import { parseISO, formatDistanceToNow } from "date-fns";

const TimeComponent = ({ timestamp }) => {
  let timeAgo = "";
  if (timestamp) {
    const date = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(date);
    console.log(timePeriod)
    timeAgo = `${timePeriod} ago`;
    console.log(timeAgo)
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo?timeAgo: 'time function is not working'}</i>
    </span>
  );
};

export default TimeComponent;
