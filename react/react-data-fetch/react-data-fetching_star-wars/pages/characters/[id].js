import useSWR from "swr";
import Card from "../../components/Card";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";

export default function Character() {
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(
    `https://swapi.dev/api/people/${id}/`
  );

  if (error) {
    return <>Error</>;
  }

  if (isLoading) {
    return <>loading...</>;
  }

  console.log(data);

  return (
    <Layout>
      <Card
        id={id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
