import Dates from './Dates';
import Exercises from './Exercises';
import Notes from './Notes';

// ADD CSS TO MAKE THINGS LOOK PRETTIER 
function Blocks(){
    return(
        <div> 
            <Dates/>
            <Exercises/>
            <Notes/>
        </div>
    )
}

export default Blocks;