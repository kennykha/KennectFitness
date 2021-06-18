import WorkoutCardDate from './workoutCardDate';
import WorkoutCardSet from './workoutCardSets';

const WorkoutCard = ({currentWorkout, allWorkoutData}) => {
    
    const uniqueSets = () => {
        const numberOfSets = [];
        allWorkoutData.map((workout) => {
            if (workout.workout === currentWorkout) {
                if (!numberOfSets.includes(workout.current_set)) {
                    numberOfSets.push(workout.current_set);
                }
            }
        })

        numberOfSets.sort((a,b) => Number(a) - Number(b));
        return numberOfSets;
    }

    const mapCurrentWorkout = () => {
        const currentWorkoutData = [];
        allWorkoutData.map((workout) => {
            if (workout.workout === currentWorkout) {
                currentWorkoutData.push(workout);
            }
        })

        return currentWorkoutData;
    }
    
    const numberOfSets = uniqueSets();
    const currentWorkoutData = mapCurrentWorkout();
    
    return (
        <table className='dataCard'>
            <th colspan='3'>{currentWorkout}</th>
            <tr>
                <td></td>
                {currentWorkoutData.map((workout) => {
                        return (
                            <WorkoutCardDate date={workout.date} />
                        )
                    }
                )}
            </tr>
            {numberOfSets.map((set) => {
                return (
                    <WorkoutCardSet set={set} currentWorkoutData={currentWorkoutData}/>
                )
            })}
        </table>
    )
}

export default WorkoutCard;