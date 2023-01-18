import { useEffect, useState } from "react";
import { IArt } from "../../../models/IArt";
import { Link } from "react-router-dom";
import { getArt } from "../../../api/api";

export const Exhibition = () => {
  const [art, setArt] = useState<IArt[]>([]);

  useEffect(() => {
    getArt(setArt);
  }, []);

  return (
    <div id="flow-container">
      {art.map((artwork) => (
        <div className="item" key={artwork.name}>
          <Link to={"/exhibition/" + artwork._id}>
            <img src={artwork.imgSrc} alt={artwork.name} />
          </Link>
        </div>
      ))}
    </div>
  );
};
