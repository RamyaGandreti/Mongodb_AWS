import * as express from "express";
import * as mongodb from "mongodb";

let ramya:any=mongodb.MongoClient;

let update:any = express.Router().delete("/",(req:any,res:any)=>{
    ramya.connect("mongodb+srv://Ramya:Ramya9898@cluster0.h86wfqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",(err:any,connection:any):any=>{
        if(err) throw err;
        else{
            let db = connection.db("NodeJs");
            db.collection("products").updateOne({"id":req.body.id},
                                                {$set:{"price":req.body.price,
                                                        "quantity":req.body.quantity
                                                }},(err:any,res:any)=>{
                if(err) throw err;
                else{
                    res.status(200).json({"message":"Record Updated"})
                }
            });
        }
    });
});

export default update;