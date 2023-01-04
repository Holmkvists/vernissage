import { Link } from "react-router-dom";
import { art } from "../../data/Art";

export const Exhibition = () => {
  return (
    <div id="exhibitions-container">
      {art.map((artwork) => (
        <div className="art" key={artwork.name}>
          <Link to={"/exhibition/" + artwork.name}>
            <img src={artwork.imgSrc} alt={artwork.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};
