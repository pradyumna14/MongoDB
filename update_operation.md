// We have 3 documents(having students informations)
<br>
nitin and neil students have age 12 and mukesh has age 11!
<br>
we have to update the age of mukesh only soo we use updateOne() but if we had to update the age of neil and nitin then we can use updateMany()
<br>

eg of updateOne:
<br>
db.students.updateOne({name:"Vijay"},{$set: {age:15}})
<br> 
updateOne({fiter/select}, {change})

<br>
we have to now update multiple documents at once! lets say we want to update the age of students to some different value, we are changing the once whose age is 12 years old! soo lets take age:12 as the filter!
<br>
db.students.updateMany({age:12}, {$set: {age: 13}})

---------------------------------
# delete a document

db.students.deleteMany({age: 13})
<br>
// age 13 wala harek document lai delete garxa!
<br>
// I only want to delete nitins entry!
<br>
db.students.deleteOne({name: "Nitin"})
<br>
db.students.deleteMany({})
<br> ALL are deleted!

