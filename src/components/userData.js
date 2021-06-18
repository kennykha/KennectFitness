import axios from 'axios';
import { useEffect, useState} from 'react';
import WorkoutCard from './workoutCard';

const UserData = (props) => {
    const user = props.match.params.name;
    let currentWorkoutList = [];
    const [workout, setWorkout] = useState([]);

    useEffect(() => {
        axios.get(`/user/${user}`)
        .then((success) => {
            console.log('clicked successfully to get', success)
            setWorkout(success.data);
        })
        .catch((err) => console.log(err))
    }, []);
 
    workout.map((workout) => {
        if (!currentWorkoutList.includes(workout.workout)) {
            currentWorkoutList.push(workout.workout);
        }
    })

    console.log('WorkoutList', currentWorkoutList);
    console.log(workout)

    return (
        <div>
            This is the User Data Component for {user}
            {currentWorkoutList.map((currentWorkout) => {
                return (
                    <WorkoutCard currentWorkout={currentWorkout} allWorkoutData={workout}/>
                )
            })}
        </div>
    // <div>
    //     This is the User Data Component for {user}
    //         <table className='dataCard'>
    //             <th colspan='3'>Flat Bench Press</th>
    //             <tr>
    //                 <td></td>
    //                 <td>5/1</td>
    //                 <td>5/2</td>
    //                 <td>5/3</td>
    //             </tr>
    //             <tr>
    //                 <td>Set 1</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //             </tr>
    //             <tr>
    //                 <td>Set 2</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //             </tr>
    //             <tr>
    //                 <td>Set 3</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //             </tr>
    //             <tr>
    //                 <td style={{border:'1px solid black', borderRadius:'10px', cursor:'pointer', textAlign:'center'}}>+</td>
    //             </tr>
    //             </table>
    //             <table className='dataCard'>
    //             <th colspan='3'>Incline Bench Press</th>
    //             <tr>
    //                 <td></td>
    //                 <td>5/1</td>
    //                 <td>5/2</td>
    //                 <td>5/3</td>
    //             </tr>
    //             <tr>
    //                 <td>Set 1</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //             </tr>
    //             <tr>
    //                 <td>Set 2</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //             </tr>
    //             <tr>
    //                 <td>Set 3</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //             </tr>
    //         </table>
            
    //         <table className='dataCard'>
    //             <th colSpan='3'>Pull Ups</th>
    //             <tr>
    //                 <td></td>
    //                 <td>5/1</td>
    //                 <td>5/2</td>
    //                 <td>5/3</td>
    //             </tr>
    //             <tr>
    //                 <td>Set 1</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //             </tr>
    //             <tr>
    //                 <td>Set 2</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //             </tr>
    //             <tr>
    //                 <td>Set 3</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //             </tr>
    //             </table>
    //             <table className='dataCard'>
    //             <th colSpan='3'>Seated Row</th>
    //             <tr>
    //                 <td></td>
    //                 <td>5/1</td>
    //                 <td>5/2</td>
    //                 <td>5/3</td>
    //             </tr>
    //             <tr>
    //                 <td>Set 1</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //             </tr>
    //             <tr>
    //                 <td>Set 2</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //             </tr>
    //             <tr>
    //                 <td>Set 3</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //                 <td>5 x 10</td>
    //             </tr>
                
    //         </table>
    // </div>
    )
}

export default UserData;