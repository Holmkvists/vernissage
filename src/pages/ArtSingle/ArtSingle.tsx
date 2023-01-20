// IMPORTS

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IArt } from "../../models/IArt";
import { getSingleArt } from "../../api/api";
import { BackButton } from "../../components/BackButton/BackButton";

export const ArtSingle = () => {
  let params = useParams();

  const [artwork, setArtwork] = useState<IArt>({
    _id: 0,
    name: "",
    imgSrc: "",
    altName: "",
    altImgSrc: "",
  });

  // GETS SELECTED ARTWORK FROM BACKEND

  useEffect(() => {
    getSingleArt(params.id, setArtwork);
  }, []);

  return (
    <>
      <BackButton />
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
