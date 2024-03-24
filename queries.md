$expr

-----------------------------------------------------------------------------
db.collection.find({ $expr: { $eq: [ { $add: [ "$field1", "$field2" ] }, "$field3" ] } })

This query finds documents where the sum of "field1" and "field2" is equal to the value of "field3".

In both examples, `$expr` allows us to compare fields within the same document using aggregation expressions, providing flexibility and power in querying MongoDB data.

-----------------------------------------------------------------------------

$mod

Suppose you have a collection named "products" with documents representing various products, where each document includes a "name" and "quantity" field:

db.products.insertMany([
  { "name": "Product A", "quantity": 10 },
  { "name": "Product B", "quantity": 15 },
  { "name": "Product C", "quantity": 20 },
  { "name": "Product D", "quantity": 25 },
  { "name": "Product E", "quantity": 30 }
])

Now, if you want to find products where the quantity is evenly divisible by 5 (i.e., no remainder when divided by 5), you would use the following query:

db.products.find({ "quantity": { "$mod": [5, 0] } })

This query will return documents where the "quantity" field, when divided by 5, gives a remainder of 0. In this case, it would return documents representing "Product A", "Product C", and "Product E" because their quantities (10, 20, and 30 respectively) are evenly divisible by 5.

the corrected output should indeed include all the documents:


[
  { "name": "Product A", "quantity": 10 },
  { "name": "Product B", "quantity": 15 },
  { "name": "Product C", "quantity": 20 },
  { "name": "Product D", "quantity": 25 },
  { "name": "Product E", "quantity": 30 }
]

This is because:
10 divided by 5 equals 2 with no remainder.
15 divided by 5 equals 3 with a remainder of 0.
20 divided by 5 equals 4 with no remainder.
25 divided by 5 equals 5 with no remainder.
30 divided by 5 equals 6 with no remainder.

but if { "name": "Product F", "quantity": 303 }
then produc 5 wouldnt be printed as 303 %5 != 0!

------------------------------------------------------------------------------

$regex

In MongoDB, $regex is an operator used in queries to perform pattern matching using regular expressions. Regular expressions (regex) are sequences of characters that define a search pattern. The $regex operator allows you to search for documents where a specific field matches a given regular expression pattern.

Here's a basic syntax:


{ field: { $regex: /pattern/ } }
Or using a string:


{ field: { $regex: "pattern" } }
For example, if you have a collection of documents representing books and you want to find books with titles starting with "The", you can use the $regex operator:


db.books.find({ title: { $regex: /^The/ } })
This query will return documents where the "title" field starts with "The" because the ^ character in the regex pattern specifies the beginning of the string.

-------------------------------------------------------------------------------

$text

In MongoDB, the $text operator is used to perform text search on the fields of documents in a collection. It allows you to search for documents that contain a specified string or phrase.

Here's a basic syntax:

{ $text: { $search: "searchString" } }
searchString: The string or phrase you want to search for.
For example, suppose you have a collection named "articles" with documents containing text fields such as "title" and "content". You can use the $text operator to search for documents containing a specific word or phrase:

db.articles.find({ $text: { $search: "MongoDB" } })
This query will return documents where the "title" or "content" fields contain the word "MongoDB".

To use the $text operator, you must first create a text index on one or more fields of your collection. This index allows MongoDB to efficiently perform text searches.

--------------------------------------------------------------------------------