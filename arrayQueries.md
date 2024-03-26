db.students.find({Hobbies: {$all: ["Walking" ,"Reading"]}})

db.students.find({experience:{$size:3}})

db.students.find({"experience.company":"Amazon"})

db.students.find({"experience.company":"Spotify"}).size()

---------------------------------------------------------------------------------------------

# Update Nested Array!

(Q) For all experiences lesser than and equal to 1 year for all students, add a new field : neglect:true

> {

    name: 'Pradyumna'
    hobbies: ['Singing', 'Cricket']
    bio: 'I am a coder'
    experience: [
        {company: "TCS", duration: 1 },
        {company: "TCS", duration: 2 },
        {company: "TCS", duration: 1 }
    ],
age : 15
}


college> db.students.updateMany({experience: {$elemMatch : {duration: {$lte:1}}}}, { $set : {"experience.$.neglect": true} })

{

    name: 'Pradyumna'
    hobbies: ['Singing', 'Cricket']
    bio: 'I am a coder'
    experience: [
        {company: "TCS", duration: 1, neglect: true },
        {company: "TCS", duration: 2 },
        {company: "TCS", duration: 1 }
    ],
age : 15
}

if we want to make all the experience to add neglect: true then

college> db.students.updateMany({experience: {$elemMatch : {duration: {$lte:1}}}}, { $set : {"experience.$[].neglect": 1} })

{

    name: 'Pradyumna'
    hobbies: ['Singing', 'Cricket']
    bio: 'I am a coder'
    experience: [
        {company: "TCS", duration: 1, neglect: true },
        {company: "TCS", duration: 2, neglect: true },
        {company: "TCS", duration: 1, neglect: true }
    ],
age : 15
}

// We only want to add negct: true in those who have experience le to 1

college> db.students.updateMany({experience: {$elemMatch : {duration: {$lte:1}}}}, { $set : {"experience.$[e].neglect": 1} }, {arrayFileters: [{"e.duration": {$lte:1}}]})

{

    name: 'Pradyumna'
    hobbies: ['Singing', 'Cricket']
    bio: 'I am a coder'
    experience: [
        {company: "TCS", duration: 1, neglect: true },
        {company: "TCS", duration: 2},
        {company: "TCS", duration: 1, neglect: true }
    ],
age : 15
}

-----------------------------------------------------------

$pop, $pull are used to remove an element drom an array
$push is used to add an element n an array
$addToSet is used to add an element without any repetition!

-----------------------------------------------------------

