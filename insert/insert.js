"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb = require("mongodb");
//create cliednt as it is a client server architure
var ramya = mongodb.MongoClient;
//here ramya is client
//create a module
var insert = express.Router().get("/", function (req, res) {
    ramya.connect("mongodb+srv://Ramya:Ramya9898@cluster0.h86wfqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("NodeJs");
            db.collection("products").insertOne({ "id": req.body.id,
                "name": req.body.name,
                "quantity": req.body.quantity,
                "price": req.body.price,
                "category": req.body.category,
                "image": req.body.category
            }, function (err, res) {
                if (err)
                    throw err;
                else {
                    res.status(200).json({ "message": "Record Inserted" });
                }
            });
        }
    });
});
exports.default = insert;
