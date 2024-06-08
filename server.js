"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var bodyparser = require("body-parser");
var fetch_1 = require("./fetch/fetch");
var remove_1 = require("./remove/remove");
var insert_1 = require("./insert/insert");
var update_1 = require("./update/update");
var app = express();
app.use(cors());
//set MIME type
app.use(bodyparser.json());
bodyparser.urlencoded({ extended: false });
app.use("/fetch", fetch_1.default);
app.use("/remove", remove_1.default);
app.use("/insert", insert_1.default);
app.use("/update", update_1.default);
app.listen("127.0.0.1:3000", function (req, res) {
    console.log("Server Started");
});
