import * as express from "express";
import * as mongodb from "mongodb";

//create cliednt as it is a client server architure
let ramya:any = mongodb.MongoClient;
//here ramya is client

//create a module
let insert:any = express.Router().get("/",(req:any,res:any)=>{
    ramya.connect("mongodb+srv://Ramya:Ramya9898@cluster0.h86wfqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",(err:any,connection:any):any=>{
        if(err) throw err;
        else{
            let db = connection.db("NodeJs");
            db.collection("products").insertOne({"id":req.body.id,
                                                  "name": req.body.name,
                                                  "quantity":req.body.quantity,
                                                  "price":req.body.price,
                                                  "category":req.body.category,
                                                  "image":req.body.category
            },(err:any,res:any):any=>{
                if(err) throw err;
                else{
                    res.status(200).json({"message":"Record Inserted"});
                }
            });
        }
    });
});


export default insert;
