const AddWorkoutModal = () => {
    return (
        <div className='dataCard'>
            <form>
                <input type='text' placeholder='Workout Name' />
                <input type='text' placeholder='Date' />
                <div style={{display:'flex', alignItems:'center'}}>Set 1
                    <input type='text' placeholder='Reps' />
                </div>
                <div style={{display:'flex', alignItems:'center'}}>Set 2
                    <input type='text' placeholder='Reps' />
                </div>
                <div style={{display:'flex', alignItems:'center'}}>Set 3
                    <input type='text' placeholder='Reps' />
                </div>
                <button type='button'>Add Date</button>
                <button type='button'>Add Set</button>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )}

export default AddWorkoutModal;