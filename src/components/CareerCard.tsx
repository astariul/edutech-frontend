import React from 'react';
import { Card, Image } from '@mantine/core';


interface CareerCardProps {
  id: string;
  image: string;
  title: string;
}

const CareerCard = ({id, image, title}: CareerCardProps) => {

  return (
    <Card shadow="sm" p="lg" radius="md" withBorder>
      <Card.Section mb="sm">
        <Image
          src={image}
          height={300}
        />
      </Card.Section>
    </Card>
  );
}

export default CareerCard;
