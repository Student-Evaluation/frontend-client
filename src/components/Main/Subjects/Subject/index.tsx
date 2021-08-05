import React from "react";
import { CellHeading } from "../../CellHeading";
interface SubjectProps {
  name: string;
}
const Subject = (props: SubjectProps) => {
  return <CellHeading value={props.name} />;
};

export { Subject };
