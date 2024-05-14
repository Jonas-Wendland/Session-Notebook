import Link from "../components/Link";

export default function HomePage({ lights }) {
  function countTurnedOnLights(lights) {
    return lights.filter((light) => light.isOn === true).length;
  }
  const countedLights = countTurnedOnLights(lights);

  return (
    <div>
      <h1>Home</h1>

      <p>{countedLights} light(s) are on.</p>
      <p>
        <Link href="/rooms">All Rooms →</Link>
      </p>
      <p>
        <Link href="/actions">Quick Actions →</Link>
      </p>
    </div>
  );
}
