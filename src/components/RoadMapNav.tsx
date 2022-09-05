import React, { MouseEvent } from "react";
import { createStyles, Navbar, Title } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  sideBar : {
    backgroundColor: '#D3D3D3',
  },
}));


interface RoadMapNavProps {
    onClickHandler: (e: MouseEvent<HTMLHeadingElement>) => void,
    activeTitle: string,
}

const RoadMapNav = ({onClickHandler, activeTitle}: RoadMapNavProps) => {
    const { classes } = useStyles();


    return (
        <Navbar hiddenBreakpoint={1760} hidden={true} p="xs" className={classes.sideBar}>
            <Navbar.Section sx={{marginTop:30, marginBottom:50}}>
                <Title order={1} align="center">
                    포지션
                </Title>
            </Navbar.Section>
            <Navbar.Section sx={{marginTop:50, marginBottom:50}}>
                <Title
                    id={'frontend'}
                    order={3}
                    align="center"
                    sx={{color: activeTitle === 'frontend' ? '#228BE6': '#212529'}}
                    onClick={onClickHandler}
                >
                    Front-End 개발자
                </Title>
            </Navbar.Section>
            <Navbar.Section sx={{marginTop:50, marginBottom:50}}>
                <Title
                    id={'backend'}
                    order={3}
                    align="center"
                    sx={{color: activeTitle === 'backend' ? '#228BE6': '#212529'}}
                    onClick={onClickHandler}
                >
                    Back-End 개발자
                </Title>
            </Navbar.Section>
        </Navbar>
    )
}

export default RoadMapNav;

