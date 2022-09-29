import { IconArrowUp, IconMessage } from '@tabler/icons';
import { useWindowScroll } from '@mantine/hooks';
import { Button, Transition, createStyles } from '@mantine/core';

const upward = {
    in: {transform: 'translateY(-85px)' },
    out: {transform: 'translateY(0px)' },
    transitionProperty: 'transform',
  };

const useStyles = createStyles((theme) => ({
  btn_u: {
    borderRadius: '70px',
    width: '62px',
    height: '62px',
    position: 'fixed',
    right: '40px',
    bottom: '40px',
    background: 'rgba(0,0,0,0.5)',
    zIndex: 600,
  },
  btn_q: {
    borderRadius: '70px',
    width: '62px',
    height: '62px',
    position: 'fixed',
    right: '40px',
    bottom: '25px',
    zIndex: 500,
  },
  }));

export default function UpAffix() {
  const [scroll, scrollTo] = useWindowScroll();
  const {classes} = useStyles();

  return (
    <div>
        <Transition transition={upward} mounted={scroll.y > 0} duration={400} timingFunction="ease">
          {(transitionStyles) => (
            <Button
              className = {classes.btn_q}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              <IconMessage size={25} stroke={1.5} />
            </Button>
          )}
        </Transition>
        <Transition transition="slide-up" mounted={scroll.y > 0} duration={400} timingFunction="ease">
          {(transitionStyles) => (
            <Button
              className = {classes.btn_u}
              style={transitionStyles}
              onClick={() => scrollTo({ y: 0 })}
            >
              <IconArrowUp size={25} stroke={1.5} />
            </Button>
          )}
        </Transition>
        </div>
  );
}