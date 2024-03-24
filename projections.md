wehn done db.students.find({})
<br>
All the documents are returned! with all the information includeing, name, age, id of students. But we only want to view the name of students! soo we set the Id:0 and age to 0... its not compulsion to give age:0 as it automatically understands to not take the age or other objects but ID ko lagi you have to give it id:0
<br>

db.students.find({}, {name:1, _id:0})
<br>
db.students.find({},{name:1, age:0, _id:0})
<br>
both method prints only the name!
