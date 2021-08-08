import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { ISuggestion } from "../types.dt";

const GET_MOVIE = gql`
  query getMovie($id: Int!) {
    movie(id: $id) {
      title
      medium_cover_image
      description_intro
      language
      rating
    }
    suggestions(id: $id) {
      id
      title
      medium_cover_image
    }
  }
`;

const Details = () => {
  const { id } = useParams<{ id: string }>();
  const { loading, data } = useQuery(GET_MOVIE, {
    variables: { id: +id },
  });

  return (
    <>
      <Container>
        <Section>
          <Column>
            <Title>{loading ? "Loading..." : `${data.movie.title}`}</Title>
            <Subtitle>
              {data?.movie?.language} · {data?.movie?.rating}
            </Subtitle>
            <Description>{data?.movie?.description_intro}</Description>
          </Column>
          <Poster src={data?.movie?.medium_cover_image}></Poster>
        </Section>
        <Description>Нou may also be interested in:</Description>
        <List>
          {data?.suggestions?.map(
            ({ id, medium_cover_image, title }: ISuggestion) => (
              <ListItem key={id}>
                <Link to={`/${id}`}>
                  <Image src={medium_cover_image} alt={title} />
                </Link>
              </ListItem>
            )
          )}
        </List>
      </Container>
    </>
  );
};

export default Details;

const Container = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(-45deg, #d754ab, #fd723a);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  color: white;
`;

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Column = styled.div`
  margin-left: 10px;
  width: 50%;
`;

const Title = styled.h1`
  font-size: 65px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 35px;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 28px;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const Poster = styled.img`
  width: 250px;
`;

const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ListItem = styled.li`
  margin-top: 20px;
  overflow: hidden;
`;

const Image = styled.img`
  width: 75%;
`;
