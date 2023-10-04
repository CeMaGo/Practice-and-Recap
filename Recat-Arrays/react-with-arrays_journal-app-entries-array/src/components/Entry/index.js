import { Fragment } from "react";
import FavoriteButton from "../FavoriteButton";
import "./Entry.css";

export default function Entry({ motto, notes, date }) {
  const entries = [
    {
      id: 1000,
      date: "Feb 5, 2025",
      motto: "We are in a state of chaos",
      notes:
        "Today I learned about React State. It was fun! I can't wait to learn more.",
    },
    {
      id: 999,
      date: "Feb 4, 2025",
      motto: "Props, Props, Props",
      notes:
        "Today I learned about React Props. Mad props to everyone who understands this!",
    },
    {
      id: 998,
      date: "Feb 3, 2025",
      motto: "How to nest components online fast",
      notes:
        "Today I learned about React Components and how to nest them like a pro. Application design is so much fun!",
    },
    {
      id: 997,
      date: "Feb 2, 2025",
      motto: "I'm a React Developer",
      notes: "My React-ion when I learned about React: 😍",
    },
  ];
  return (
<Fragment>{entries.map((entry)=> (
    <article className="entry">
      <time className="entry__date">{entry.date}</time>
      <div className="entry__content">
        <div className="entry__motto-container">
          <h2 className="entry__motto">
            <q>{entry.motto}</q>
          </h2>
          <FavoriteButton />
        </div>
        <p className="entry__notes">{entry.notes}</p>
      </div>
    </article>
))}</Fragment>
  );
}
