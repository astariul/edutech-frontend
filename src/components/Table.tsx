import { Table } from "@mantine/core";
import React, {useCallback, useState} from "react"
import { ArrowBarDown } from "tabler-icons-react";

interface ToggleTableProps {
  header: string[];
  rows: JSX.Element[];
}

const ToggleTable = ({ header, rows }: ToggleTableProps) => {
  const [toggled, setToggled] = useState("");

  const onToggleHandler = useCallback(
    () => {
      toggled === "none" ? setToggled("") : setToggled("none")
    }, [toggled, setToggled]
  )
  return (
    <Table>
      <thead onClick={onToggleHandler}>
        <tr>
          {
            header.map( (name) => {
              return (
                <th key={name} style={{fontSize: 18, textAlign: "center"}}>{name}</th>
              )
            })
          }
          <th><ArrowBarDown  style={{display: "inline-block", width:"100%"}} strokeWidth={2} color={"black"}/></th>
        </tr>
      </thead>
      <tbody style={{textAlign: "center", display: toggled}}>
        {rows}
      </tbody>
    </Table>
  )
}

export default ToggleTable;
