import React from "react";
interface CellHeadingProps {
  value: string;
}
const CellHeading = (props: CellHeadingProps) => {
  return (
    <input
      className="text-xs shadow appearance-none border focus:outline-none focus:shadow-outline"
      value={props.value}
      disabled
    />
  );
};

export { CellHeading };
