import React from "react";

const SetsForm = ({ sets }) => {
  return (
    <div>
      {sets.map((set, idx) => {
        return (
          <div
            key={`${set}-${idx}`}
            style={{ display: "flex", alignItems: "center" }}
          >
            Set {idx + 1}
            <input type="text" placeholder="Reps" value={set} />
          </div>
        );
      })}
    </div>
  );
};

export default SetsForm;
