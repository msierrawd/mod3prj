# Purpose of project

Have you ever gone to the gym and wanted to track down your progress?
This app will give you a notebook specifically for tracking your exercies.

# Link to deployed app

Deployed Front End (Surge): _http://clear-trouble.surge.sh/_

Deployed Back End (Heroku):

_Dates_ <br/>
Dates GET: _https://cryptic-thicket-90640.herokuapp.com/dates/_ <br/>
Dates POST: _https://cryptic-thicket-90640.herokuapp.com/dates/_ <br/>
{ <br/>
"day": 5, <br/>
"month": 2, <br/>
"year": 22 <br/>
} <br/>
Dates PATCH: _https://cryptic-thicket-90640.herokuapp.com/dates/_ <br/>
{<br/>
"id": 1, <--- Add id of what you want to change<br/>
"day": 55,<br/>
"month": 2,<br/>
"year": 22<br/>
}<br/>
Dates DELETE: _https://cryptic-thicket-90640.herokuapp.com/dates/x_ <--- (Change with ID) <br/>

_Exercises_ <br/>
Exercises GET: _https://cryptic-thicket-90640.herokuapp.com/exercises/_ <br/>
Exercises POST: _https://cryptic-thicket-90640.herokuapp.com/exercises/_ <br/>
{<br/>
"exercise": "Conventional Deadlift", <br/>
"sets": 1, <br/>
"reps": 5, <br/>
"weight": 235, <br/>
"lborkg": "lb" <br/>
}<br/>
Exercises PATCH: _https://cryptic-thicket-90640.herokuapp.com/exercises/_ <br/>
{<br/>
"id": 1, <--- Add id of what you want to change<br/>
"exercise": "Low Bar Squat",<br/>
"sets": 5,<br/>
"reps": 3,<br/>
"weight": 190,<br/>
"lborkg": "lb"<br/>
}<br/>
Exercises DELETE: _https://cryptic-thicket-90640.herokuapp.com/exercises/x_ <--- (Change with ID) <br/>

_Notes_ <br/>
Notes GET: _https://cryptic-thicket-90640.herokuapp.com/notes/_ <br/>
Notes POST: _https://cryptic-thicket-90640.herokuapp.com/notes/_ <br/>
{<br/>
"note": "Hello, I am a note"<br/>
}<br/>
Notes PATCH: _https://cryptic-thicket-90640.herokuapp.com/notes/_ <br/>
{<br/>
"id": 1, <--- Add id of what you want to change<br/>
"note": "Hello, I am also a note that's edited with patch"<br/>
}<br/>
Notes DELETE: _https://cryptic-thicket-90640.herokuapp.com/notes/x_ <--- (Change with ID) <br/>

# Wireframe images

_Sorry for these scuffed wireframes, I'm not an artist_

_Wireframe v1_
![](images_for_readme/mod3wireframe.png)

_Wireframe v2_
![](images_for_readme/mod3wireframeupdated.png)
