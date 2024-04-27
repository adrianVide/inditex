import React from "react";

const OneTwo = ({ left, right }) => {
  return (
    <div class="grid grid-cols-3 gap-4">
      <div>{left}</div>
      <div className="col-span-2">{right}</div>
    </div>
  );
};

export default OneTwo;
