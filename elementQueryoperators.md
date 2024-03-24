  college> db.students.insertOne({name: 'Akshit', age: 22, hobbies: ["TV shows"], hasMacBook: true})

>> Acknowledge: true

college> db.students.find({hasMacBook: {$exists:true}})

>>Returns Akshit's document!

college> db.students.find({hasMacBook: {$exists:true, $type: "bool" }})


college> db.students.find({hasMacBook: { $type:"bool"}})

