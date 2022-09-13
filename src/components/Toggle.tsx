import { Collapse, Grid } from "@mantine/core";
import React, {ReactNode, useState} from "react"

interface toggleProps {
  Name: ReactNode;
  Icon: ReactNode;
  Items: ReactNode[];
}

const Toggle = ({ Name, Icon, Items }: toggleProps) => {
  const [toggled, setToggled] = useState(false);
  return (
    <div style={{display: "flex", width: "100%", flexDirection: "column"}}>
      <Grid.Col style={{display: "flex"}} onClick={() => setToggled((o) => !o)}>
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
