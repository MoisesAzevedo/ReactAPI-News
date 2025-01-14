import React from "react";
import { ImageNews } from "./StyledCurrentsAPI.tsx";
import { ElementImage } from "./StyledCurrentsAPI.tsx";

export const Image = (props) => {
  return (
    <ImageNews>
      <ElementImage
        src={props.src}
        onClick={() => window.open(`${props.onClick}`)}
      />
    </ImageNews>
  );
};
