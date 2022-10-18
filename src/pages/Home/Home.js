import React, { useState, useEffect } from "react";
import axios from "../../axios/axios";
import { useDebounce } from "../../hooks/useDebounce";
import { Card } from "../../components/card/Card";
import { Container, NoDataContainer } from "./Home.style";
import { Filter } from "../../components/filter/Filter";
import { Pagination } from "../../components/pagination/Pagination";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [info, setInfo] = useState([]);
  const [charactersFiltersValue, setCharactersFiltersValue] = useState({
    name: "",
    status: "",
  });
  const debouncedValue = useDebounce(charactersFiltersValue.name, 300);


  function handleFilterUpdate(event) {
    localStorage.setItem(
      "character-filters",
      JSON.stringify({
        ...charactersFiltersValue,
        [event.target.name]: event.target.value,
      })
    );
    setCharactersFiltersValue({
      ...charactersFiltersValue,
      [event.target.name]: event.target.value,
    });
    setCurrentPage(1);
  }

  const clearFilters = () => {
    setCharactersFiltersValue({
      name: "",
      status: "All Statuses",
    });
    localStorage.setItem(
      "character-filters",
      JSON.stringify({
        name: "",
        status: "All statuses",
      })
    );
    setCurrentPage(1);
    window.location.reload();
  };

  useEffect(() => {
    let url = "";
    if (
      debouncedValue !== "" &&
      charactersFiltersValue.status === ""
    ) {
      url = `/character/?page=${currentPage}&name=${debouncedValue}`;
    } else if (
      debouncedValue !== "" &&
      charactersFiltersValue.status !== ""
    ) {
      url = `/character/?page=${currentPage}&name=${debouncedValue}&status=${charactersFiltersValue.status}`;
    } else if (
      charactersFiltersValue.status !== "" &&
      debouncedValue === ""
    ) {
      url = `/character/?page=${currentPage}&status=${charactersFiltersValue.status}`;
    } else {
      url = `/character/?page=${currentPage}`;
    }

    axios
      .get(url)
      .then((response) => {
        setCharacters(response.data.results);
        setInfo(response.data.info);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPage, debouncedValue, charactersFiltersValue.status]);

  return (
    <div>
      <Filter
        clearFilters={clearFilters}
        handleFilterUpdate={handleFilterUpdate}
        charactersFiltersValue={charactersFiltersValue}
        setCurrentPage={setCurrentPage}
      />
      <Container>
        {characters.length ? (
          characters.map((character) => (
            <Card key={character.id} character={character} />
          ))
        ) : (
          <NoDataContainer>
            <h4>Oh no! Where are the characters? :O</h4>
          </NoDataContainer>
        )}
      </Container>
      <Pagination
        currentPage={currentPage}
        total={info.pages}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
}
