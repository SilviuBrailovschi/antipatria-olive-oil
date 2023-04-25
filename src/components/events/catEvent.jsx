import React from "react";
import Link from "next/link";
import Image from "next/image";

export const CatEvent = ({ data, titleCity }) => {
  return (
    <div className="cat_events">
      <h1>Events in {titleCity}</h1>
      <div className="content">
        {data.map((ev) => (
          <Link
            className="card"
            key={ev.id}
            href={`/events/${ev.city}/${ev.id}`}
            passHref
          >
            <Image width={300} height={200} src={ev.image} alt={ev.title} />
            <h2>{ev.title}</h2>
            <p>{ev.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};
