First i want to make a collecition named nonFiction then on the next line i will ad document to it, but i dont wanna do both in the same line!

books> db.createCollection("nonfiction")

Now i wanna insert some documents to my recently made collection!

books> db.nonfiction.insertOne({name: "ABC"})
<br>
if we do:
books> db.nonfiction.insertOne({name: 2345})

when we print> name: 2345 bhanerai auxa which is not possible,
soo we want to create a rule/ validate it that name: string value only...

refer to file: temp.js


