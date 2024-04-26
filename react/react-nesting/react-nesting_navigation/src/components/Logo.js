import Image from "./Image";
import logo from "../img/logo.jpg";

export default function Logo({ href }) {
  return (
    <>
      <a href={href}>
        <Image src={logo} alt={"logo"} />
      </a>
    </>
  );
}
