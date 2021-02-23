import Dates from './Dates';
import Exercises from './Exercises';
import Notes from './Notes';
import '../css/style.css'

// ADD CSS TO MAKE THINGS LOOK PRETTIER 
// MAKE SURE TO ADD NAVBAR ON TOP AS WELL AS MAKE THE DIV SCROLLABLE WHEN CONTENT STARTS TO OVERFLOW
// ALSO TRY AND FIX KEY ISSUE THAT SHOWS UP IN CONSOLE.LOG 
function Blocks(){
    return(
        <div className="notesContainer"> 
            <Dates/>
            <Exercises/>
            <Notes/>
        </div>
    )
}

export default Blocks;