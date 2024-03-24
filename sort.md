There are alot of documnents and there is an entry of Age,
soo we want to format the document in assending order of their age!

college> db.teachers.find().sort({age:1})

descending:

college> db.teachers.find().sort({age:-1})

lets say 2 people alicia and kelly have same age, soo then we want to sort by their name, A comes first than K..

college> db.teachers.find().sort({age:1, name: 1})
