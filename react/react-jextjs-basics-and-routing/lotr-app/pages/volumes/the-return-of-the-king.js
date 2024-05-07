import { volumes } from "../../resources/lib/data";
import Link from "next/link";

export default function theReturnOfTheKing() {
  const currentvolume = volumes.find(
    ({ slug }) => slug === "the-return-of-the-king"
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
      <Link href="./the-two-towers">Previous Volume</Link>
    </div>
  );
}
