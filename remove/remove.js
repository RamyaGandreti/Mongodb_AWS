"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb = require("mongodb");
var ramya = mongodb.MongoClient;
var remove = express.Router().delete("/", function (req, res) {
    ramya.connect("mongodb+srv://Ramya:Ramya9898@cluster0.h86wfqf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("NodeJs");
            db.collection("products").deleteOne({ "id": req.body.id }, function (err, res) {
                if (err)
                    throw err;
                else {
                    res.status(200).json({ "message": "Record Deleted" });
                }
            });
        }
    });
});
exports.default = remove;
