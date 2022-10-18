import styled from "styled-components";

export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  border-radius: 1rem;
  border: 0.2rem solid black;
  box-shadow: 1rem 1.3rem 1.4rem -0.2rem grey;
  padding: 1.2rem;
  margin: 2rem;
  width: 60%;
  height: 80%;
  background: white;

  @media screen and (max-width: 896px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.img`
  border: 0.1rem solid black;
  border-radius: 10%;
  padding: 0.1rem;
  width: 15rem;
`;

export const Name = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const Parapraph = styled.p`
  font-size: 1.5rem;
`;

export const CharacterDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1.2rem;
  margin: 2rem;
  width: 14rem;
`;

export const CharacterInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 1rem;
  padding: 1.2rem;
  margin: 2rem;
  width: 14rem;
  background: white;
`;

export const Gender = styled.div`
  border-radius: 50%;
  width: 0.4rem;
  height: 0.4rem;
  padding: 0.4rem;
  margin: 0.5rem 0.5rem 0.5rem 0.5rem;
  background: ${(props) => ` ${props.gender}`};
`;

export const Label = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const Line = styled.div`
  border-radius: 3rem;
  border-left: 0.5rem solid black;
  height: 40rem;
  @media screen and (max-width: 896px) {
    height: 0;
    width: 100%;
    border-bottom: 0.5rem solid black;
    border-left: none;
  }
`;

export const Box = styled.div`
  border: 0.1rem groove black;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
`;

export const EpisodeBox = styled.div`
  border: 0.1rem groove black;
  font-size: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  cursor: pointer;
`;

export const List = styled.li`
  list-style-type: none;
  width: 100%;
`;

export const SizedBox = styled.div`
  border: 0.1rem groove black;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 10rem;
  overflow: auto;
  text-align: center;

`;
