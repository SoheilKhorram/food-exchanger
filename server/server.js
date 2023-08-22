const express = require('express'); const app = express();
const { MongoClient } = require('mongodb');
const client = new MongoClient('mongodb://127.0.0.1:27017');
app.use(express.json());

var codes_clct,users_clct;

const {
    uid,
    insert_to_users,
    get_users,
    get_user,
    update_user,
    insert_to_codes,
    get_codes,
    get_code,
    update_code,
    connect_to_db,
      } = require("./utils");

connect_to_db().then(res => 
{
    users_clct = res.users_clct;
    codes_clct = res.codes_clct;
});


app.post("/get_codes", async (req, res) => 
{
    // var result = await blah blah blah
});


app.listen(5000);