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
      const updateDate = data.map((record, recordIdx) => {
        if (recordIdx === idx) {
          return { ...record, date: e.target.value };
        } else {
          return record;
        }
      });
      setData(updateDate);
    }

    if (e.target.className === "Set") {
      const updateSet = data.map((record, recordIdx) => {
        if (recordIdx === idx) {
          const updateSetRecord = record.sets.map((set, setIdx) => {
            if (setIdx === Number(e.target.id)) {
              return e.target.value;
            } else {
              return set;
            }
            // Should return updateSetRecord = ['5x10']
          });
          console.log(updateSetRecord);
          return { ...record, sets: updateSetRecord };
          // Should return {date: "", sets:['5x10']}
        } else {
          return record;
        }
      });
      setData(updateSet);
    }
  };
  const handleDateAddition = () => {
    const currentState = [
      ...data,
      {
        date: "",
        sets: [""],
      },
    ];
    setData(currentState);
  };

  const handleDateDeletion = (idx) => {
    const deleteData = data.filter((record, recordIdx) => {
      return recordIdx !== idx;
    });

    setData(deleteData);
  };

  const handleSetAddition = (idx) => {
    const addSet = data.map((record, recordIdx) => {
      if (recordIdx === idx) {
        return { ...record, sets: [...record.sets, ""] };
      } else {
        return record;
      }
    });
    setData(addSet);
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
              <button type="button" onClick={() => handleSetAddition(idx)}>
                Add Set
              </button>
              <button type="button" onClick={() => handleDateDeletion(idx)}>
                Delete Date
              </button>
            </div>
          );
        })}

        <button type="button" onClick={handleDateAddition}>
          Add Date
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddWorkoutModal;
