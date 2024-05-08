import { volumes } from "../../resources/lib/data";
import Image from "next/image";
import Link from "next/link";

export default function theTwoTwoers() {
  const currentvolume = volumes.find(({ slug }) => slug === "the-two-towers");

  return (
    <div>
      <Link href="/">Home</Link>
      <h1>{currentvolume.title}</h1>
      <p>{currentvolume.description}</p>
      <ul>
        {currentvolume.books[0].ordinal}
        <li>{currentvolume.books[0].title}</li>
      </ul>
      <ul>
        {currentvolume.books[1].ordinal}
        <li>{currentvolume.books[1].title}</li>
      </ul>
      <Image
        src="/images/the-two-towers.png"
        height={230}
        width={144}
        alt="A picture of the cover"
      />
      <br></br>
      <Link href="/volumes/the-fellowship-of-the-ring">Previous Volume</Link>
      <br></br>
      <Link href="/volumes/the-return-of-the-king">Next Volume</Link>
    </div>
  );
}
