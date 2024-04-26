import "./Card.css";
import Tag from "./Tag.js";
import Button from "./Button.js";

function Card({ user }) {
  return (
    <article className="card">
      <h2>{user.name}</h2>
      <ul className="card__taglist">
        {user.roles.map((role) => {
          return <Tag key={role} tag={role} />;
        })}
        {/* <Tag tag={user.roles[0]} /> */}
      </ul>
      <p>{user.about}</p>
      <Button>edit</Button>
      <Button buttonType="danger">invoice</Button>
    </article>
  );
}

export default Card;
