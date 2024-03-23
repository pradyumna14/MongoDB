db.students.find()
<br>
gives the documents of all the students

<br>
If we need only those students with the age of 11 years!
<br>
db.students.find({age:11})
<br>

lets say 2 stuents have same age, Tom and Tunnu. We only need the document of the first name/entry
<br>
Soo we do:  db.students.findOne({age:11})
---------------------------------------------------------------

lets say we have 1 crore documents in the collection!
<br>
And if we use the find command here then only first 20 will be shown!

<br> find method returns the cursor/pointer and with the help of this pointer we can iterate overdocuments! but findOne gives the one which is first in the collection!
-------------------------------------------------------------

find() returns a cursor and therefore we can count() it loop() on it, add limit(), etc.
<br>
example is:
<br>
db.students.find().forEach((x) => {printjson()})
>> sabai documents print hunxa when used this loop!

<br>

We need the documents of students whose age is less than {$lt:12} or lessthanEqualto {$lte:12} or greaterthan or equal 12{$gte:12} or greater than 12 {$gt:12}
<br>

db.students.find({age:{$lt:12}})
db.students.find({age:{$lte:12}})
<br>

>> greater than 5 and less than 12 ko filter garera deu!

bd.students.find({age: {$gt: 5, $lt:12}})

<br>
we cant display all the documents at once using for() soo one way is that we can iterate using for loop, or we can do the following: 
<br>
db.students.find().toArray()

>> All the documtents will be displayed now!

---------------------------------------------------------------------

