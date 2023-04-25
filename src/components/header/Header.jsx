import Image from "next/image"
import Link from "next/link"

export const Header = () => (
    <header>
   <div className="topNav">
   <Link href="/">
    <Image src={'/images/free-logo.png'} alt="logo"  width={60} height={50} />
    </Link>
    
   <nav>
    <ul>
      <li>
      <Link href="/">Home</Link>
      </li>
      <li>
      <Link href="/events">Events</Link>
      </li>
      <li>
      <Link href="/about-us">About Us</Link>
      </li>
    </ul>
    </nav>
   </div>
  </header>
)