import React from "react";
import { Subject } from "./Subject";

const Subjects = () => {
  return (
    <div className="flex flex-row ">
      <Subject name="Kimi" />

      <Subject name="Gjuhe Shqipe" />

      <Subject name="Matematik" />

      <Subject name="Anglisht" />

      <Subject name="Lenda me e bukur dhe e gjate ne bote" />
    </div>
  );
};

export { Subjects };
