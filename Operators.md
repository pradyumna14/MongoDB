# Comparison

The following operators can be used in queries to compare values:
<br>
$eq: Values are equal
$ne: Values are not equal
$gt: Value is greater than another value
$gte: Value is greater than or equal to another value
$lt: Value is less than another value
$lte: Value is less than or equal to another value
$in: Value is matched within an array

# Logical

The following operators can logically compare multiple queries.

$and: Returns documents where both queries match
$or: Returns documents where either query matches
$nor: Returns documents where both queries fail to match
$not: Returns documents where the query does not match


-----------------------------------------------------------

# Some more operators!

$inc

(Q) Increase age of all students by 2
>  db.students.updateMany({}, {$inc: {age: 2}})
if decrement garnu thiyo bhaney!
> db.students.updateMany({}, {$inc: {age: -2}})
if only Roshni ko increament garu thiyo bhaney?
> db.students.updateMany({name: "Roshni"}, {$inc: {age: 2}})
--------------------

$max || $min

(Q) Increase age of Sita to 50 only if her age is lesser than it! Note that sitas age is 23 now!
> we have 2 main operators: $min which reduces the number
and $max which increases the number
> db.students.updateOne({name:"Sita"}, {$max: {age:50}})

lets say her age is 50 at present and we want to set it to 23!
> high value bata low value lanu xah soo we use Min!
>db.students.updateOne({name:"Sita"}, {$min: {age:23}})

-------------------------
$mul

multiplies the age,
(Q) Multiply the age of sita by 2!
> db.students.updateOne({name:"Sita"}, {$mul: {age:2}})

-------------------------
$unset

(Q) Delete the field age from Sitas document!
> db.students.updateOne({name:"Sita"}, {$unser: {age:23324232}})
// age jati nai halda hunxa, or u can also leave it empty! age: " "

---------------------------------------------
$rename

document mah age: bhanera stored xah but we want to rename it as student'sAge: 

soo 
> db.students.updateOne({ name: "Sita" }, { $renmae: { age: "student'sAge" } })

----------------------------------------------
upsert

let's say we have a collection of students and we want to change the age of Golu.

db.students.updateOne({ name: "Golu" }, { $set: { age: 19} })
//> hamro collection mah tah Golu naam ko student nai exist gardaina soo kei add/change hudaina!
but we want to add his entry right soo we use upsert!

> db.students.updateOne({ name: "Golu" }, { $set: { age: 19}}, {upsert: true})
