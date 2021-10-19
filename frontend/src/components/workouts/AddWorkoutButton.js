import React from "react";

export default function AddWorkoutButton(props) {
  const handleModalOpen = () => {
    const modal = document.getElementById("workoutModal");
    modal.style.display = "block";
  };

  return (
    <div
      className="dataCard"
      style={{ width: "50%", cursor: "pointer" }}
      onClick={handleModalOpen}
    >
      +Add Workout
    </div>
  );
}
