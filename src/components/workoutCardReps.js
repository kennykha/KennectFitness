import { useState } from 'react';

const WorkoutCardReps = ({ currentWorkoutData, set }) => {
  const [showEditForm, handleShowEditForm] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const repInfo = document.getElementById("rep_info").value;
    console.log('repInfo', repInfo);
  }

  if (currentWorkoutData.current_set === set) {
    if (!showEditForm) {
      return <td style={{cursor: 'pointer'}} onClick={()=> {
        handleShowEditForm(true);
      }} id={`${currentWorkoutData.id}`}>{currentWorkoutData.rep_info}</td>;
    } else {
      return <td>
                <form onSubmit={handleSubmit}>
                  <input type='text' placeholder={currentWorkoutData.rep_info} id='rep_info'/>
                  <input type="submit" style={{ display: "none" }} />
                </form>
              </td>
    }
  } else {
    return null;
  }
};

export default WorkoutCardReps;
