import { volumes } from "../../resources/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function theFellowshipOfTheRing() {
  const currentvolume = volumes.find(
    ({ slug }) => slug === "the-fellowship-of-the-ring"
  );

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
        src="../../resources/public/images/the-fellowship-of-the-ring.png"
        height={144}
        width={144}
        alt="A picture of the cover"
      />
      <br></br>
      <Link href="./the-two-towers">Next Volume</Link>
    </div>
  );
}
