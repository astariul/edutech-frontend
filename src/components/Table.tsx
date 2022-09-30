import {useCallback, useState} from "react"
import { Table } from "@mantine/core";
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
                <th key={name} style={{fontSize:16, textAlign:"center", padding: "8px", width: "200px", backgroundColor: "#F1F3F5"}}>{name}</th>
              )
            })
          }
          <th style={{width: "200px", textAlign:"center", padding: "8px", backgroundColor: "#F1F3F5"}}>
            <ArrowBarDown strokeWidth={2} color={"black"}/>
          </th>
        </tr>
      </thead>
      <tbody style={{textAlign: "center", display: toggled}}>
        {rows}
      </tbody>
    </Table>
  )
}

export default ToggleTable;
