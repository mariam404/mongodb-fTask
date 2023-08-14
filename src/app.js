const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient
const connectionUrl = 'mongodb://127.0.0.1:27017'
const dbname = '8-8-23'

mongoClient.connect (connectionUrl , (error, res1)=>{
    if (error){
       return console.log('error')
    }
    console.log('all perfect')

    const db = res1.db(dbname)

    // insertOne
    db.collection ("users").insertOne({
        name : "Mariam",
        age : 23,
        city : "Alex",
        class :"First-items-group"
    } , (error , data)=>{
        if(error){
            console.log('error')
        }
        console.log("success")
    } )

    // insertOne
    db.collection ("users").insertOne({
        name : "Omar",
        age : 25,
        city : "Alex",
        class :"First-items-group"
    } , (error , data)=>{
        if(error){
            console.log('error')
        }
        console.log("success")
    } )


    // insertMany
    db.collection ('users').insertMany(
        [
            {
                name : "Esraa", 
                age : 25,
                city : "Mansoura",
                class :"First-items-group" 

            },
            {
                name : "Ali", 
                age : 26,
                city : "Alex",
                class :"First-items-group" 

            },
            {
                name : "Mai", 
                age : 28,
                city : "Giza" 

            },
            {
                name : "Osama", 
                age : 25,
                city : "Aswan" 

            },
            {
                name : "Shymaa", 
                age : 25,
                city : "Qnaa" 

            },
            {
                name : "Nada", 
                age : 26,
                city : "Mansoura" 

            },
            {
                name : "Mohamed", 
                age : 25,
                city : "cairo" 

            },
            {
                name : "Mo3taz", 
                age : 29,
                city : "Minya" 

            },
            {
                name : "Alyaa", 
                age : 23,
                city : "Faiyum" 

            },
            {
                name : "Yousef", 
                age : 25,
                city : "cairo" 

            },
        ], (error,data)=>{
            if(error){
                console.log('Unable to insert data')
            }
            console.log(data.insertedCount)
        } 
    )


    // find users with age : 25
    db.collection('users').find({age:25}).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured in find func')
        }
        console.log(users)
    })

    // find first 3 users with age : 25
    db.collection('users').find({age:25}).limit(3).toArray((error , users)=>{
        if (error) {
            return console.log('error has occured in limit func')
        }
        console.log(users)
    })



    // update first 4 user’s name
      db.collection("users").updateOne({_id:mongodb.ObjectId("64d8150ee99b5ad1cc5661e3")},{
        $set:{name : "Menna" }
      }).
      then((data1)=> {console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})



      db.collection("users").updateOne({_id:mongodb.ObjectId("64d8150ee99b5ad1cc5661e4")},{
        $set:{name : "Mohsen" }
      }).
      then((data1)=> {console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})


      db.collection("users").updateOne({_id:mongodb.ObjectId("64d8150ee99b5ad1cc5661e5")},{
        $set:{name : "Alaa" }
      }).
      then((data1)=> {console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})


      db.collection("users").updateOne({_id:mongodb.ObjectId("64d8150ee99b5ad1cc5661e6")},{
        $set:{name : "Yusra" }
      }).
      then((data1)=> {console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})

    /////////////////////////////////////////////////////////


    // inc first user’s age +20
    db.collection("users").updateOne({_id:mongodb.ObjectId("64d8150ee99b5ad1cc5661e3")},{
        $inc:{age : 20 }
    }).
      then((data1)=> {console.log(data1.modifiedCount)})
      .catch((error)=> {console.log(error)})


    // inc all user’s age +10
    db.collection("users").updateMany({},{
            $inc : {age: 10}
    })
        .then((data1) =>{console.log(data1.modifiedCount)})
        .catch((error)=> console.log(error))
    

    // delete first user 
    db.collection("users").deleteOne({_id:mongodb.ObjectId("64d8150ee99b5ad1cc5661e3")})
      .then((data1) =>{console.log(data1.deletedCount)})
      .catch((error)=> console.log(error))


    // delete all users with age = 35
    db.collection("users").deleteMany({age:35})
      .then((data1) =>{console.log(data1.deletedCount)})
      .catch((error)=> console.log(error))

})