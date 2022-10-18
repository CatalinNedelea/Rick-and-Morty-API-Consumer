import React from "react";
import { Container, Title, Input } from "./Filter.style";

export function Filter(props) {
  return (
    <Container>
      <Title>Search :</Title>
      <Input
        placeholder="Name"
        value={props.charactersFiltersValue.name}
        name="name"
        id="name"
        type="text"
        onChange={(e) => props.handleFilterUpdate(e)}
      />
      <select
        placeholder="Status"
        value={props.charactersFiltersValue.status}
        name="status"
        id="status"
        onChange={(e) => props.handleFilterUpdate(e)}
      >
        <option value="">All Statuses</option>
        <option value="alive">Alive</option>
        <option value="dead">Dead</option>
        <option value="unknown">Unknown</option>
      </select>
    </Container>
  );
}
