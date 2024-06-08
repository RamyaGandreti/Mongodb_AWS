import * as express from "express";
import * as cors from "cors";
import * as bodyparser from "body-parser";

import fetch from "./fetch/fetch";
import remove from "./remove/remove";
import insert from "./insert/insert";
import update from "./update/update";

let app:any = express();
app.use(cors());
//set MIME type

app.use(bodyparser.json());
bodyparser.urlencoded({extended:false});

app.use("/fetch",fetch);
app.use("/remove",remove);
app.use("/insert",insert);
app.use("/update",update);

app.listen("127.0.0.1:3000",(req:any,res:any)=>{
    console.log("Server Started");
    
})