import React from "react";
import { ImageNews } from "./StyledCurrentsAPI";
import { ElementImage } from "./StyledCurrentsAPI";

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
