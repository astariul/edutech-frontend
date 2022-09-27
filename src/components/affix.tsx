import { IconArrowUp, IconMessage } from '@tabler/icons';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Transition } from '@mantine/core';

const upward = {
    in: {transform: 'translateY(150px)' },
    out: {transform: 'translateY(500px)' },
    transitionProperty: 'transform',
  };

export default function UpAffix() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix position={{ bottom: 20, right: 20 }}>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              size='xl'
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              radius="xl"
            >
              <IconMessage size={25} stroke={1.5} />
            </Button>
          )}
        </Transition>
        <Transition transition="slide-up" mounted={scroll.y > 0}>
          {(transitionStyles) => (
            <Button
              size='xl'
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
              radius="xl"
            >
              <IconArrowUp size={25} stroke={1.5} />
            </Button>
          )}
        </Transition>
        </Affix>
  );
}