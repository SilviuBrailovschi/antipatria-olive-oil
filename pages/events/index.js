import Image from "next/image";
import Link from "next/link";

const EventsPage = ({ data }) => {
  return (
    <div className="events-page">
      {data.map((ev) => (
        <Link className="card" key={ev.id} href={`/events/${ev.id}`}>
          <h2>{ev.title}</h2>
          <Image width={300} height={300} src={ev.image} alt={ev.title} />
        </Link>
      ))}
    </div>
  );
};
export default EventsPage;

export async function getStaticProps() {
  const { events_categories } = await import("data/data.json");
  return {
    props: {
      data: events_categories,
    },
  };
}
