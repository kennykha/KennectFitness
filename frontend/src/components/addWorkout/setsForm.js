import React from "react";

const SetsForm = ({ sets, onChange }) => {
  return (
    <div>
      {sets.map((set, idx) => {
        return (
          <div
            className="set-info"
            key={`set-${idx}`}
            style={{ display: "flex", alignItems: "center" }}
          >
            Set {idx + 1}
            <input
              type="text"
              className="Set"
              id={idx}
              placeholder="Reps"
              value={set}
              onChange={onChange}
            />
          </div>
        );
      })}
    </div>
  );
};

export default SetsForm;
