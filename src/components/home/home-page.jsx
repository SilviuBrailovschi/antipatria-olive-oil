import Image from "next/image";
import Link from "next/link";

export const HomePage = ({ data }) => (
  <div className="home-body">
    <h1 style={{ textAlign: "center" }}>Homepage</h1>
    {data.map((ev) => (
      <Link className="card" key={ev.id} href={`events/${ev.id}`}>
        <div className="image">
          <Image width={400} height={300} alt={ev.title} src={ev.image} />
        </div>
        <div className="content">
          <h2>{ev.title}</h2>
          <p>{ev.description}</p>
        </div>
      </Link>
    ))}
  </div>
);
