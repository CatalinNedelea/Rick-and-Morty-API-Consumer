import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Box = styled.div`
  border-radius: 1rem;
  box-shadow: 1rem 1.3rem 1.4rem -0.2rem grey;
  padding: 2rem;
  margin: 2rem;
  width: 9rem;
  background: white;
  border-top: ${(props) => `0.5rem solid ${props.gender}`};
  margin: 15px;
`;

export const ImageContainer = styled.img`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  border: 0.1rem solid black;
  border-radius: 10%;
  padding: 0.1rem;
  width: 9rem;
`;

export const Link = styled(NavLink)`
  color: inherit;
  text-decoration: none;
`;

export const H3 = styled.h3`
  font-weight: bold;
  text-align: center;
`;

export const H6 = styled.h6`
  font-weight: bold;
  text-align: center;
`;
