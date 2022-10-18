import React from "react";
import { Box, ImageContainer, Link, H3, H6 } from "./Card.style";
import getGender from "../../helpers";

export function Card(props) {
  return (
      <Box gender={getGender(props.character.gender)}>
        <Link to={`/character/${props.character.id}`}>
          <ImageContainer src={props.character.image} />
          <H3>{props.character.name}</H3>
          <H6>{props.character.status}</H6>
        </Link>
      </Box>
  );
}
