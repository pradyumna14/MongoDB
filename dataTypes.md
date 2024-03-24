text, bollean, number(integer, number long, number decimal), objectID, ISODate, TimeStamp, Array, Emb.document
are some data types used in mongoDB

amazon> db.companyData.insertOne({name: "Amazon", isFunded: true, funding: 9384775839392727378292, employees: [{name:"vipul", age: 55}, {name: "amit", age: 78}], doundedOn: new Date(),FoundedOnTimestamp: new Timestamp()})

We can check the typeof to check the datatype

amazon> typeof.companyData.findOne().name
>> string
amazon> typeof.companyData.findOne().isFunded
>>Boolean
amazon> typeof.companyData.findOne().funding
>> number
amazon> typeof.companyData.findOne().employees
>>object
amazon> typeof.companyData.findOne().foundedOn
>>object
amazon> typeof.companyData.findOne().foundedOnTimeStamp
>>object


