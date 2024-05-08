import Link from "next/link";
import { introduction } from "../../lib/data";
import { volumes } from "../../lib/data";
import { useRouter } from "next/router";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
export default function Volumes() {
  const router = useRouter();

  console.log(getRandomElement(volumes).slug);
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <Link href={`/volumes/${getRandomElement(volumes).slug}`}>
        Random Volume
      </Link>
    </>
  );
}
