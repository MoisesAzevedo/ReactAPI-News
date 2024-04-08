import React from "react";
import { TitleStyle, TitleAnchor } from "./StyledCurrentsAPI";

export const Title = (props) => {
  return (
    <TitleStyle /* onClick={props.href} */ /* target="blank" */>
      <h2>
        <TitleAnchor href={props.href} target="blank">
          {props.title}
        </TitleAnchor>
      </h2>
    </TitleStyle>
  );
};
