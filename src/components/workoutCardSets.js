import WorkoutCardReps from './workoutCardReps';

const WorkoutCardSet = ({set, currentWorkoutData }) => {
    console.log('current workoutaaa', currentWorkoutData)
    return (
        <tr>
            <td>Set {set}</td>
            {currentWorkoutData.map((workout) => {
                return (
                    <WorkoutCardReps currentWorkoutData={workout} />
                )
            })}
        </tr>
    )
}

export default WorkoutCardSet;