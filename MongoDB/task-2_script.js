/* 1. Retrieve the count of individuals who are active (isActive: true) for each
gender. */

// db.getCollection("task-2").aggregate([
//     // Stage - 1
//     {
//         $match: { isActive: true }    
//     },
//     // Stage - 2
//     {
//         $group: { _id: "$gender", count: { $sum: 1 } }
//     }

// ]) // Output: Female: 2943, Male: 2973

/*2. Retrieve the names and email addresses of individuals who are active
(`isActive: true`) and have a favorite fruit of "banana". */

// db.getCollection("task-2").aggregate([
//     // Stage - 1 : match 
//     {
//         $match: { isActive: true, favoriteFruit: "banana" }
//     },

//     // Stage - 2 : project 
//     {
//         $project: { name: 1, email: 1 }   
//     }

// ])

/*3. Find the average age of individuals for each favorite fruit, then sort the
results in descending order of average age.*/

// db.getCollection("task-2").aggregate([
//     // Stage - 1: grouping 
//     {
//         $group: { _id: "$favoriteFruit", avgAge: { $avg: "$age" } }
//     },
//     // Stage - 2: sorting 
//     {
//         $sort: { avgAge: -1 }
//     }
// ]) // apple: 29.948165255324607, banana: 29.907157157157158, strawberry: 29.902590931738914

/* 4. Retrieve a list of unique friend names for individuals who have at least
one friend, and include only the friends with names starting with the
letter "W".

Hints: Explore how to use regex [ "friends.name": /^W/] */

// db.getCollection("task-2").aggregate([
//     {
//         $unwind: "$friends"    
//     },

//     {
//         $match: { "friends.name": {$regex: /^W/} }
//     }, 
//     {
//         $group: { _id: "$friends.name"}
//     },
//     {
//         $project: {
//             _id: 0, // to exclude id  field 
//             friendsName: "$_id"
//         }
//     }
// ])

/* 5. Use $facet to separate individuals into two facets based on their age:
those below 30 and those above 30. Then, within each facet, bucket the
individuals into age ranges (e.g., 20-25, 26-30, etc.) and sort them by
age within each bucket. */

// db.getCollection("task-2").aggregate([
//     {
//         $facet: {
//             // Piipeline 1
//             "ageUnder30": [
//                 // Stage - 1
//                 {
//                     $match: { age: { $lt: 30 } }

//                 },
//                 // Stage - 2
//                 {
//                     $sort: { age: 1 }
//                 },
//                 // Stage - 2
//                 {
//                     $bucket: {
//                         groupBy: "$age",
//                         boundaries: [20, 25, 26, 30],
//                         default: "less than 30",
//                         output: {
//                             count: { $sum: 1 }
//                             // showNames: { $push: "$name" }
//                         }
//                     }
//                 }
//             ],
//             // Pipeline 2
//             "ageAbove30": [
//                 {
//                     $match: { age: { $gte: 30 } }
//                 },
//                 {
//                     $sort: { age: 1 }
//                 },
//                 {
//                     $bucket: {
//                         groupBy: "$age",
//                         boundaries: [40, 60, 80, 90],
//                         default: "greater than 90",
//                         output: {
//                             count: { $sum: 1 }
//                             // showNames: { $push: "$name" }
//                         }
//                     }
//                 }
//             ]
//         }
//     }

// ])

/* 6. Calculate the total balance of individuals for each company and display
the company name along with the total balance. Limit the result to show
only the top two companies with the highest total balance.
Hints: Explore $slice, $split. */

db.getCollection("task-2").aggregate([
    // stage - 1
    {
         $project: {
            company: 1,
            balance: 1,
            numericBalance: {
                $toDouble: {
                    $substr: ["$balance", 1, -1] // starts for 1 and take the remaining(-1)
                }
            }
        }
    },
    // Stage - 2
    {
        $group: { _id: "$company", totalBalance: { $sum: "$numericBalance" } }
    }, 
    // Stage - 3
    {
        $sort: { totalBalance: -1}
    },
    // Stage - 4
    {
        $limit: 2
    }
]) // Output: OATFARM = 39551.37 and MAZUDA = 38910.6