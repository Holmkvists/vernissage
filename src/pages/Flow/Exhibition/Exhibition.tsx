import { useEffect, useState } from "react";
import { IArt } from "../../../models/IArt";
import { Link } from "react-router-dom";
// import { art } from "../../data/art";

export const Exhibition = () => {
  const [art, setArt] = useState<IArt[]>([]);

  useEffect(() => {
    if (art.length !== 0) return;

    fetch("http://localhost:4000/art/get-art")
      .then((res) => res.json())
      .then((res) => {
        setArt(res);
      })
      .catch((err) => console.error(err));
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
