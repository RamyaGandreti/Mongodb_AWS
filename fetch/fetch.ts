import * as express from "express";
import * as mongodb from "mongodb";

//create cliednt as it is a client server architure
let ramya:any = mongodb.MongoClient;
//here ramya is client

//create a module
let fetch:any = express.Router().get("/",(req:any,res:any)=>{
    ramya.connect("mongodb+srv://RamyaPatnaik:Ramya9898@cluster0.vd4zok7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",(err:any,connection:any):any=>{
        if(err) throw err;
        else{
            let db = connection.db("NodeJs");
            db.collection("products").find().toArray((err:any,array:any):any=>{
                if(err) throw err;
                else{
                    res.send(array);
                }
            })
        }
    })
});


export default fetch;
