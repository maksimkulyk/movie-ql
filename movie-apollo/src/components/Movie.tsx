import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


interface Props {
  id: string;
  background: string;
}

const Movie: FC<Props> = ({ id, background }) => {

  return (
    <Container>
      <Link to={`/${id}`}>
        <Poster background={background} />
      </Link>
    </Container>
  );
};

export default Movie;

const Container = styled.div`
  height: 400px;
  border-radius: 7px;
  width: 100%;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  background-color: transparent;
`;

const Poster = styled.div<{ background: string }>`
  background-image: url(${(props) => props.background});
  height: 100%;
  width: 100%;
  background-size: cover;
  background-position: center center;
  border-radius: 7px;
`;
