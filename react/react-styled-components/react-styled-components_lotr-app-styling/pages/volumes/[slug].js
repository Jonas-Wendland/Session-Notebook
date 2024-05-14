import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { volumes } from "../../lib/data";
import styled from "styled-components";
import ArrowLeft from "../../icons/arrow-left.svg";
import ArrowRight from "../../icons/arrow-right.svg";
import ChevronLeft from "../../icons/chevron-left.svg";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const volumeIndex = volumes.findIndex((volume) => volume.slug === slug);

  const volume = volumes[volumeIndex];
  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  const StyledLink = styled(Link)`
    color: unset;
  `;

  if (!volume) {
    return null;
  }

  const StyledDiv = styled.div`
    background-color: ${volume.color};
  `;

  const StyledImage = styled(Image)`
    display: flex;
    position: relative;
  `;

  const { title, description, cover, books } = volume;

  return (
    <>
      <ChevronLeft />
      <StyledLink href="/volumes">All Volumes</StyledLink>

      <h1>{title}</h1>
      <p>{description}</p>
      <StyledDiv>
        <ul>
          {books.map(({ ordinal, title }) => (
            <li key={title}>
              {ordinal}: <strong>{title}</strong>
            </li>
          ))}
        </ul>
        <StyledImage
          src={cover}
          alt={`Cover image of ${title}`}
          width={140}
          height={230}
        />
      </StyledDiv>
      {previousVolume ? (
        <div>
          <ArrowLeft />
          <StyledLink href={`/volumes/${previousVolume.slug}`}>
            Previous Volume: {previousVolume.title}
          </StyledLink>
        </div>
      ) : null}
      {nextVolume ? (
        <div>
          <StyledLink href={`/volumes/${nextVolume.slug}`}>
            Next Volume: {nextVolume.title}
          </StyledLink>
          <ArrowRight />
        </div>
      ) : null}
    </>
  );
}
