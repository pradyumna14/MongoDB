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