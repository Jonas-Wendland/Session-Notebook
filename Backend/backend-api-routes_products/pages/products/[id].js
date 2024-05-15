import { useRouter } from "next/router";
import useSWR from "swr";

async function fetcher(...args) {
  const response = await fetch(...args);
  return await response.json();
}

export default function Product() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(
    `http://localhost:3000/api/products/${id}`,
    fetcher
  );
  if (error) {
    return <>Error</>;
  }

  if (isLoading) {
    return <>loading...</>;
  }
  return (
    <>
      <li>{data.name}</li>
    </>
  );
}
