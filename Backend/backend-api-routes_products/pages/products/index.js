import useSWR from "swr";

async function fetcher(...args) {
  const response = await fetch(...args);
  return await response.json();
}

export default function Products() {
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/products`,
    fetcher
  );

  if (error) {
    return <>Error</>;
  }

  if (isLoading) {
    return <>loading...</>;
  }

  return (
    <ul>
      {data.map((fish) => {
        return (
          <>
            <li key={fish.id}>
              <li>
                name:
                {fish.name}
              </li>
              <li>
                description:
                {fish.description}
              </li>
            </li>
          </>
        );
      })}
    </ul>
  );
}
