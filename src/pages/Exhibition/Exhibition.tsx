import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IArt } from "../../models/IArt";
// import { art } from "../../data/art";

export const Exhibition = () => {
  const [art, setArt] = useState<IArt[]>([]);

  useEffect(() => {
    getArt();
  });

  const getArt = async () => {
    const response = await fetch("http://localhost:4000/get-art");
    const body = await response.json();

    setArt(body);
  };

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
