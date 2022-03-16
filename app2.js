let express = require ('express');
let app = express();
const mongo = require('mongodb');
const MongoClient=mongo.MongoClient;
// const mongoUrl = "mongodb://localhost:27017"
const mongoUrl = 'mongodb+srv://admin:admin@cluster0.sjyst.mongodb.net/booking_data?retryWrites=true&w=majority'
let dotenv = require('dotenv')
dotenv.config()
const bodyParser = require('body-parser')
const cors = require('cors')
let port =process.env.PORT || 1234;
var db;

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())


//get

app.get('/' ,(req,res) =>{
    res.send("welcome to booking.com ///")
})

//get cities
app.get("/cities" ,(req,res)=>{
    db.collection('cities').find().toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
    
})

//get hotels wrt city using params
app.get("/hotels_list/:id" ,(req,res)=>{
    let reqId=Number(req.params.id)
    console.log("---reqId",reqId)
    db.collection('hotel_details').find({city_id:reqId}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
    
})

//filters()
app.get("/filter/:city_id" ,(req,res)=>{
    let sort = {cost:1}
    let cityId = Number(req.params.city_id)
    let categoryId = Number(req.query.category_id)
    let lcost = Number(req.query.lcost);
    let hcost = Number(req.query.hcost);
    let query = {}
    if(req.query.sort){
        sort = {cost:req.query.sort}
    }
    if(categoryId && lcost&hcost){
        query={
        category_id:categoryId, 
        city_id:cityId,
        $and:[{cost:{$gt:lcost,$lt:hcost}}]
        }
    }
    else if(categoryId){
        query={category_id:categoryId,city_id:cityId}
    }
    else if(lcost&hcost){
        query={$and:[{cost:{$gt:lcost,$lt:hcost}}],city_id:cityId}
    }
    db.collection('hotel_details').find(query).sort(sort).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
    
})


//hotel details (3rd page)
app.get("/hotel_data/:id" ,(req,res)=>{
    let hotelId=Number(req.params.id)
    db.collection('hotel_details').find({id:hotelId}).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
    
})

//to get info of selected hotel
app.get("/selected_hotel",(req,res)=>{
    let email=req.query.email;
    let query={};
    if(email){
        query={"email":email}
    }
    db.collection('selectedHotel').find(query).toArray((err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})

//to select hotel
app.post("/select_hotel",(req,res)=>{
    db.collection('selectedHotel').insert(req.body,(err,result)=>{
        if(err) throw err;
        res.send("hotel selected")
    })
})


app.put("/updateInfo/:id",(req,res)=>{
    let orderId= mongo.ObjectId(req.params.id)
    let status = req.query.status?req.query.status:'Pending'
    db.collection('selectedHotel').updateOne(
        {_id:orderId},
        {$set:{
            "status":status,
            "bank_name":req.body.bank_name,
            "transaction_status":req.body.transaction_status
        }},(err,result)=>{
            if(err) throw err;
            res.send(`status updated to ${status}`)
        }
    )
})


//delete selected hotel
app.delete("/delete_hotel",(req,res)=>{
    db.collection('selectedHotel').remove({},(err,result)=>{
        if(err) throw err;
        res.send(result)
    })
})



MongoClient.connect(mongoUrl,(err,connection) =>{
    if(err) console.log('Error while connecting');
    db = connection.db('booking_data')
    app.listen(port,()=>{
        console.log(`listening to port ${port}`)
    });
})