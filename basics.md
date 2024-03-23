#MongoDB

db.students.insertOne({name: "Ram", age: 12})
>> database(db) mah euta collection xah(students) jasko bhitr euta document xah(Ram) ko!

db.students.insertOne({name: "Shyam", age: 13})

db.students.find()
>> displays the total document in the collection(students)

>> I want to add a section in the existing document!<<

// $set is used to append!

db.student.updateOne({name:"Ram"}, {$set: {idCards: {hasPanCard: false, hasAdharCard: true}}})

>> this is the example of update and also example of nested document!

-----------------------------------------

db.students.insertOne({name: "Ram", age: 12, idCards: {hasPanCard: false, hasAdharCard: true}})
db.students.insertOne({name: "Shyam", age: 13,idCards: {hasPanCard: true, hasAdharCard: true}})

>> we need only that object who have a pan card! 
soo the query selector somewhat looks like:

db.students.find({'idCards.hasPanCard' : true})

>> returns shyams document!

# NOTE: Max Size of a document is 16MB and limit of nesting is 100, i.t euta document can have 100 sub documents, this is a very pro advantage of using mongoDB!
-----------------------------------------


