db.students.find({Hobbies: {$all: ["Walking" ,"Reading"]}})

db.students.find({experience:{$size:3}})

db.students.find({"experience.company":"Amazon"})

db.students.find({"experience.company":"Spotify"}).size()

---------------------------------------------------------------------------------------------

# Update Nested Array!


