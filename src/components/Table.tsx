import { Table } from "@mantine/core";
import React, {useCallback, useState} from "react"

interface ToggleTableProps {
  headers: string[];
  rows: (string | number | JSX.Element)[];
}

const ToggleTable = ({ headers, rows }: ToggleTableProps) => {
  const [toggled, setToggled] = useState("block");

  const onToggleHandler = useCallback(
    () => {
      toggled === "block" ? setToggled("none") : setToggled("block")
    }, [toggled, setToggled]
  )
  return (
    <Table>
      <thead onClick={onToggleHandler}>
        <tr>
          {
            headers.map( (header) => {
              return (
                <th key={header} style={{fontSize: 18, textAlign: "center"}}>{header}</th>
              )
            })
          }
        </tr>
      </thead>
      <tbody style={{display: toggled}}>
        <tr>
          {
            rows.map( (row, index) => {
              return <td key={index}>{row}</td>
            })
          }
        </tr> 
      </tbody>
    </Table>
  )
}

export default ToggleTable;
