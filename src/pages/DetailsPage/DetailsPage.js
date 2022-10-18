import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "../../axios/axios";
import {
  MainWrapper,
  ImageContainer,
  Name,
  Parapraph,
  List,
  CharacterDisplay,
  CharacterInfo,
  Gender,
  Label,
  Line,
  Card,
  Box,
  EpisodeBox,
  SizedBox,
} from "./DetailsPage.style";
import getGender from "../../helpers";

export default function DetailsPage() {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [episodes, setEpisodes] = useState([]);
  const [location, setLocation] = useState({});
  const [origin, setOrigin] = useState({});
  const [showEpisodes, setShowEpisodes] = useState(false);

  useEffect(() => {
    if (id && Object.keys(character).length === 0) {
      axios.get("/character/" + id).then((response) => {
        setCharacter(response.data);

        let ep = [];
        response.data.episode.forEach((episode) => {
          axios.get(episode).then((response) => {
            if (!ep.includes(response.data.name)) {
              ep.push(response.data.name);
            }
          });
        });
        setEpisodes(ep);

        if (response.data.location.name !== "unknown") {
          axios.get(response.data.location.url).then((response) => {
            setLocation(response.data);
          });
        } else {
          setLocation({ name: "unknown" });
        }

        if (response.data.origin.name !== "unknown") {
          axios.get(response.data.origin.url).then((response) => {
            setOrigin(response.data);
          });
        } else {
          setOrigin({ name: "unknown" });
        }
      });
    }
  }, [id]);

  return (
    <MainWrapper>
      <Card>
        <CharacterDisplay>
          <Label>
            <Name>{character.name}</Name>
            <Gender gender={getGender(character.gender)} />
          </Label>
          <ImageContainer src={character.image} />
        </CharacterDisplay>
        <Line />
        <CharacterInfo>
          <Box>Status: {character.status}</Box>
          <Box>Species: {character.species}</Box>
          <Box>Gender: {character.gender}</Box>

          {location && location.name !== "unknown" ? (
            <div>
              <Box>Location: {location.name}</Box>
              <Box>Location Type: {location.type}</Box>
              <Box>Dimension: {location.dimension}</Box>
            </div>
          ) : (
            <Box>Location: {location.name}</Box>
          )}

          {origin && origin.name !== "unknown" ? (
            <div>
              <Box>Origin: {origin.name}</Box>
              <Box>Origin Type: {origin.type}</Box>
              <Box>Dimension: {origin.dimension}</Box>
            </div>
          ) : (
            <Box>Origin: {origin.name}</Box>
          )}
          <EpisodeBox onClick={() => setShowEpisodes((s) => !s)}>
            Episodes
          </EpisodeBox>
          <SizedBox>
            {showEpisodes && (
              <>
                {episodes.length > 0 ? (
                  episodes.map((episode, index) => (
                    <List key={index}>
                      <Parapraph>{episode}</Parapraph>
                    </List>
                  ))
                ) : (
                  <Box>No episodes</Box>
                )}
              </>
            )}
          </SizedBox>
        </CharacterInfo>
      </Card>
    </MainWrapper>
  );
}
