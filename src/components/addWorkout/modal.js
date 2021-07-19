import { useState } from "react";
import DateForm from "./dateForm";
import SetsForm from "./setsForm";
import axios from "axios";

const AddWorkoutModal = ({ user }) => {
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

  const handleModalClose = () => {
    const modal = document.getElementById("workoutModal");
    modal.style.display = "none";

    setData([
      {
        date: "",
        sets: [""],
      },
    ]);
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // console.log(user, name, data);

    // Determine longest set and fill others will null
    let longestSet = 0;
    data.forEach((record) => {
      if (record.sets.length > longestSet) {
        longestSet = record.sets.length;
      }
    });

    const setDataPlaceholder = data.map((record) => {
      record.sets = record.sets.map((set) => {
        if (set === "") {
          return "null";
        } else {
          return set;
        }
      });

      if (record.date === "") {
        record.date = "null";
      }

      while (record.sets.length !== longestSet) {
        record.sets.push("null");
      }

      return record;
    });

    setData(setDataPlaceholder);

    console.log("Longest set", longestSet);
    axios
      .post("/addWorkoutData", {
        user: user,
        workoutData: {
          workoutName: name,
          data: data,
        },
      })
      .then((success) => handleModalClose())
      .catch((err) => console.log(err));
  };

  return (
    <div className="modal" id="workoutModal">
      <div className="dataCard" id="workoutModalContent">
        <span className="close" onClick={handleModalClose}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            onChange={handleNameChange}
            placeholder="Workout Name"
            value={name}
          />

          {data.map(({ date, sets }, idx) => {
            return (
              <div key={idx} className="date-rep-container">
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
    </div>
  );
};

export default AddWorkoutModal;
