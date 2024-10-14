import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function MapItems({ items }) {
  return (
    <div className="container-ctg">
      {items.map((element, index) => (
        <>
          <div key={index} className="div-catg">
            <p>{element.id}</p>
            <Link to={`categories/${element.id}`}>{element.name}</Link>
          </div>
          <br />
          <br />
        </>
      ))}
    </div>
  );
}

MapItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
};
