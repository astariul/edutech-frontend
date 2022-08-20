import { Container, Center, Title } from '@mantine/core';
import CareerGrid from '../components/CareerGrid';


const Careers = () => {
  return (
    <>
      <Container pt="md" pb="md">
        <Center pt="xl" pb="xl">
          <Title order={1}>커리어 패스</Title>
        </Center>
      </Container>
      <Container pt="md" pb="md"></Container>
      <Container pt="md" pb="md">
        <CareerGrid/>
      </Container>
    </>
  );
}

export default Careers;
