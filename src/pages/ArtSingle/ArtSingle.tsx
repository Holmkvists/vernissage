// IMPORTS

import { IArt } from "../../models/IArt";
import { art } from "../../data/Art";
import { useParams } from "react-router-dom";

export const ArtSingle = () => {
  let params = useParams();

  console.log(params);

  const artwork = art.find(({ name }) => name === params.name);

  console.log(artwork);

  // console.log(
  //   decodeURIComponent(
  //     "http://localhost:3000/exhibition/Pink%20eyes%20-%20Color"
  //   )
  // );

  return (
    <div id="art-container">
      <h3>{artwork?.name}</h3>
      <div id="image-slider">
        <div>
          <img src={artwork?.alternateImgSrc} alt={artwork?.alternateName} />
        </div>
        <img src={artwork?.imgSrc} alt={artwork?.name} />
      </div>
      <p>{artwork?.description}</p>
    </div>
  );
};
