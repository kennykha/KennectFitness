import axios from 'axios';
import { useEffect, useState} from 'react';

const UserData = (props) => {
    console.log('Props', props)
    const user = props.match.params.name;

    useEffect(() => {
        axios.get(`/user/${user}`)
        .then((success) => {
            console.log('clicked successfully to get', success)
        })
        .catch((err) => console.log(err))
    }, []);

    return (
    <div>
        This is the User Data Component for {user}
            <table className='dataCard'>
                <th colspan='3'>Flat Bench Press</th>
                <tr>
                    <td></td>
                    <td>5/1</td>
                    <td>5/2</td>
                    <td>5/3</td>
                </tr>
                <tr>
                    <td>Set 1</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                </tr>
                <tr>
                    <td>Set 2</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                </tr>
                <tr>
                    <td>Set 3</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                </tr>
                <tr>
                    <td style={{border:'1px solid black', borderRadius:'10px', cursor:'pointer', textAlign:'center'}}>+</td>
                </tr>
                </table>
                <table className='dataCard'>
                <th colspan='3'>Incline Bench Press</th>
                <tr>
                    <td></td>
                    <td>5/1</td>
                    <td>5/2</td>
                    <td>5/3</td>
                </tr>
                <tr>
                    <td>Set 1</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                </tr>
                <tr>
                    <td>Set 2</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                </tr>
                <tr>
                    <td>Set 3</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                </tr>
            </table>
            
            <table className='dataCard'>
                <th colSpan='3'>Pull Ups</th>
                <tr>
                    <td></td>
                    <td>5/1</td>
                    <td>5/2</td>
                    <td>5/3</td>
                </tr>
                <tr>
                    <td>Set 1</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                </tr>
                <tr>
                    <td>Set 2</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                </tr>
                <tr>
                    <td>Set 3</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                </tr>
                </table>
                <table className='dataCard'>
                <th colSpan='3'>Seated Row</th>
                <tr>
                    <td></td>
                    <td>5/1</td>
                    <td>5/2</td>
                    <td>5/3</td>
                </tr>
                <tr>
                    <td>Set 1</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                </tr>
                <tr>
                    <td>Set 2</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                </tr>
                <tr>
                    <td>Set 3</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                    <td>5 x 10</td>
                </tr>
                
            </table>
    </div>
    )
}

export default UserData;