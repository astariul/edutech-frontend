import { Collapse, Grid } from "@mantine/core";
import React, {ReactNode, useState} from "react"

interface toggleProps {
  Name: ReactNode;
  Icon: ReactNode;
  Items: ReactNode[];
  toggleOpened?: boolean;
}

const Toggle = ({ Name, Icon, Items, toggleOpened=false}: toggleProps) => {
  const [toggled, setToggled] = useState(toggleOpened);
  return (
    <div style={{display: "flex", width: "100%", flexDirection: "column"}}>
      <Grid.Col style={{display: "flex", cursor: "pointer"}} onClick={() => setToggled((o) => !o)}>
        {Name}
        {Icon}
      </Grid.Col>
      <Collapse in={toggled}>
        {Items}
      </Collapse>
    </div>
  )
}

export default Toggle;
