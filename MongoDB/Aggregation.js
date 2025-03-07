// db.test.aggregate([
//     // Stage - 1 : Match 
//     { $match: { gender: "Male", age: { $lt: 30 } } },

//     //Stage -2 : Project 
//     { $project: { name: 1, age: 1, gender: 1 } }

// ])

// addFields, out and merge operator
// db.test.aggregate([
//     // Stage - 1 : Match 
//     { $match: { gender: "Male"} },
    
//     // Stage -2 : addField
//     { $addFields: { course: "next level developer", designation: "Junior Software Developer" } },
    
//     //Stage -3 : Project 
//     { $project: { name: 1, gender: 1, course: 1 , designation: 1} },
    
//     //Stage - 4: Out
//     { $out: "junior-developer" }, // Create new collection and save the collection as junior-developer
    
//     // Merge 
//     { $merge: "test" } // Used to merge with existing collection 
// ])

// Group, Sum, Push 
// db.test.aggregate([
//     // { $group: { _id: "$address.country" , count : { $sum: 1 }} }
//     // { $group: { _id: "$address.country" , count : { $sum: 1 }, showName: { $push: "$name" } } }
//     { $group: { 
//         _id: "$address.country" , 
//         count : { $sum: 1 }, 
//         allDocument : { $push: "$$ROOT" } } // $$ROOT to show all document
//     } ,
    
//     // Stage -2: Projection 
//     {
//         $project: {
//             "allDcoument.name": 1,
//             "allDocument.email": 1,
//             "allDocument.phone": 1
//         }
//     }
    
// ])

// Group with $unwind 
// db.test.aggregate([
//     // // stage - 1 : unwind 
//     // {
//     //     $unwind: "$friends" // to break the array   
//     // },
//     // // stage - 2: grouping 
//     // {
//     //     $group: { _id: "$friends", count: { $sum: 1 } }
//     // }
    
//     {
//         $unwind: "$interests"
//     },
//     {
//         $group: { _id: "$age", count: { $sum: 1 }, interestField: { $push: "$interests" } }
//     }
// ])

// $bucket , $sort, and $limit 
// db.test.aggregate([
//     // stage-1 : $bucket
//     {
//         $bucket: { // Used to make different groups by conditions 
//             groupBy: "$age",
//             boundaries: [20, 40, 60, 80],
//             default: ">= 80",
//             output: {
//                 count: { $sum: 1 },
//                 showNames: { $push: "$name" }
//             }
//         }
//     }
//     // stage-2: $sort 
//     {
//         $sort: { count : -1}
//     },
    
//     // stage-3: $limt 
//     {
//         $limit: 2
//     },
    
//     // stage-4: $project
//     {
//         $project: { count: 1 }
//     }
        
// ])

// $facet , and multiple pipeline 
// db.test.aggregate([
//     {
//         $facet: {
//             // Pipeline 1
//           "friendsCount": [
//                 //stage-1
//                 { $unwind: "$friends" },
//                 //stage-2
//                 { $group: {_id: "$friends", count: { $sum: 1 }} }
//             ],
//             // Pipeline 2
//             "educationCount": [
//                 // stage-1
//                 { $unwind: "$education" }, 
//                 // stage-2
//                 { $group: { _id: "$education", count: { $sum: 1 } } }
//             ],
//             // Pipline 3
//             "skillsInfo": [
//                 // stage-1
//                 { $unwind: "$skills" },
//                 // stage-2
//                 { $group: { _id: "$skills" , count: {$sum: 1}} }
//             ]
//         }
//     }    

// ])

// $lookup stage to join multiple table/ collection 
// db.orders.aggregate([
//     {
//         $lookup: {
//               from: "test", // which collection to lookup means foreign
//               localField: "userId", // local primary key 
//               foreignField: "_id", // foreign key 
//               as: "user" // display name of matching field 
//              }
//     }    
// ])

// CollScan (page by page) vs IXS SCAN ( serach in index then goto that page)
// db.test.find({ email : "omirfin2@i2i.jp" }).explain("executionStats") // COLLSCAN
// db.test.createIndex({ email: 1 }) // Create index on email in accending order 
// db.test.find({ email : "omirfin2@i2i.jp" }).explain("executionStats") // IDXSCAN
// db.test.dropIndex({ email: 1 }) // to drop index

// Compound / Multiple Indexing 
// db.test.createIndex( { gender: -1, age: 1})

// db.test.createIndex({ "address.street": "text" }) // Indexing for searching text data
// db.test.find({ $text: { $search: "Center" } }).project({ "address.street": 1 })