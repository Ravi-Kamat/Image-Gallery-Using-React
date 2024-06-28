import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function HyperLink({ image, id, name }) {
  return (
    <div>
      <Link to={`/photos/${id}`}>
        <div className="img-box">
          <img src={image} alt={name} />
        </div>
        <div className="title">{name}</div>
      </Link>
    </div>
  );
}

export default HyperLink;
