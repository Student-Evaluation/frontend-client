import React, { useEffect, useState } from "react";
import { Cell } from "../Cell";
import { CellHeading } from "../CellHeading";
import { Subject } from "../Subjects/Subject";
interface RowProps {
  length: number;
}
const Row = (props: RowProps) => {
  const [rows, setRows] = useState<any[]>([]);

  useEffect(() => {
    const cells = [];
    for (let i = 0; i < props.length; i++) {
      cells.push(<Cell key={i} />);
    }
    setRows(cells);
  }, []);

  return <div className="flex flex-row">{rows}</div>;
};

export { Row };
