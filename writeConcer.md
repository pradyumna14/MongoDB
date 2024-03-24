writeConcern is also an option! jut like Ordered in an option in the insterMany() function!

writeCOncern works both in insertOne() and insertMany()

syntax of it is:
{w: <value>, j:<boolean>, wtimeout: <number>}
  

products> db.books.insertOne({name: "A", price:1})
products> db.books.insertOne({name: "B", price:2},  {writeConcern: {w:0}})

w:0 garda acknowledge: false auxa, not acknowledge: true and acknowledge faluse auda hamro operation fast chalxa than true auda..

 by dejault j:faluse hunxa.
 but when j = true then operation feri slow chalxa,
 j=journal, suppose kaam garirako bichama mongoDB server crash/restart bhayo rey, then journal true xah bhaney herxa ki last mah k gardai thiye server crash hunu agadi, soo teii bata agadi badxa,
 but journal false gareko xah bhaney first bata feri sabai operations restart hunxa!

 products> db.books.insertOne({name: "B", price:2},  {writeConcern: {w:0, j:true}})

 db.books.insertOne(
  {name: "B", price: 2},
  {
    writeConcern: {
      w: 0,  // Number of replica set members to acknowledge the write
      j: true // Journal acknowledgment
    },
    wtimeout: 5000 // Wait for acknowledgment for 5 seconds (in milliseconds)
  }
);

In this example, the `insertOne` operation inserts a document into the "books" collection. The `writeConcern`specifies that MongoDB should wait for acknowledgment from 0 replica set members and enable journal acknowledgment (j: true). Additionally, `wtimeout` is set to 5000 milliseconds, meaning MongoDB will wait up to 5 seconds for acknowledgment before aborting the operation.


