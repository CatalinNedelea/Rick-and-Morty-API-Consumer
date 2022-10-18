import React from "react";
import { Container, Button } from "./Pagination.style";

export function Pagination(props) {
  const { onPageChange, currentPage } = props;

  const onNext = () => {
    if (currentPage !== props.total) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage !== 1) {
      onPageChange(currentPage - 1);
    }
  };

  return (
    <Container>
      <Button onClick={onPrevious}>&lt;</Button>
      <Button onClick={onNext}>&gt;</Button>
    </Container>
  );
}
