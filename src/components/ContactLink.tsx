import { useState } from 'react';
import { Modal, Anchor } from '@mantine/core';
import GetInTouch from './Contact';

export default function ContactLink() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        title='Contact us'
        size="xl"
      >
        <GetInTouch />
      </Modal>

      <Anchor
        color="dimmed"
        key="Contact"
        onClick={() => setOpened(true)}
        size="sm"
      > 
        Contact
      </Anchor>
    </>
  );
}