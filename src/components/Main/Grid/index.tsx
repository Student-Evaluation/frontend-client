import React from "react";
import { StudentRow } from "../../StudentData/StudentRow";
import { Cell } from "../Cell";
import { CellHeading } from "../CellHeading";

import { Subjects } from "../Subjects";

const Grid = () => {
  return (
    <div className="overflow-x-scroll">
      <Subjects />
      {["Ylli Caka", "Adriana Caka", "Cuk Caka"].map((item, index) => (
        <StudentRow
          numberOfSubjects={5}
          name={item}
          index={index}
          key={index}
        />
      ))}
    </div>
  );
};

export { Grid };
