import { SimpleGrid } from '@mantine/core';
import useStyles from "./style";

interface StarsProps {
  howmany: number;
  size?: number | string;
}

const Stars = ({howmany, size=10} : StarsProps) => {
    const { classes, cx } = useStyles();
    return (
        <div>
            <SimpleGrid cols={howmany} spacing={1} className={cx(classes.star, {fontSize: size})}>
                {
                    Array.from(Array(howmany).keys()).map(
                        (_, index) => <p key={index}>⭐</p>
                    )
                }
            </SimpleGrid>
        </div>
    )
}

export default Stars;
