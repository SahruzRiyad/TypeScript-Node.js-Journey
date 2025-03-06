// db.test.find({ 
//     age: { $nin: [18, 20, 22, 24, 26, 28, 20] }, 
//     gender: "Female" , 
//     interests: { $in: ["Cooking",  "Gaming"] }
// }, 
//     {age: 1 , gender: 1 , interests: 1})
//     .sort({age: 1})
// implicit and 

// Explicit and
// db.test.find({
//     $and: [
//         { gender: "Female" }, 
//         { age: { $gte: 15 } },
//         { age: { $lte: 30 } }
//     ]
// }).project({
//     name: 1, 
//     gender: 1, 
//     age: 1
    
// }).sort({ 
//     age: 1
// })

//Explicit or 
// db.test.find({
//     $or: [
//         { interests: "Cooking" },
//         { "skills.name": "JAVASCRIPT" }
//     ]
// }).project({
//     interests: 1,
//     skills: 1
// })


//Explicit not 
// db.test.find({
//     age: { $not: { $gt: 1 } }
// }).project({
//     age: 1
// }).sort({
//     age: 1
// })

// $all
// db.test.find({
//     interests: {
//         $all: ["Travelling", "Gaming", "Cooking"]
//     }
// }).project({
//     interests: 1
// })

// $elemMatch
// db.test.find({
//     skills: {
//         $elemMatch: {
//             name: "JAVASCRIPT", 
//             level: "Intermidiate"
//         }
//     }
// }).project({
//     skills: 1
// })

// $Set, $AddToSet, $Push, -> CRUD operation 
// db.test.updateOne(
//     { _id: ObjectId("6406ad63fc13ae5a40000065") },
//     {
//         // $set: { // For entire update the field
//         //     age: 86,
//         //     interests: ["Gaming", "Cooking","Travelling"]
//         // }
        
//         // $addToSet: {
//         //     interests: "Playing" // To update single value, if value not exist then moddified
//         // }
        
//         // $addToSet: {
//         //     interests: { $each: ["Playing", "Driving"] } // To update multiple  value, if value not exist then moddified
//         // }
//         // $push: { // deosn't care if value exist or not
//         //     interests: { $each: ["Playing", "Driving"] } 
//         // $unset: { // To delete field 
//         //     birthday: ""  // birthday fileld been deleted 
//         // }
//         // $pop: {
//         //     friends: 1 // Pop last element from friend array; -1 is used for pop first element
//         // }
//         // $pull: {
//         //     friends: "Tanmoy Parvez" // to pull by specific value, and delete from the field 
//         // }
//         $pullAll: {
//             interests: ["Playing", "Driving" ] // to pull mutliple value, and delete from the field 
//         }
//     }
// )

// db.test.updateOne(
//     { _id: ObjectId("6406ad63fc13ae5a40000065") },
//     {
//         $set: {
//             "address.city": "Dhaka",
//             "address.country": "Bangladesh",
//             "address.postalCode": "1000",
//             "address.state": "Dhaka",
//             "address.street": "Dhanmondi"
//         }
            
//         $inc: { // To increment value
//             age: 2     // 2 is by which value it should increment that is jump   
//         }
//     }
// )

// db.test.updateOne(
//     { _id: ObjectId("6406ad63fc13ae5a40000065") , "education.major": "Art"},
//     {
//         $set: {
//           "education.$.major": "CSE" // To change the first match '$' sign is used 
//         }
//     }
// )

// db.test.deleteOne({ _id:  ObjectId("6406ad63fc13ae5a40000065")}) // To delete something

// db.createCollection("posts") // To create collection
// db.posts.insertOne({ test: "I am testing" }) // Insert in collection 
// db.posts.drop( { writeConcern: { w: 1 } } ) // drop the collection

