db.createCollection("nonfiction",{

    validator:{
        $jsonSchema:{
            required:['name','price'],
            properties:{
                name:{
                    bsonType:'string',
                    description:'must be a stringand required'
                },
                price:{
                    bsonType:'number',
                    description:'must be a stringand required'
                }
            }
        }
    },
    validationAction: 'error'
})

// lets say we want to chnage the collection, add an option of authors in the document then we command: collMod/collection modifier/.

db.runCommand({
    collMod:'nonfiction',
    validator:{
        $jsonSchema:{
            required:['name','price', 'author'],
            properties:{
                name:{
                    bsonType:'string',
                    description:'must be a stringand required'
                },
                price:{
                    bsonType:'number',
                    description:'must be a number and required'
                },
                author: {
                    bsonType: 'array',
                    description:'must be aan array and required',
                    items: {
                        bsontype:'object',
                        required:['name', 'email'],
                        properties: {
                            name:{
                                bsonType:'string'
                            },
                            email:{
                                bsonType: 'string'
                            }
                        }
                    }
                }
            }
        }
    },
    validationAction: 'warn'
})