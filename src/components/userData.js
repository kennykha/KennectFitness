import axios from 'axios';
import { useEffect, useState} from 'react';
import WorkoutCard from './workoutCard';
import AddWorkoutModal from './addWorkoutModal';

const UserData = (props) => {
    const user = props.match.params.name;
    let currentWorkoutList = [];
    const [workout, setWorkout] = useState([]);
    const [showWorkoutAddForm, setShowWorkoutAddForm] = useState(false);

    useEffect(() => {
        axios.get(`/user/${user}`)
        .then((success) => {
            setWorkout(success.data);
        })
        .catch((err) => console.log(err))
    }, []);
 
    workout.map((workout) => {
        if (!currentWorkoutList.includes(workout.workout)) {
            currentWorkoutList.push(workout.workout);
        }
    })

    return (
        <div>
            This is the User Data Component for {user}
            {currentWorkoutList.map((currentWorkout) => {
                return (
                    <WorkoutCard currentWorkout={currentWorkout} allWorkoutData={workout}/>
                )
            })}
            <div className='dataCard' style={{width:'50%'}}>+Add Workout</div>   
            <AddWorkoutModal />         
        </div>
    
    )
}

export default UserData;