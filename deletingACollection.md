lets say we are under a database named :mydb
and we make a collection named products

mydb> db.producsts.insert({name: "laptop", price: 50})
mydb> db.products2.insert({name: "keyboard", price: 40})

db.dropDatabase()

it deletes every collection, as we are deleting the whole data from data base using dropDatabase()

but lets say we only want to delete 1 collection (products2)

mydb> db.products2.drop()

Now Only 1 collection that we have (Products) will exist as the other one is dropped/deleted!

when done:
mydb> show collections
>> products

---------------X----------X---------X----------------