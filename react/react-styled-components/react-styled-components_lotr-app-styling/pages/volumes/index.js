import Link from "next/link";
import styled from "styled-components";
import { introduction, volumes } from "../../lib/data";

export default function Volumes() {
  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {volumes.map((volume) => (
          <li key={volume.id}>
            <StyledLink href={`/volumes/${volume.slug}`}>
              {volume.title}
            </StyledLink>
          </li>
        ))}
      </ul>
    </>
  );
}

const StyledLink = styled(Link)`
  color: unset;
`;
