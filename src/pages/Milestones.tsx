import { Container, Title, Text, Center } from '@mantine/core';
import { useQuery, gql } from "@apollo/client";
import { Key, ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from 'react';

const FILMS_QUERY = gql`
  {
    launchesPast(limit: 10) {
      id
      mission_name
    }
  }
`;

export default function Milestones() {
  const { data, loading, error } = useQuery(FILMS_QUERY);
  let lch;
  if (loading) {
    lch = <Title>Loading...</Title>;
  } else if (error) {
    lch = <Text color="red">{error.message}</Text>;
  } else {
    lch = <div>
      <ul>
        {data.launchesPast.map((launch: { id: Key | null | undefined; mission_name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
          <li key={launch.id}>{launch.mission_name}</li>
        ))}
      </ul>
    </div>;
  };
  

  return (
    <>
      <Container pt="xl" pb="xl" size="sm">
        <Center>
          <Title>TODO Milestones</Title>
        </Center>
        <Center>
          {lch}
        </Center>
      </Container>
    </>
  );
}