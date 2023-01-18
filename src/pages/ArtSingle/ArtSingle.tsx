// IMPORTS

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IArt } from "../../models/IArt";

export const ArtSingle = () => {
  let params = useParams();

  const [artwork, setArtwork] = useState<IArt>({
    _id: 0,
    name: "",
    imgSrc: "",
    altName: "",
    altImgSrc: "",
  });

  useEffect(() => {
    fetch("http://localhost:4000/art/single-art/" + params.id)
      .then((res) => res.json())
      .then((res) => {
        setArtwork(res);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <a href="/exhibition" className="back-link">
        <i className="bi bi-arrow-left"></i>
      </a>
      <div id="art-container">
        <h2>
          {artwork.name}{" "}
          {artwork.altName !== undefined ? `// ${artwork.altName}` : ""}
        </h2>
        {artwork.altImgSrc !== undefined ? (
          <div id="image-slider">
            <div>
              <img src={artwork.altImgSrc} alt={artwork.altName} />
            </div>
            <img src={artwork.imgSrc} alt={artwork.name} />
          </div>
        ) : (
          <div id="image-container">
            <img src={artwork.imgSrc} alt={artwork.name} />
          </div>
        )}
      </div>
    </>
  );
};
