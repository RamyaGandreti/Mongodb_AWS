"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var mongodb = require("mongodb");
//create cliednt as it is a client server architure
var ramya = mongodb.MongoClient;
//here ramya is client
//create a module
var fetch = express.Router().get("/", function (req, res) {
    ramya.connect("mongodb+srv://RamyaPatnaik:Ramya9898@cluster0.vd4zok7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", function (err, connection) {
        if (err)
            throw err;
        else {
            var db = connection.db("NodeJs");
            db.collection("products").find().toArray(function (err, array) {
                if (err)
                    throw err;
                else {
                    res.send(array);
                }
            });
        }
    });
});
exports.default = fetch;
