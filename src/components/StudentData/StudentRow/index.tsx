import React from "react";
import { CellHeading } from "../../Main/CellHeading";
import { Row } from "../../Main/Row";
interface StudentRowProps {
  index: number;
  name: string;
  numberOfSubjects: number;
}
const StudentRow = (props: StudentRowProps) => {
  return (
    <div className="flex flex-row">
      <CellHeading value={`${props.index}`} />
      <CellHeading value={props.name} />
      <Row length={props.numberOfSubjects} />
    </div>
  );
};

export { StudentRow };
