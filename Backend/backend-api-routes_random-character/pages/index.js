import useSWR from "swr";

async function fetcher(...args) {
  const response = await fetch(...args);
  return await response.json();
}

export default function HomePage() {
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/random-character`,
    fetcher
  );

  if (error) {
    return <>Error</>;
  }

  if (isLoading) {
    return <>loading...</>;
  }
  console.log(data);

  return (
    <div>
      <li> {data.character.firstName}</li>
      <li> {data.character.lastName}</li>
      <li> {data.character.twitterName}</li>
      <li> {data.character.geohash}</li>
    </div>
  );
}
