import { useState } from "react";

import DateForm from "./dateForm";
import SetsForm from "./setsForm";

const AddWorkoutModal = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState([
    {
      date: "",
      sets: [""],
    },
  ]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleDataChange = (e, idx) => {
    if (e.target.id === "Date") {
      const updateData = data.map((record, recordIdx) => {
        if (recordIdx === idx) {
          return { ...record, date: e.target.value };
        } else {
          return record;
        }
      });
      setData(updateData);
    }
  };

  return (
    <div className="dataCard">
      <form>
        <input
          type="text"
          onChange={handleNameChange}
          placeholder="Workout Name"
          value={name}
        />

        {data.map(({ date, sets }, idx) => {
          return (
            <div key={idx}>
              <DateForm
                date={date}
                onChange={(e) => handleDataChange(e, idx)}
              />
              <SetsForm
                sets={sets}
                onChange={(e) => handleDataChange(e, idx)}
              />
            </div>
          );
        })}

        <button type="button">Add Date</button>
        <button type="button">Add Set</button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddWorkoutModal;
