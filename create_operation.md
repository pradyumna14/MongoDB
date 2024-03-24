lets say we made a new DB called: school using command( use school)
<br>

# Database > Collection > Documents

db.students.insert({name:"Ram", age: 12})

<br>
We can add many documents at once making the list of Documents!

db.students.insertMany([{name: "Pradyumna", age : 20}, {name: "Nitin", age: 32}])

--------------------
// insert() example
<br>
db.collection.insert([
 <br>   { name: "John", age: 30 },
 <br>   { name: "Alice", age: 25 }
<br>]);

<br>// insertOne() example
<br>db.collection.insertOne({ name: "Bob", age: 35 });

---------------------------------------------------------

we know the syntax to create a collection is:
insertOne(data, options)
and
insertMany(data, options)

We are going to learn about options!

we can give our own ID to the document, but lets say we have 5 documents and w egive same ID to 2 of them, 3rd and 2nd and 4th document!
then if we print all find({}) then document 1,2,3 will be printed, in 4th document error auxa saying that ID already exists and then document 5 pani print hudaina, since paila error aako thiyo and documents are always read in order/srynchonous hisab mah!

soo to break this order and if we want the 5th document as well then we set the 2nd argument of InsertMany() function i.e option into ordered:false!

products> db.books.insertMany([{_id: "A", name: "Anmol"},{_id: "B", name: "Ashray"},{_id: "C", name: "Samyam"},{_id: "A", name: "Aaryan"},{_id: "E", name: "Bivan"}],  {ordered:false})

now when we do: 
produsts> db.books.find()
[
    {_id: 'A', name: 'Anmol},
    {_id: 'B', name: 'Ashray},
    {_id: 'C', name: 'Samyam},
    {_id: 'E', name: 'Bivan},
]

Will be printed!
